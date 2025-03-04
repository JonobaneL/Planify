import { LuCircle, LuCircleCheckBig } from 'react-icons/lu';

import { cn } from '@/lib/utils';

import { PASSWORD_STEPS } from '../utils/constants';

type StrengthProps = {
  password: string;
};

const PasswordStrength: React.FC<StrengthProps> = ({ password }) => {
  if (!password || password?.length < 8) return null;
  return (
    <ul className="pl-2">
      {PASSWORD_STEPS.map((step) => {
        const isValid = step.rejex.test(password);
        return (
          <li key={step.key} className="flex items-center gap-2">
            {isValid ? (
              <LuCircleCheckBig size={14} className="text-primary-80" />
            ) : (
              <LuCircle size={14} className="text-gray-400" />
            )}

            <p
              className={cn(
                'text-sm',
                isValid ? 'text-primary-80' : 'text-gray-400',
              )}
            >
              {step.label}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default PasswordStrength;
