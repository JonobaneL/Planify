"use client";
import { useState } from "react";

const estimations = [
  {
    id: "estimation1",
    name: "1",
  },
  {
    id: "estimation2",
    name: "3",
  },
  {
    id: "estimation3",
    name: "5",
  },
  {
    id: "estimation4",
    name: "8",
  },
  {
    id: "estimation5",
    name: "12",
  },
];

const EstimationFilter = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = (id: string) => {
    setChecked((p) => {
      if (p.includes(id)) return p.filter((item) => item !== id);
      return [...p, id];
    });
  };
  return (
    <div>
      <h4 className="mb-1 text-sm font-medium text-slate-400">Estimation</h4>
      <div className="flex min-w-32 max-w-36 flex-wrap gap-1">
        {estimations.map((estimation) => (
          <button
            key={estimation.id}
            className={`flex min-h-[30px] w-fit min-w-[30px] cursor-pointer items-center justify-center gap-2 rounded-sm border px-2.5 py-1 text-sm hover:bg-primary-b-10 ${checked.includes(estimation.id) ? "bg-primary-b-10" : ""}`}
            onClick={() => handleCheck(estimation.id)}
          >
            {estimation.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EstimationFilter;
