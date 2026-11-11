"use client";

import { FilterRenderer } from "@/components/shared/dynamic-filter/filter-renderer";
import { DataTable } from "@/components/ui/data-table/data-table";

export default function ShopsPage() {
  return (
    <div className="space-y-8">
      <FilterRenderer config={[]} onApplyFilters={() => {}} />

      <DataTable data={[]} columns={[]} />
    </div>
  );
}
