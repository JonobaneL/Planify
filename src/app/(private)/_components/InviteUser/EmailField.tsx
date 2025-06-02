import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Member = {
  email: string;
  valid: boolean;
};

const emailSchema = z.string().email('Not valid email');

const EmailField: React.FC = () => {
  const [members, setEmails] = useState<Member[]>([
    { email: 'test@mail.com', valid: true },
    {
      email: 'test1@mail.com',
      valid: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleRemove = (email: string) => {
    setEmails(members.filter((item) => item.email !== email));
  };
  const handleChange = (value: string) => {
    setInputValue(value);
  };
  const emailsHandler = (key: string) => {
    if (key === 'Enter' || key === ' ') {
      const check = emailSchema.safeParse(inputValue);
      setEmails((p) => [...p, { email: inputValue, valid: check.success }]);
      setInputValue('');
    }
  };

  return (
    <div className="space-y-3">
      <Input
        type="text"
        value={inputValue}
        placeholder="Enter one or more emails"
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => emailsHandler(e.key)}
      />
      {members.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {members.map((member, index) => (
            <li
              key={index}
              onClick={() => handleRemove(member.email)}
              className={cn(
                'flex w-fit cursor-pointer items-center gap-2 rounded-full px-3 py-1 text-sm ring-1 ring-primary',
                !member.valid && 'ring-red-600',
              )}
            >
              <span>{member.email}</span>
              <IoCloseOutline size={16} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmailField;
