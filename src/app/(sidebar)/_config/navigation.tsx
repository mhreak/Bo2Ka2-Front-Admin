import {
  Activity,
  DollarSign,
  Home,
  Infinity,
  LinkIcon,
  Package2,
  Percent,
  PieChart,
  Settings,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

export type Route = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  link: string;
  subs?: {
    title: string;
    link: string;
    icon?: React.ReactNode;
  }[];
};

export const dashboardRoutes: Route[] = [
  {
    id: "home",
    title: "پیشخوان",
    icon: <Home className="size-4" />,
    link: "/",
  },
  {
    id: "products",
    title: "مشتریان",
    icon: <Package2 className="size-4" />,
    link: "#",
    subs: [
      {
        title: "لیست اشخاص",
        link: "/person-list",
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
    id: "customers",
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
  {
    id: "sales",
    title: "Sales",
    icon: <ShoppingBag className="size-4" />,
    link: "#",
    subs: [
      {
        title: "Orders",
        link: "#",
        icon: <ShoppingBag className="size-4" />,
      },
      {
        title: "Subscriptions",
        link: "#",
        icon: <Infinity className="size-4" />,
      },
    ],
  },
  {
    id: "storefront",
    title: "Storefront",
    icon: <Store className="size-4" />,
    link: "#",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <TrendingUp className="size-4" />,
    link: "#",
  },
  {
    id: "finance",
    title: "Finance",
    icon: <DollarSign className="size-4" />,
    link: "#",
    subs: [
      { title: "Incoming", link: "#" },
      { title: "Outgoing", link: "#" },
      { title: "Payout Account", link: "#" },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    icon: <Settings className="size-4" />,
    link: "#",
    subs: [
      { title: "General", link: "#" },
      { title: "Webhooks", link: "#" },
      { title: "Custom Fields", link: "#" },
    ],
  },
];
