import StatusSelect from "@/components/StatusSelect";

import BoardNav from "../_components/Nav/BoardNav";
import { StatusParams } from "@/types/status";

const statuses = [
  {
    id: "status1",
    label: "Not Started",
    color: "#797E93",
  },
  {
    id: "status2",
    label: "In Progress",
    color: "#DEA761",
  },
  {
    id: "status3",
    label: "In Review",
    color: "#4C18DC",
  },
  {
    id: "status4",
    label: "In QA",
    color: "#885A95",
  },
  {
    id: "status5",
    label: "Done",
    color: "#175A63",
  },
] as StatusParams[];

const TablesPage = () => {
  return (
    <div>
      <BoardNav />
      <br />
      <br />
      <div className="flex w-full justify-center py-10">
        <div className="h-8 w-24 p-0.5">
          <StatusSelect options={statuses}>
            <button className="h-full w-full border"></button>
          </StatusSelect>
        </div>
      </div>
      <p>Tables</p>
    </div>
  );
};

export default TablesPage;
