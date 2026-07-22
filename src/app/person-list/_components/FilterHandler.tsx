"use client";

import { FilterRenderer } from "@/components/shared/dynamic-filter/filter-renderer";
import { FilterConfig } from "@/components/shared/dynamic-filter/types";

interface Props {

}

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
      options:[
        {label: "همه", value:""},
        {label: "شخص", value:"1"},
        {label: "شرکت سازمان", value:"2"},
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

const FilterHandler:React.FC<Props> = () => {
  const handleFilterApply = (cleanFilters: Record<string, any>) => {};

  return (
    <FilterRenderer config={filterItems} onApplyFilters={handleFilterApply} />
  );
};

export default FilterHandler;
