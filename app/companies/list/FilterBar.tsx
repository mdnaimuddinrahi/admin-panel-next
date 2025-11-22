"use client";
import { X } from "lucide-react";
import Datepicker from "react-tailwindcss-datepicker";
import Select from "react-select";
import InlineSearchBar from "@/components/InlineSearchBar";
import InputTextBar from "@/components/InputTextBar";
import InputSelectBar from "@/components/InputSelectBar";
import FloatingMultiSelect from "@/components/FloatingMultiSelect";
import { useState } from "react";

export default function FilterBar({ filters, setFilters }: any) {
  const [roles, setRoles] = useState([]);
  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
    { value: "manager", label: "Manager" },
  ];

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "banned", label: "Banned" },
  ];
  

  const handleClear = () =>
    setFilters({
      search: "",
      role: [],
      status: [],
      dateRange: { from: null, to: null },
    });
  


  return (
    <InlineSearchBar>
      <InputTextBar/>
      {/* <InputSelectBar/> */}
      {/* <FloatingMultiSelect
        label="Roles"
        value={roles}
        onChange={setRoles}
        options={roleOptions}
      /> */}
      {/* <div>
          <label className="block text-xs font-semibold mb-1">Role</label>
              <Select
                isMulti
                value=""
                options={roleOptions}
                className="w-48 text-sm"
                onChange={(selected) => setFilters({ ...filters, role: selected })}
              />
            </div> */}

    </InlineSearchBar>
  );
}
