import {
  Bath,
  House,
  PaintRoller,
  Fence,
  Pipette,
  Paintbrush,
  Gem,
  Zap,
  Blocks,
  Grid3X3,
  PanelTop,
} from "lucide-react";

export const services = [
  {
    id: "remont-na-banya",
    title: "Ремонт на баня",
    icon: <Bath className="size-6" />,
  },
  {
    id: "remont-na-apartamenti",
    title: "Ремонт на апартаменти и къщи",
    icon: <House className="size-6" />,
  },
  {
    id: "mazilki",
    title: "Мазилки",
    icon: <PaintRoller className="size-6" />,
  },
  {
    id: "stalbishta-dvorno-stroitelstvo",
    title: "Стълбища и дворно пространство",
    icon: <Fence className="size-6" />,
  },
  {
    id: "vik-instalatsii",
    title: "ВиК Инсталации",
    icon: <Pipette className="size-6" />,
  },
  {
    id: "boyadjijski-uslugi",
    title: "Бояджийски услуги",
    icon: <Paintbrush className="size-6" />,
  },
  {
    id: "polirane-na-estestven-kamak",
    title: "Полиране на естествен камък",
    icon: <Gem className="size-6" />,
  },
  {
    id: "el-instalatsii",
    title: "Ел. Инсталации",
    icon: <Zap className="size-6" />,
  },
  {
    id: "lepene-na-estestven-kamak",
    title: "Лепене на естествен камък",
    icon: <Blocks className="size-6" />,
  },
  {
    id: "lepene-na-plochki",
    title: "Лепене на плочки",
    icon: <Grid3X3 className="size-6" />,
  },
  {
    id: "shpaklovane",
    title: "Шпакловане",
    icon: <PanelTop className="size-6" />,
  },
];

export const callsToAction = [
  { title: "Заяви безплатен оглед", href: "/contact-us" },
  { title: "Разгледай проектите", href: "/gallery" },
];

export const navLinks = [
  { title: "Галерия", href: "/gallery" },
  { title: "За нас", href: "/about-us" },
  { title: "Контакти", href: "/contact-us" },
];
