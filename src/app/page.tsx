"use client";

import { FormConfig } from "@/components/formBuilder/types";

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


export default function page() {

  return (
    <div className="h-full">
      dashboard main page
    </div>
  );
}
