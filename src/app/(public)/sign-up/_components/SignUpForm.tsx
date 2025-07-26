'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { LuCircleUser, LuLockKeyhole, LuMail } from 'react-icons/lu';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NEXT_PUBLIC_BACKEND_URL } from '@/config/env';
import { User } from '@/types/user';
import { handleAuthError } from '@/utils/authErrors';
import { DASHBOARD_PAGE } from '@/utils/constants';

import PasswordStrength from './PasswordStrength';
import { signUpSchema } from '../utils/formSchema';

export type FormParams = z.infer<typeof signUpSchema>;

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormParams>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });
  const router = useRouter();
  const submitHandler = async (data: FormParams) => {
    try {
      await axios.post<User>(`${NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        username: data.username,
        password: data.confirmPassword,
      });

      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.error) {
        const error = handleAuthError(res.error);
        setError('root', {
          message: error,
        });
      }
      router.push(DASHBOARD_PAGE);
    } catch (e) {
      console.error(e);
      const { response } = e as AxiosError<{ message: string }>;
      setError('root', {
        message:
          response?.data?.message || 'Registration failed. Please try again.',
      });
    }
  };

  const password = watch('password');

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
        icon={<LuMail size={18} className="text-primary-80" />}
      />
      <Input
        placeholder="Username"
        {...register('username')}
        errorMessage={errors.username?.message}
        icon={<LuCircleUser size={18} className="text-primary-80" />}
      />
      <Input
        placeholder="Password"
        {...register('password')}
        errorMessage={errors.password?.message}
        type="password"
        icon={<LuLockKeyhole className="text-primary-80" size={18} />}
      />
      <PasswordStrength password={password} />
      <Input
        placeholder="Confirm Password"
        {...register('confirmPassword')}
        errorMessage={errors.confirmPassword?.message}
        type="password"
        icon={<LuLockKeyhole className="text-primary-80" size={18} />}
      />
      <div className="mt-6">
        {errors.root && (
          <p className="text-center text-sm text-red-600">
            {errors.root.message}
          </p>
        )}
        <Button
          size="lg"
          className="mx-auto mt-3 block w-[60%]"
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
