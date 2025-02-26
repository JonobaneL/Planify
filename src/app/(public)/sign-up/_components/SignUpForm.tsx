'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LuCircleUser, LuLockKeyhole, LuMail } from 'react-icons/lu';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { signUpSchema } from '../utils/formSchema';

import PasswordStrength from './PasswordStrength';

type FormParams = z.infer<typeof signUpSchema>;

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormParams>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const submitHandler = (data: FormParams) => {
    console.log(data);
  };

  const password = watch('password');
  console.log(password);
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-3"
    >
      <div className="flex gap-3">
        <Input
          placeholder="First Name"
          {...register('firstName')}
          errorMessage={errors.firstName?.message}
        />
        <Input
          placeholder="Last Name"
          {...register('lastName')}
          errorMessage={errors.lastName?.message}
        />
      </div>
      <Input
        placeholder="Email Address"
        {...register('email')}
        errorMessage={errors.email?.message}
        icon={<LuMail size={18} className="text-primary-b-80" />}
      />
      <Input
        placeholder="Username"
        {...register('username')}
        errorMessage={errors.username?.message}
        icon={<LuCircleUser size={18} className="text-primary-b-80" />}
      />
      <Input
        placeholder="Password"
        {...register('password')}
        errorMessage={errors.password?.message}
        icon={<LuLockKeyhole className="text-primary-b-80" size={18} />}
      />
      <PasswordStrength password={password} />
      <Input
        placeholder="Confirm Password"
        {...register('confirmPassword')}
        errorMessage={errors.confirmPassword?.message}
        icon={<LuLockKeyhole className="text-primary-b-80" size={18} />}
      />
      <Button className="mx-auto mt-6 block h-10 w-[60%] bg-primary-b text-base hover:bg-primary-b-80">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
