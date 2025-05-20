'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { LuCircleUser, LuLockKeyhole, LuMail } from 'react-icons/lu';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/stores/auth';
import { User } from '@/types/user';

import PasswordStrength from './PasswordStrength';
import { signUpSchema } from '../utils/formSchema';

export type FormParams = z.infer<typeof signUpSchema>;

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FormParams>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });
  const router = useRouter();

  const setUser = useAuthStore((state) => state.setUser);
  const submitHandler = async (data: FormParams) => {
    try {
      const res = await axios.post<User>('/auth/signup', {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        username: data.username,
        password: data.confirmPassword,
      });
      setUser(res.data);
      router.push('/dashboard');
    } catch (e) {
      console.error(e);
      const { response } = e as AxiosError<{ message: string }>;
      setError('root', {
        message: response?.data?.message,
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
        <Button size="lg" className="mx-auto mt-3 block w-[60%]">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
