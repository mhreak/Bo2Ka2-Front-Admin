import { Home, ShoppingCart, Store, UserStar } from "lucide-react";
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
    title: "فروشگاه ها",
    icon: <Store className="size-4" />,
    link: SIDEBAR_ITEM_LINKS.shops,
  },
  {
    id: "benefits",
    title: "محصولات",
    icon: <ShoppingCart className="size-4" />,
    link: SIDEBAR_ITEM_LINKS.products,
  },
  {
    id: "customers",
    title: "مشتریان",
    icon: <UserStar className="size-4" />,
    link: SIDEBAR_ITEM_LINKS.customers,
  },
];
