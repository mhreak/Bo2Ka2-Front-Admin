import {
  BookOpen,
  Home,
  LinkIcon,
  Package2,
  UserCog2,
  Users2,
  UserStar,
} from "lucide-react";
import { SideBarItem } from "./type";
import { SIDEBAR_ITEM_LINKS } from "./sidebarItemsLinks";

export const SIDEBAR_ITEMS: SideBarItem[] = [
  {
    id: "home",
    title: "پیشخوان",
    icon: <Home className="[&_svg:not([class*='size-8'])]:size-8" />,
    link: SIDEBAR_ITEM_LINKS.home,
  },
  {
    id: "usage-billing",
    title: "مدیران",
    icon: <UserCog2 className="size-4" />,
    link: "#",
  },

  {
    id: "benefits",
    title: "فروشندگان",
    icon: <Users2 className="size-4" />,
    link: "#",
  },
  {
    id: "customers",
    title: "مشتریان",
    icon: <UserStar className="size-4" />,
    link: SIDEBAR_ITEM_LINKS.customers,
    subs: [
      {
        title: "مشتریان حقیقی",
        link: SIDEBAR_ITEM_LINKS.personList,
        icon: <Package2 className="size-4" />,
      },
      {
        title: "مشتریان حقوقی",
        link: "/projects",
        icon: <LinkIcon className="size-4" />,
      },
    ],
  },

  {
    id: "marketing",
    title: "بنر ها",
    icon: <BookOpen className="size-4" />,
    link: "#",
  },
];
