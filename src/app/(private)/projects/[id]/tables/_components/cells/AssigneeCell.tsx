import { useState } from 'react';
import { LuUserPlus } from 'react-icons/lu';

import ClearButton from '@/components/ClearButton';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { usersMock } from '@/data/mock/mockUsers';

const AssigneeCell: React.FC = () => {
  //temporary state
  const [user, setUser] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        {!user ? (
          <div className="h-full p-1">
            <button className="flex h-full w-full items-center justify-center rounded-sm opacity-0 transition-all duration-150 hover:border hover:opacity-100">
              <LuUserPlus className="text-primary" size={16} />
            </button>
          </div>
        ) : (
          <div className="group flex h-full cursor-pointer items-center justify-between px-2">
            <p>{user}</p>
            <ClearButton handler={() => setUser(null)} />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <Command>
          <CommandInput placeholder="Search assignee..." className="h-9" />
          <CommandList>
            <CommandEmpty>No assignee found.</CommandEmpty>
            <CommandGroup>
              {usersMock.map((userItem) => (
                <CommandItem
                  key={userItem.id}
                  value={userItem.username}
                  onSelect={(currentValue) => {
                    setUser(currentValue === user ? null : currentValue);
                    setOpen(false);
                  }}
                >
                  {userItem.username}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default AssigneeCell;
