import { myFormConfig } from "@/app/page";
import { FormDrawer } from "@/components/shared/FormDrawer";
import { FormConfig } from "@/services/formBuilderService-2/types";

const FormHandler = () => {
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

  const myForm: FormConfig = myFormConfig

  return <FormDrawer drawerTitle="ثبت مسافر جدید" formConfig={myForm} />;
};

export default FormHandler;
