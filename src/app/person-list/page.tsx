"use client";

import { FilterConfig } from "@/components/shared/dynamic-filter/types";
import { FilterRenderer } from "@/components/shared/dynamic-filter/filter-renderer";
import { ColumnDef } from "@tanstack/react-table";
import { numberFormatter } from "@/components/ui/data-table/formatters";
import { Badge } from "@/components/ui/badge";
import ActionsDropdownMenu from "@/components/shared/ActionsDropdownMenu";
import { DataTable } from "@/components/ui/data-table/data-table";
import { FormConfig } from "@/components/formBuilder/types";
import { FormDrawer } from "@/components/shared/FormDrawer";
import { myFormConfig } from "../page";

const filterItems: FilterConfig = [
  {
    id: "customerName",
    label: "نام مشتری",
    type: "text",
    colSpan: 6,
  },
  {
    id: "ad",
    label: "اطلاعات تماس",
    type: "text",
    colSpan: 6,
  },
  {
    id: "fdht",
    label: "نوع",
    type: "select",
    options: [
      { label: "همه", value: "" },
      { label: "شخص", value: "1" },
      { label: "شرکت سازمان", value: "2" },
    ],
    colSpan: 6,
  },
  {
    id: "yjgsdh",
    label: "گروه مشتری ",
    type: "text",
    colSpan: 6,
  },
  {
    id: "sth",
    label: "استان",
    type: "text",
    colSpan: 6,
  },
  {
    id: "hr",
    label: "شهرستان",
    type: "text",
    colSpan: 6,
  },
  {
    id: "htjj",
    label: "نحوه ی آشنایی",
    type: "text",
    colSpan: 6,
  },
  {
    id: "dfgrth",
    label: "وضعیت",
    type: "text",
    colSpan: 6,
  },
  {
    id: "dthdt",
    label: "کاربر مسئول",
    type: "text",
    colSpan: 6,
  },
];

interface User {
  id: number;
  fullName: string;
  nationalCode: string;
  phoneNumber: string;
  email: string;
  city: string;
  gender: "مرد" | "زن";
  age: number;
  status: "فعال" | "غیرفعال" | "در انتظار";
  score: number;
  salary: number;
  createdAt: string;
}

