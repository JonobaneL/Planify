import { useState } from 'react';

import ClearButton from '@/components/ClearButton';
import ComboSelect from '@/components/ComboSelect';
import { mockTeams, TeamType } from '@/data/mock/teams';

const TeamSelect: React.FC = () => {
  const [value, setValue] = useState<TeamType | null>(null);
  return (
    <ComboSelect
      options={mockTeams}
      onValueChange={setValue}
      valueField="name"
      displayField="name"
      placeholder="Search assignee..."
      emptyMessage="No assignee found."
    >
      <div className="group flex h-10 w-fit cursor-pointer items-center gap-2 rounded p-2 hover:bg-primary-10">
        {value === null ? (
          <p className="text-gray-600">No team</p>
        ) : (
          <>
            {value.name}
            <ClearButton className="p-0" handler={() => setValue(null)} />
          </>
        )}
      </div>
    </ComboSelect>
  );
};

export default TeamSelect;
