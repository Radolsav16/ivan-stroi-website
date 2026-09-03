const CONTACT_EMAIL = "krasenivanov21@gmail.com";

const DEFAULT_ERROR_MESSAGE = "Запитването не беше изпратено. Моля, опитайте отново.";

const getApiErrorMessage = async (response: Response) => {
  const payload: unknown = await response.json().catch(() => null);

  if (
    payload &&
    typeof payload === "object" &&
    "message" in payload &&
    typeof payload.message === "string"
  ) {
    return payload.message;
  }

  return DEFAULT_ERROR_MESSAGE;
};

export async function submitContactRequest(form: HTMLFormElement) {
  const formData = new FormData(form);
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });

    if (!response.ok) {
      throw new Error(await getApiErrorMessage(response));
    }

    return "sent" as const;
  }

  const message = [
    `Име: ${formData.get("name") ?? ""}`,
    `Телефон: ${formData.get("phone") ?? ""}`,
    `Email: ${formData.get("email") ?? ""}`,
    `Услуга: ${formData.get("service") ?? ""}`,
    "",
    `Съобщение:\n${formData.get("message") ?? ""}`,
  ].join("\n");

  const mailto = new URLSearchParams({
    subject: "Ново запитване от сайта на IVANOV STROI",
    body: message,
  });

  window.location.href = `mailto:${CONTACT_EMAIL}?${mailto.toString()}`;
  return "email-client" as const;
}
