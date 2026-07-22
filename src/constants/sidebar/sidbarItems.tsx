import {
  Home,
  LinkIcon,
  Package2,
  PieChart,
  Sparkles,
  Users,
} from "lucide-react";
import { SideBarItem } from "./type";
import { SidebarItemsLinks } from "./sidebarItemsLinks";

export const sidebarItems: SideBarItem[] = [
  {
    id: "home",
    title: "پیشخوان",
    icon: <Home className="size-4" />,
    link: SidebarItemsLinks.home,
  },
  {
    id: "customers",
    title: "مشتریان",
    icon: <Package2 className="size-4" />,
    link: SidebarItemsLinks.customers,
    subs: [
      {
        title: "لیست اشخاص",
        link: SidebarItemsLinks.personList,
        icon: <Package2 className="size-4" />,
      },
      {
        title: "پروژه ها",
        link: "/projects",
        icon: <LinkIcon className="size-4" />,
      },
    ],
  },
  {
    id: "usage-billing",
    title: "مدیریت معاملات",
    icon: <PieChart className="size-4" />,
    link: "#",
  },
  {
    id: "benefits",
    title: "فاکتور/ پیش فاکتور",
    icon: <Sparkles className="size-4" />,
    link: "#",
  },
  {
    id: "marketing",
    title: "بازاریابی",
    icon: <Users className="size-4" />,
    link: "#",
    subs: [
      {
        title: "همه فعالیت ها",
        link: "#",
      },
      {
        title: "بازاریابی تلفنی",
        link: "#",
      },
      {
        title: "بازدید های شوروم",
        link: "#",
      },
      {
        title: "بازاریابی پیامکی",
        link: "#",
      },
    ],
  },
];