export const users: User[] = [
  {
    id: 1,
    fullName: "علی رضایی",
    nationalCode: "0012345678",
    phoneNumber: "09121234567",
    email: "ali.rezaei@example.com",
    city: "تهران",
    gender: "مرد",
    age: 28,
    status: "فعال",
    score: 92,
    salary: 25000000,
    createdAt: "1403/01/15",
  },
  {
    id: 2,
    fullName: "مریم احمدی",
    nationalCode: "0023456789",
    phoneNumber: "09129876543",
    email: "maryam.ahmadi@example.com",
    city: "اصفهان",
    gender: "زن",
    age: 31,
    status: "در انتظار",
    score: 81,
    salary: 31000000,
    createdAt: "1403/02/10",
  },
  {
    id: 3,
    fullName: "رضا کریمی",
    nationalCode: "0034567890",
    phoneNumber: "09351234567",
    email: "reza.karimi@example.com",
    city: "شیراز",
    gender: "مرد",
    age: 35,
    status: "فعال",
    score: 95,
    salary: 42000000,
    createdAt: "1403/03/18",
  },
  {
    id: 4,
    fullName: "سارا محمدی",
    nationalCode: "0045678901",
    phoneNumber: "09135557788",
    email: "sara.mohammadi@example.com",
    city: "تبریز",
    gender: "زن",
    age: 24,
    status: "غیرفعال",
    score: 70,
    salary: 18000000,
    createdAt: "1403/01/28",
  },
  {
    id: 5,
    fullName: "محمد حسینی",
    nationalCode: "0056789012",
    phoneNumber: "09901234567",
    email: "m.hosseini@example.com",
    city: "مشهد",
    gender: "مرد",
    age: 40,
    status: "فعال",
    score: 88,
    salary: 39000000,
    createdAt: "1403/04/08",
  },
  {
    id: 6,
    fullName: "زهرا نادری",
    nationalCode: "0067890123",
    phoneNumber: "09124445566",
    email: "zahra.naderi@example.com",
    city: "کرج",
    gender: "زن",
    age: 29,
    status: "فعال",
    score: 91,
    salary: 27000000,
    createdAt: "1403/02/21",
  },
  {
    id: 7,
    fullName: "حسین قاسمی",
    nationalCode: "0078901234",
    phoneNumber: "09381112233",
    email: "hossein.qasemi@example.com",
    city: "اهواز",
    gender: "مرد",
    age: 33,
    status: "در انتظار",
    score: 76,
    salary: 22000000,
    createdAt: "1403/05/02",
  },
  {
    id: 8,
    fullName: "نگار صادقی",
    nationalCode: "0089012345",
    phoneNumber: "09121119988",
    email: "negar.sadeghi@example.com",
    city: "قم",
    gender: "زن",
    age: 26,
    status: "فعال",
    score: 86,
    salary: 24500000,
    createdAt: "1403/06/12",
  },
  {
    id: 9,
    fullName: "امیر موسوی",
    nationalCode: "0090123456",
    phoneNumber: "09031234567",
    email: "amir.mousavi@example.com",
    city: "یزد",
    gender: "مرد",
    age: 37,
    status: "غیرفعال",
    score: 67,
    salary: 34000000,
    createdAt: "1403/03/09",
  },
  {
    id: 10,
    fullName: "الهام اکبری",
    nationalCode: "0101234567",
    phoneNumber: "09126667788",
    email: "elham.akbari@example.com",
    city: "رشت",
    gender: "زن",
    age: 30,
    status: "فعال",
    score: 84,
    salary: 29500000,
    createdAt: "1403/02/05",
  },
  {
    id: 11,
    fullName: "سعید مرادی",
    nationalCode: "0112345678",
    phoneNumber: "09190001122",
    email: "saeed.moradi@example.com",
    city: "کرمان",
    gender: "مرد",
    age: 45,
    status: "فعال",
    score: 98,
    salary: 50000000,
    createdAt: "1403/01/03",
  },
  {
    id: 12,
    fullName: "فاطمه یوسفی",
    nationalCode: "0123456789",
    phoneNumber: "09363334455",
    email: "fateme.yousefi@example.com",
    city: "همدان",
    gender: "زن",
    age: 27,
    status: "در انتظار",
    score: 73,
    salary: 21500000,
    createdAt: "1403/05/20",
  },
  {
    id: 13,
    fullName: "مجید کاظمی",
    nationalCode: "0134567890",
    phoneNumber: "09134443322",
    email: "majid.kazemi@example.com",
    city: "زنجان",
    gender: "مرد",
    age: 39,
    status: "فعال",
    score: 89,
    salary: 36500000,
    createdAt: "1403/04/14",
  },
  {
    id: 14,
    fullName: "نازنین شریفی",
    nationalCode: "0145678901",
    phoneNumber: "09015556677",
    email: "nazanin.sharifi@example.com",
    city: "ارومیه",
    gender: "زن",
    age: 23,
    status: "غیرفعال",
    score: 69,
    salary: 19000000,
    createdAt: "1403/06/01",
  },
  {
    id: 15,
    fullName: "میلاد رستمی",
    nationalCode: "0156789012",
    phoneNumber: "09128889977",
    email: "milad.rostami@example.com",
    city: "بندرعباس",
    gender: "مرد",
    age: 34,
    status: "فعال",
    score: 90,
    salary: 33500000,
    createdAt: "1403/03/30",
  },
  {
    id: 16,
    fullName: "پریسا زمانی",
    nationalCode: "0167890123",
    phoneNumber: "09117778899",
    email: "parisa.zamani@example.com",
    city: "قزوین",
    gender: "زن",
    age: 32,
    status: "فعال",
    score: 87,
    salary: 30500000,
    createdAt: "1403/04/22",
  },
  {
    id: 17,
    fullName: "نوید عباسی",
    nationalCode: "0178901234",
    phoneNumber: "09371112244",
    email: "navid.abbasi@example.com",
    city: "سنندج",
    gender: "مرد",
    age: 29,
    status: "در انتظار",
    score: 80,
    salary: 25500000,
    createdAt: "1403/02/16",
  },
  {
    id: 18,
    fullName: "ریحانه موسوی",
    nationalCode: "0189012345",
    phoneNumber: "09125554433",
    email: "reyhane.mousavi@example.com",
    city: "بوشهر",
    gender: "زن",
    age: 28,
    status: "فعال",
    score: 93,
    salary: 32000000,
    createdAt: "1403/05/09",
  },
  {
    id: 19,
    fullName: "آرش جعفری",
    nationalCode: "0190123456",
    phoneNumber: "09123335544",
    email: "arash.jafari@example.com",
    city: "کرمانشاه",
    gender: "مرد",
    age: 36,
    status: "غیرفعال",
    score: 74,
    salary: 28500000,
    createdAt: "1403/06/18",
  },
  {
    id: 20,
    fullName: "شادی کریمی",
    nationalCode: "0201234567",
    phoneNumber: "09395556677",
    email: "shadi.karimi@example.com",
    city: "ساری",
    gender: "زن",
    age: 25,
    status: "فعال",
    score: 96,
    salary: 35000000,
    createdAt: "1403/01/25",
  },
];

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "شناسه",
    meta: {
      formatter: numberFormatter,
    },
  },
  {
    accessorKey: "fullName",
    // header: ({ column }) => {
    //   return (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       نام و نام خانوادگی
    //       <ArrowUpDown className="mr-2 h-4 w-4" />
    //     </Button>
    //   );
    // },
    header: "نام خانوادگی",
  },
  {
    accessorKey: "nationalCode",
    header: "کد ملی",
    meta: {
      formatter: numberFormatter,
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "شماره موبایل",
    meta: {
      formatter: numberFormatter,
    },
  },
  {
    accessorKey: "city",
    header: "شهر",
  },
  {
    accessorKey: "gender",
    header: "جنسیت",
    cell: ({ row }) => <Badge variant="outline">{row.original.gender}</Badge>,
  },
  {
    accessorKey: "age",
    header: "سن",
    meta: {
      formatter: numberFormatter,
    },
  },
  {
    accessorKey: "status",
    header: "وضعیت",
    cell: ({ row }) => {
      const status = row.original.status;

      const variant =
        status === "فعال"
          ? "default"
          : status === "در انتظار"
            ? "secondary"
            : "destructive";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "score",
    header: "امتیاز",
    meta: {
      formatter: numberFormatter,
    },
  },
  {
    accessorKey: "salary",
    header: "حقوق",
    cell: ({ row }) =>
      new Intl.NumberFormat("fa-IR").format(row.original.salary) + " تومان",
  },
  {
    accessorKey: "createdAt",
    header: "تاریخ ثبت",
  },
  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => <ActionsDropdownMenu row={row} />,
  },
];

