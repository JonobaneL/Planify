"use client";
import { useState } from "react";

const types = [
  {
    id: "type1",
    name: "Feature",
    color: "#009933",
  },
  {
    id: "type2",
    name: "Task",
    color: "#ffa64d",
  },
  {
    id: "type3",
    name: "Bug",
    color: "#ff471a",
  },
];

const TypeFilter = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = (id: string) => {
    setChecked((p) => {
      if (p.includes(id)) return p.filter((item) => item !== id);
      return [...p, id];
    });
  };
  return (
    <div>
      <h4 className="mb-1 text-sm font-medium text-slate-400">Group</h4>
      <div className="space-y-1">
        {types.map((type) => (
          <button
            key={type.id}
            className={`flex min-h-[30px] w-full min-w-32 cursor-pointer items-center gap-2 rounded-sm border px-2.5 py-1 hover:bg-primary-b-10 ${checked.includes(type.id) ? "bg-primary-b-10" : ""}`}
            onClick={() => handleCheck(type.id)}
          >
            <div className="size-3 rounded-sm" style={{ backgroundColor: type.color }} />
            <p className="text-sm">{type.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
