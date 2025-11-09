import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';

type InputProps = {
  title: string;
  onChange: (value: string) => void;
  className?: string;
  onClose?: () => void;
};

const TitleInput: React.FC<InputProps> = ({
  title,
  onChange,
  className,
  onClose,
}) => {
  const [tempTitle, setTempTitle] = useState<string>(title);

  const onBlurHandler = () => {
    if (tempTitle !== title && tempTitle.length > 0) {
      onChange(tempTitle);
    }
    onClose?.();
  };
  const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onBlurHandler();
    }
  };

  useEffect(() => {
    setTempTitle(title);
  }, [title]);

  return (
    <Input
      type="text"
      value={tempTitle}
      onChange={(e) => setTempTitle(e.target.value)}
      onBlur={onBlurHandler}
      className={className}
      autoFocus
      onKeyDown={onKeyHandler}
    />
  );
};

export default TitleInput;
