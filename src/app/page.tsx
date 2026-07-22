"use client";

import { FormConfig } from "@/services/formBuilderService-2/types";

  export const myFormConfig: FormConfig = [
    // ۱. بخش اول: اطلاعات پایه (تست ساختار Section و Grid و فیلدهای پایه)
    {
      id: "personal-info-section",
      type: "section",
      title: "اطلاعات پرسنلی و پایه",
      wrapperVariant: "card",
      icon: "User2",
      iconSize: 25,
      headerClassName:"bg-amber-200",
      children: [
        {
          id: "fullName",
          type: "text",
          label: "نام و نام خانوادگی",
          placeholder: "محمد امین...",
          required: true,
          colSpan: 6,
        },
        {
          id: "customer",
          type: "customerSearch",
          label: "نام مشتری",
          colSpan:6
        },
        {
          id: "nationalCode",
          type: "nationalcode",
          label: "کد ملی",
          required: true,
          colSpan: 6,
        },
        {
          id: "employmentType",
          type: "select",
          label: "نوع همکاری",
          placeholder: "انتخاب کنید...",
          required: true,
          colSpan: 6,
          options: [
            { label: "تمام وقت", value: "fulltime" },
            { label: "پارت تایم / ساعتی", value: "parttime" },
            { label: "پروژه‌ای / دورکاری", value: "freelance" },
          ],
        },
      ],
    },

    // ۲. بخش دوم: سیستم هوشمند و شروط متصل (تست Tabs ،Computed Value و فیلدهای شرطی)
    {
      id: "financial-tabs",
      type: "tabs",
      items: [
        {
          id: "tab-salary",
          label: "قرارداد و محاسبه حقوق",
          children: [
            {
              id: "baseSalary",
              type: "amount",
              label: "حقوق پایه (ریال)",
              defaultValue: 4000000,
              isRial: false,
              colSpan: 4,
            },
            {
              id: "workHours",
              type: "number",
              label: "ساعت کارکرد (در ماه)",
              defaultValue: 160,
              // این فیلد فقط اگر نوع همکاری پارت‌تایم باشد دیده می‌شود
              visible: (vals) => vals.employmentType === "parttime",
              colSpan: 4,
            },
            {
              id: "hourlyRate",
              type: "amount",
              label: "نرخ هر ساعت (تومان)",
              defaultValue: 50000,
              visible: (vals) => vals.employmentType === "parttime",
              colSpan: 4,
            },
            {
              id: "totalPayout",
              type: "amount",
              label: "خالص دریافتی محاسباتی (تومان)",
              colSpan: 12,
              // تست قدرت Computed Value: محاسبه خودکار بر اساس نوع همکاری
              computedValue: (vals) => {
                if (vals.employmentType === "parttime") {
                  return (vals.workHours || 0) * (vals.hourlyRate || 0);
                }
                return vals.baseSalary || 0;
              },
            },
          ],
        },
        {
          id: "tab-benefits",
          label: "مزایا و ملزومات",
          children: [
            {
              id: "requestLaptop",
              type: "switch",
              label: "نیاز به لپ‌تاپ شرکت دارم",
              defaultValue: false,
              colSpan: 12,
            },
            {
              id: "laptopSpecs",
              type: "textarea",
              label: "مشخصات فنی سیستم مورد نظر",
              placeholder: "مثلا حداقل 16GB RAM...",
              colSpan: 12,
              // تست فیلد شرطی و اجباری شدن همزمان
              visible: (vals) => vals.requestLaptop === true,
              required: (vals) => vals.requestLaptop === true,
            },
          ],
        },
      ],
    },

    // ۳. بخش سوم: سوابق شغلی (تست عمیق Field Array با Append, Remove, Move و فیلدهای داخلی)
    {
      id: "experience-accordion",
      type: "accordion",
      items: [
        {
          id: "acc-work-history",
          label: "۲. سوابق کاری و پروژه‌ها (لیست پویا)",
          children: [
            {
              id: "projects",
              type: "array",
              label: "لیست پروژه‌های انجام شده",
              description:
                "پروژه‌های شاخصی که در ۳ سال اخیر مدیریت کرده‌اید را بسازید.",
              fields: [
                {
                  id: "projectName",
                  type: "text",
                  label: "نام پروژه",
                  required: true,
                  colSpan: 4,
                },
                {
                  id: "techStack",
                  type: "select",
                  label: "تکنولوژی اصلی",
                  required: true,
                  colSpan: 4,
                  options: [
                    { label: "React / Next.js", value: "nextjs" },
                    { label: "Vue / Nuxt.js", value: "nuxtjs" },
                    { label: "Flutter", value: "flutter" },
                    { label: "Node.js / Python", value: "backend" },
                  ],
                },
                {
                  id: "projectBudget",
                  type: "amount",
                  label: "بودجه پروژه (تومان)",
                  defaultValue: 10000000,
                  colSpan: 4,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "security-section",
      type: "section",
      wrapperVariant: "bordered",
      title: "اطلاعات حساب کاربری و مستندات",
      children: [
        // {
        //   id: "email",
        //   type: "email",
        //   label: "ایمیل سازمانی",
        //   placeholder: "info@company.com",
        //   colSpan: 6,
        //   required: true,
        // },
        {
          id: "password",
          type: "password",
          label: "رمز عبور جدید",
          placeholder: "******",
          colSpan: 6,
        },
        {
          id: "gender",
          type: "radio",
          label: "جنسیت",
          colSpan: 6,
          options: [
            { label: "آقا", value: "male" },
            { label: "خانم", value: "female" },
            { label: "سایر", value: "other" },
          ],
        },
        {
          id: "skills",
          type: "multiselect",
          label: "مهارت‌های فنی (چند انتخابی)",
          colSpan: 6,
          options: [
            { label: "TypeScript", value: "ts" },
            { label: "Docker", value: "docker" },
            { label: "Next.js", value: "next" },
            { label: "Tailwind CSS", value: "tailwind" },
          ],
        },
        { id: "birthDate", type: "date", label: "تاریخ تولد", colSpan: 6 },
        {
          id: "interviewTime",
          type: "datetime",
          label: "زمان مصاحبه حضوری",
          colSpan: 6,
        },
        {
          id: "dailyReminder",
          type: "time",
          label: "ساعت گزارش روزانه",
          colSpan: 6,
        },
        {
          id: "resumeFile",
          type: "file",
          label: "بارگذاری رزومه (PDF)",
          colSpan: 6,
        },
        {
          id: "avatarImage",
          type: "image",
          label: "تصویر پروفایل",
          colSpan: 6,
        },
      ],
    },
    {
      id: "submit-section",
      type: "section",
      wrapperVariant: "card",
      title: "ارسال فرم",
      children: [
        {
          id: "phoneNumber",
          type: "mobile",
          label: "شماره موبایل",
          placeholder: "09123456789",
          colSpan: 6,
          required: true,
          // تست اعتبارسنجی موبایل ایران
          // validation: {
          //   pattern: String.raw`^09\d{9}$`,
          //   errorMessage:
          //     "شماره موبایل وارد شده معتبر نیست (باید با 09 شروع شده و ۱۱ رقم باشد).",
          // },
        },
        {
          id: "postalCode",
          type: "postalcode",
          label: "کد پستی",
          placeholder: "1234567890",
          colSpan: 6,
          // تست اعتبارسنجی کد پستی ۱۰ رقمی
          // validation: {
          //   pattern: String.raw`^\d{10}$`,
          //   errorMessage: "کد پستی باید دقیقاً ۱۰ رقم و بدون خط تیره باشد.",
          // },
        },
        {
          id: "customSlug",
          type: "text",
          label: "شناسه یکتا (Slug)",
          placeholder: "my-awesome-post",
          colSpan: 12,
          // فقط حروف کوچک انگلیسی و خط تیره
          validation: {
            pattern: `^[a-z0-9-]+$`,
            errorMessage:
              "شناسه فقط می‌تواند شامل حروف کوچک انگلیسی، اعداد و خط تیره (-) باشد.",
          },
        },
      ],
    },
  ];

// import { FormRenderer } from "@/services/formBuilderService-2/components/form-renderer";
// import { FormConfig } from "@/services/formBuilderService-2/types";

// import { ColumnDef } from "@tanstack/react-table";
// import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { DataTable } from "@/components/ui/data-table/data-table";
// import { numberFormatter } from "@/components/ui/data-table/formatters";
// import { FilterConfig } from "@/components/shared/dynamic-filter/types";
// import { useState } from "react";
// import { FilterRenderer } from "@/components/shared/dynamic-filter/filter-renderer";
// import NavBar from "@/app/(sidebar)/_components/NavBar";

export default function page() {

  // interface User {
  //   id: number;
  //   fullName: string;
  //   nationalCode: string;
  //   phoneNumber: string;
  //   email: string;
  //   city: string;
  //   gender: "مرد" | "زن";
  //   age: number;
  //   status: "فعال" | "غیرفعال" | "در انتظار";
  //   score: number;
  //   salary: number;
  //   createdAt: string;
  // }

  // const users: User[] = [
  //   {
  //     id: 1,
  //     fullName: "علی رضایی",
  //     nationalCode: "0012345678",
  //     phoneNumber: "09121234567",
  //     email: "ali.rezaei@example.com",
  //     city: "تهران",
  //     gender: "مرد",
  //     age: 28,
  //     status: "فعال",
  //     score: 92,
  //     salary: 25000000,
  //     createdAt: "1403/01/15",
  //   },
  //   {
  //     id: 2,
  //     fullName: "مریم احمدی",
  //     nationalCode: "0023456789",
  //     phoneNumber: "09129876543",
  //     email: "maryam.ahmadi@example.com",
  //     city: "اصفهان",
  //     gender: "زن",
  //     age: 31,
  //     status: "در انتظار",
  //     score: 81,
  //     salary: 31000000,
  //     createdAt: "1403/02/10",
  //   },
  //   {
  //     id: 3,
  //     fullName: "رضا کریمی",
  //     nationalCode: "0034567890",
  //     phoneNumber: "09351234567",
  //     email: "reza.karimi@example.com",
  //     city: "شیراز",
  //     gender: "مرد",
  //     age: 35,
  //     status: "فعال",
  //     score: 95,
  //     salary: 42000000,
  //     createdAt: "1403/03/18",
  //   },
  //   {
  //     id: 4,
  //     fullName: "سارا محمدی",
  //     nationalCode: "0045678901",
  //     phoneNumber: "09135557788",
  //     email: "sara.mohammadi@example.com",
  //     city: "تبریز",
  //     gender: "زن",
  //     age: 24,
  //     status: "غیرفعال",
  //     score: 70,
  //     salary: 18000000,
  //     createdAt: "1403/01/28",
  //   },
  //   {
  //     id: 5,
  //     fullName: "محمد حسینی",
  //     nationalCode: "0056789012",
  //     phoneNumber: "09901234567",
  //     email: "m.hosseini@example.com",
  //     city: "مشهد",
  //     gender: "مرد",
  //     age: 40,
  //     status: "فعال",
  //     score: 88,
  //     salary: 39000000,
  //     createdAt: "1403/04/08",
  //   },
  //   {
  //     id: 6,
  //     fullName: "زهرا نادری",
  //     nationalCode: "0067890123",
  //     phoneNumber: "09124445566",
  //     email: "zahra.naderi@example.com",
  //     city: "کرج",
  //     gender: "زن",
  //     age: 29,
  //     status: "فعال",
  //     score: 91,
  //     salary: 27000000,
  //     createdAt: "1403/02/21",
  //   },
  //   {
  //     id: 7,
  //     fullName: "حسین قاسمی",
  //     nationalCode: "0078901234",
  //     phoneNumber: "09381112233",
  //     email: "hossein.qasemi@example.com",
  //     city: "اهواز",
  //     gender: "مرد",
  //     age: 33,
  //     status: "در انتظار",
  //     score: 76,
  //     salary: 22000000,
  //     createdAt: "1403/05/02",
  //   },
  //   {
  //     id: 8,
  //     fullName: "نگار صادقی",
  //     nationalCode: "0089012345",
  //     phoneNumber: "09121119988",
  //     email: "negar.sadeghi@example.com",
  //     city: "قم",
  //     gender: "زن",
  //     age: 26,
  //     status: "فعال",
  //     score: 86,
  //     salary: 24500000,
  //     createdAt: "1403/06/12",
  //   },
  //   {
  //     id: 9,
  //     fullName: "امیر موسوی",
  //     nationalCode: "0090123456",
  //     phoneNumber: "09031234567",
  //     email: "amir.mousavi@example.com",
  //     city: "یزد",
  //     gender: "مرد",
  //     age: 37,
  //     status: "غیرفعال",
  //     score: 67,
  //     salary: 34000000,
  //     createdAt: "1403/03/09",
  //   },
  //   {
  //     id: 10,
  //     fullName: "الهام اکبری",
  //     nationalCode: "0101234567",
  //     phoneNumber: "09126667788",
  //     email: "elham.akbari@example.com",
  //     city: "رشت",
  //     gender: "زن",
  //     age: 30,
  //     status: "فعال",
  //     score: 84,
  //     salary: 29500000,
  //     createdAt: "1403/02/05",
  //   },
  //   {
  //     id: 11,
  //     fullName: "سعید مرادی",
  //     nationalCode: "0112345678",
  //     phoneNumber: "09190001122",
  //     email: "saeed.moradi@example.com",
  //     city: "کرمان",
  //     gender: "مرد",
  //     age: 45,
  //     status: "فعال",
  //     score: 98,
  //     salary: 50000000,
  //     createdAt: "1403/01/03",
  //   },
  //   {
  //     id: 12,
  //     fullName: "فاطمه یوسفی",
  //     nationalCode: "0123456789",
  //     phoneNumber: "09363334455",
  //     email: "fateme.yousefi@example.com",
  //     city: "همدان",
  //     gender: "زن",
  //     age: 27,
  //     status: "در انتظار",
  //     score: 73,
  //     salary: 21500000,
  //     createdAt: "1403/05/20",
  //   },
  //   {
  //     id: 13,
  //     fullName: "مجید کاظمی",
  //     nationalCode: "0134567890",
  //     phoneNumber: "09134443322",
  //     email: "majid.kazemi@example.com",
  //     city: "زنجان",
  //     gender: "مرد",
  //     age: 39,
  //     status: "فعال",
  //     score: 89,
  //     salary: 36500000,
  //     createdAt: "1403/04/14",
  //   },
  //   {
  //     id: 14,
  //     fullName: "نازنین شریفی",
  //     nationalCode: "0145678901",
  //     phoneNumber: "09015556677",
  //     email: "nazanin.sharifi@example.com",
  //     city: "ارومیه",
  //     gender: "زن",
  //     age: 23,
  //     status: "غیرفعال",
  //     score: 69,
  //     salary: 19000000,
  //     createdAt: "1403/06/01",
  //   },
  //   {
  //     id: 15,
  //     fullName: "میلاد رستمی",
  //     nationalCode: "0156789012",
  //     phoneNumber: "09128889977",
  //     email: "milad.rostami@example.com",
  //     city: "بندرعباس",
  //     gender: "مرد",
  //     age: 34,
  //     status: "فعال",
  //     score: 90,
  //     salary: 33500000,
  //     createdAt: "1403/03/30",
  //   },
  //   {
  //     id: 16,
  //     fullName: "پریسا زمانی",
  //     nationalCode: "0167890123",
  //     phoneNumber: "09117778899",
  //     email: "parisa.zamani@example.com",
  //     city: "قزوین",
  //     gender: "زن",
  //     age: 32,
  //     status: "فعال",
  //     score: 87,
  //     salary: 30500000,
  //     createdAt: "1403/04/22",
  //   },
  //   {
  //     id: 17,
  //     fullName: "نوید عباسی",
  //     nationalCode: "0178901234",
  //     phoneNumber: "09371112244",
  //     email: "navid.abbasi@example.com",
  //     city: "سنندج",
  //     gender: "مرد",
  //     age: 29,
  //     status: "در انتظار",
  //     score: 80,
  //     salary: 25500000,
  //     createdAt: "1403/02/16",
  //   },
  //   {
  //     id: 18,
  //     fullName: "ریحانه موسوی",
  //     nationalCode: "0189012345",
  //     phoneNumber: "09125554433",
  //     email: "reyhane.mousavi@example.com",
  //     city: "بوشهر",
  //     gender: "زن",
  //     age: 28,
  //     status: "فعال",
  //     score: 93,
  //     salary: 32000000,
  //     createdAt: "1403/05/09",
  //   },
  //   {
  //     id: 19,
  //     fullName: "آرش جعفری",
  //     nationalCode: "0190123456",
  //     phoneNumber: "09123335544",
  //     email: "arash.jafari@example.com",
  //     city: "کرمانشاه",
  //     gender: "مرد",
  //     age: 36,
  //     status: "غیرفعال",
  //     score: 74,
  //     salary: 28500000,
  //     createdAt: "1403/06/18",
  //   },
  //   {
  //     id: 20,
  //     fullName: "شادی کریمی",
  //     nationalCode: "0201234567",
  //     phoneNumber: "09395556677",
  //     email: "shadi.karimi@example.com",
  //     city: "ساری",
  //     gender: "زن",
  //     age: 25,
  //     status: "فعال",
  //     score: 96,
  //     salary: 35000000,
  //     createdAt: "1403/01/25",
  //   },
  // ];

  // const columns: ColumnDef<User>[] = [
  //   {
  //     accessorKey: "id",
  //     header: "شناسه",
  //     meta: {
  //       formatter: numberFormatter,
  //     },
  //   },
  //   {
  //     accessorKey: "fullName",
  //     // header: ({ column }) => {
  //     //   return (
  //     //     <Button
  //     //       variant="ghost"
  //     //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //     //     >
  //     //       نام و نام خانوادگی
  //     //       <ArrowUpDown className="mr-2 h-4 w-4" />
  //     //     </Button>
  //     //   );
  //     // },
  //     header: "نام خانوادگی",
  //   },
  //   {
  //     accessorKey: "nationalCode",
  //     header: "کد ملی",
  //     meta: {
  //       formatter: numberFormatter,
  //     },
  //   },
  //   {
  //     accessorKey: "phoneNumber",
  //     header: "شماره موبایل",
  //     meta: {
  //       formatter: numberFormatter,
  //     },
  //   },
  //   {
  //     accessorKey: "city",
  //     header: "شهر",
  //   },
  //   {
  //     accessorKey: "gender",
  //     header: "جنسیت",
  //     cell: ({ row }) => <Badge variant="outline">{row.original.gender}</Badge>,
  //   },
  //   {
  //     accessorKey: "age",
  //     header: "سن",
  //     meta: {
  //       formatter: numberFormatter,
  //     },
  //   },
  //   {
  //     accessorKey: "status",
  //     header: "وضعیت",
  //     cell: ({ row }) => {
  //       const status = row.original.status;

  //       const variant =
  //         status === "فعال"
  //           ? "default"
  //           : status === "در انتظار"
  //             ? "secondary"
  //             : "destructive";

  //       return <Badge variant={variant}>{status}</Badge>;
  //     },
  //   },
  //   {
  //     accessorKey: "score",
  //     header: "امتیاز",
  //     meta: {
  //       formatter: numberFormatter,
  //     },
  //   },
  //   {
  //     accessorKey: "salary",
  //     header: "حقوق",
  //     cell: ({ row }) =>
  //       new Intl.NumberFormat("fa-IR").format(row.original.salary) + " تومان",
  //   },
  //   {
  //     accessorKey: "createdAt",
  //     header: "تاریخ ثبت",
  //   },
  //   {
  //     id: "actions",
  //     header: "عملیات",
  //     cell: ({ row }) => (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger
  //           render={
  //             <Button variant="ghost" size="icon">
  //               <MoreHorizontal className="size-4" />
  //             </Button>
  //           }
  //         ></DropdownMenuTrigger>

  //         <DropdownMenuContent align="end">
  //           <DropdownMenuItem onClick={() => console.log("View", row.original)}>
  //             مشاهده
  //           </DropdownMenuItem>

  //           <DropdownMenuItem onClick={() => console.log("Edit", row.original)}>
  //             ویرایش
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />

  //           <DropdownMenuItem
  //             className="text-destructive"
  //             onClick={() => console.log("Delete", row.original)}
  //           >
  //             حذف
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     ),
  //   },
  // ];

  // const transactionFiltersConfig: FilterConfig = [
  //   {
  //     id: "search",
  //     label: "جستجوی تراکنش",
  //     type: "text",
  //     placeholder: "شماره تراکنش یا نام کاربر...",
  //     colSpan: 12, // در دسکتاپ بزرگتر
  //   },
  //   {
  //     id: "status",
  //     label: "وضعیت تراکنش",
  //     type: "select",
  //     options: [
  //       { label: "همه", value: "" },
  //       { label: "موفق", value: "SUCCESS" },
  //       { label: "ناموفق", value: "FAILED" },
  //       { label: "در انتظار پرداخت", value: "PENDING" },
  //     ],
  //     colSpan: 6,
  //   },
  //   {
  //     id: "categories",
  //     label: "دسته‌بندی‌ها",
  //     type: "multiselect",
  //     options: [
  //       { label: "خرید شارژ", value: "recharge" },
  //       { label: "قبوض", value: "bills" },
  //       { label: "انتقال وجه", value: "transfer" },
  //     ],
  //     colSpan: 6,
  //   },
  //   {
  //     id: "createdAt",
  //     label: "بازه تاریخ ایجاد",
  //     type: "date-range",
  //     colSpan: 6,
  //   },
  // ];
  // const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  // const handleFilterApply = (cleanFilters: Record<string, any>) => {
  //   setActiveFilters(cleanFilters);

  //   // در این بخش می‌توانید به راحتی پارامترها را به API ارسال کنید یا با useRouter به URL پوش کنید:
  //   console.log("پارامترهای آماده برای ارسال به API سرور:", cleanFilters);

  //   // نمونه ارسال به سرور:
  //   // const queryString = new URLSearchParams(cleanFilters).toString();
  //   // fetch(`/api/transactions?${queryString}`).then(...)
  // };
  return (
    <div className="h-full">
      {/* <FormRenderer
        config={myFormConfig}
        onSubmit={(data) => console.log("data in formRendere: ", data)}
      />
      <DataTable
        columns={columns}
        data={users}
        onPageChanged={(currentPage) => {
          console.log("currentPage: ", currentPage);
        }}
        onPageSizeChanged={(currentPageSize) => {
          console.log("currentPageSize", currentPageSize);
        }}
      />
      <div className="my-8"></div>
      <FilterRenderer
        config={transactionFiltersConfig}
        onApplyFilters={handleFilterApply}
      /> */}
      dashboard main page
    </div>
  );
}