const formConfig: FormConfig = [
  {
    id: "personal-info-section",
    type: "section",
    title: "اطلاعات پرسنلی و پایه",
    wrapperVariant: "card",
    icon: "User2",
    iconSize: 25,
    sectionColSpan: 12,
    headerClassName: "bg-amber-200",
    children: [
      {
        id: "fullName",
        type: "text",
        label: "نام و نام خانوادگی",
        placeholder: "محمد امین...",
        required: true,
        colSpan: 4,
      },
    ],
  },
  {
    id: "personal-info-section-2",
    type: "section",
    title: "اطلاعات پرسنلی و پایه",
    wrapperVariant: "card",
    icon: "User2",
    iconSize: 25,
    sectionColSpan: 12,
    headerClassName: "bg-rose-200",
    children: [
      {
        id: "fullName",
        type: "customerSearch",
        label: "نام مشتری",
        required: true,
        colSpan: 6,
      },
    ],
  },
];

const PersonList = () => {
  const handleFilterApply = (cleanFilters: Record<string, any>) => {};

  const handlePageChange = (currentPage:number) => {}

  const handlePageSizeChange = (currentPageSize:number) => {}

  return (
    <div>
      <FilterRenderer config={filterItems} onApplyFilters={handleFilterApply} />
      <DataTable
        columns={columns}
        data={users}
        onPageChanged={handlePageChange}
        onPageSizeChanged={handlePageSizeChange}
      />
      <FormDrawer drawerTitle="ثبت مسافر جدید" formConfig={myFormConfig} /> 
    </div>
  );
};

export default PersonList;
