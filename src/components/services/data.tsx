import { Bath, House, PaintRoller, Fence, Pipette, Paintbrush, Gem, Zap, Blocks, Grid3X3, PanelTop } from "lucide-react";

export const services = [
  {
    id: "remont-na-banya",
    number: "01",
    title: "Ремонт на баня",
    description:
      "Цялостен ремонт на баня – подготовка, хидроизолация, ВиК и плочки.",
    image: "/v1787591086/service-img-9.jpg",
    icon: <Bath className="size-6" />,
    href: "/services/remont-na-banya",
  },
  {
    id: "remont-na-apartamenti",
    number: "02",
    title: "Ремонт на апартаменти и къщи",
    description:
      "Цялостни и частични ремонти с прецизно изпълнение и внимание към всеки детайл.",
    image: "/v1787591083/service-img-3.jpg",
    icon: <House className="size-6" />,
    href: "/services/remont-na-apartamenti",
  },
  {
    id: "mazilki",
    number: "03",
    title: "Мазилки",
    description:
      "Вътрешни и външни мазилки с прецизна подготовка и качествено изпълнение.",
    image: "/v1787591080/service-img-6.jpg",
    icon: <PaintRoller className="size-6" />,
    href: "/services/mazilki",
  },
  {
    id: "stalbishta-dvorno-stroitelstvo",
    number: "04",
    title: "Стълбища и дворно пространство",
    description:
      "Изграждане и ремонт на стълбища, дворове и външни пространства според конкретния проект.",
    image: "/v1787591086/service-img-2.jpg",
    icon: <Fence className="size-6" />,
    href: "/services/stalbishta-dvorno-stroitelstvo",
  },
  {
    id: "vik-instalatsii",
    number: "05",
    title: "ВиК Инсталации",
    description:
      "Изграждане, подмяна и ремонт на ВиК инсталации за жилищни и строителни обекти.",
    image: "/v1787591087/servie-img-11.jpg",
    icon: <Pipette className="size-6" />,
    href: "/services/vik-instalatsii",
  },
  {
    id: "boyadjijski-uslugi",
    number: "06",
    title: "Бояджийски услуги",
    description:
      "Професионално боядисване на стени, тавани и помещения с качествено крайно покритие.",
    image: "/v1787591078/service-img-4.jpg",
    icon: <Paintbrush className="size-6" />,
    href: "/services/boyadjijski-uslugi",
  },
  {
    id: "polirane-na-estestven-kamak",
    number: "07",
    title: "Полиране на естествен камък",
    description:
      "Възстановяване и полиране на естествен камък за по-добър вид и дълготрайност.",
    image: "/v1787591088/service-img-10.jpg",
    icon: <Gem className="size-6" />,
    href: "/services/polirane-na-estestven-kamak",
  },
  {
    id: "el-instalatsii",
    number: "08",
    title: "Ел. Инсталации",
    description:
      "Изграждане, подмяна и ремонт на електрически инсталации с прецизно изпълнение.",
    image: "/v1787591077/service-img-7.jpg",
    icon: <Zap className="size-6" />,
    href: "/services/el-instalatsii",
  },
  {
    id: "lepene-na-estestven-kamak",
    number: "09",
    title: "Лепене на естествен камък",
    description:
      "Професионален монтаж на естествен камък за интериорни и екстериорни пространства.",
    image: "/v1787591085/service-img-8.jpg",
    icon: <Blocks className="size-6" />,
    href: "/services/lepene-na-estestven-kamak",
  },
  {
    id: "lepene-na-plochki",
    number: "10",
    title: "Лепене на плочки",
    description:
      "Прецизно полагане на стенни и подови плочки с внимание към всеки детайл.",
    image: "/v1787591081/service-img-1.jpg",
    icon: <Grid3X3 className="size-6" />,
    href: "/services/lepene-na-plochki",
  },
  {
    id: "shpaklovane",
    number: "11",
    title: "Шпакловане",
    description:
      "Професионална подготовка и шпакловане на стени и тавани за идеално гладка повърхност.",
    image: "/v1787591077/service-img-5.jpg",
    icon: <PanelTop className="size-6" />,
    href: "/services/shpaklovane",
  },
  {
    id: "gipsokarton",
    number: "12",
    title: "Гипсокартон",
    description:
      "Изпълняваме качествени гипсокартонени конструкции за стени, тавани, преградни помещения и декоративни елементи.",
    image: "/v1787864650/service-img-12.jpg",
    icon: <PanelTop className="size-6" />,
    href: "/services/gipsokarton",
  }
];