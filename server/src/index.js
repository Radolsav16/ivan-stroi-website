import "dotenv/config";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import { ContactRequest } from "./models/contactRequest.js";
import { contactRequestSchema } from "./validation.js";

const { MONGODB_URI, PORT = "3001" } = process.env;
const trustProxy = process.env.TRUST_PROXY === "true";
const allowedOrigins = new Set(
  (process.env.ALLOWED_ORIGINS ?? "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is required. Add it to your server environment.");
}

const app = express();
app.disable("x-powered-by");
if (trustProxy) {
  app.set("trust proxy", 1);
}
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin is not allowed."));
    },
    methods: ["POST"],
  }),
);
app.use(express.json({ limit: "16kb", type: "application/json" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 3,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { message: "Твърде много опити. Моля, опитайте отново след малко." },
});

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});

app.post("/api/contact", contactLimiter, async (request, response, next) => {
  if (!request.is("application/json")) {
    response.status(415).json({ message: "Очакват се JSON данни." });
    return;
  }

  const result = contactRequestSchema.safeParse(request.body);

  if (!result.success) {
    response.status(400).json({
      message: "Проверете въведените данни.",
      fields: result.error.flatten().fieldErrors,
    });
    return;
  }

  try {
    await ContactRequest.create(result.data);
    response.status(201).json({ message: "Запитването е прието." });
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  void _next;
  if (error instanceof SyntaxError && "body" in error) {
    response.status(400).json({ message: "Невалидни данни." });
    return;
  }

  if (error instanceof Error && error.message === "Origin is not allowed.") {
    response.status(403).json({ message: "Заявката не е разрешена." });
    return;
  }

  console.error("Contact request failed", {
    name: error instanceof Error ? error.name : "UnknownError",
  });
  response.status(500).json({ message: "Възникна проблем. Моля, опитайте отново." });
});

await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
const server = app.listen(Number(PORT), () => {
  console.log(`Contact API is listening on port ${PORT}`);
});

const shutdown = async () => {
  await mongoose.disconnect();
  server.close(() => process.exit(0));
};

process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);
