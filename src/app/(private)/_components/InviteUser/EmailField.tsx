import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import { Input } from '@/components/ui/input';

const EmailField: React.FC = () => {
  const [emails, setEmails] = useState<string[]>([
    'test@mail.com',
    'test1@mail.com',
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleRemove = (email: string) => {
    setEmails(emails.filter((item) => item !== email));
  };
  const handleChange = (value: string) => {
    setInputValue(value);
  };
  const emailsHandler = (key: string) => {
    if (key === 'Enter' || key === ' ') {
      setEmails((p) => [...p, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="space-y-2">
      <Input
        type="text"
        value={inputValue}
        placeholder="Enter one or more emails"
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => emailsHandler(e.key)}
      />
      {emails.length > 0 && (
        <ul className="flex flex-wrap gap-1">
          {emails.map((email, index) => (
            <li
              key={index}
              onClick={() => handleRemove(email)}
              className="flex w-fit cursor-pointer items-center gap-2 rounded bg-primary-b-80 px-2 py-1 text-sm text-white"
            >
              <span>{email}</span>
              <IoCloseOutline size={14} color="#fff" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmailField;
