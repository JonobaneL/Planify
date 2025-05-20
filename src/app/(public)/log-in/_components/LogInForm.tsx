'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { LuLockKeyhole, LuMail } from 'react-icons/lu';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/stores/auth';
import { User } from '@/types/user';

const logInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().nonempty('This field is required'),
});

type FormParams = z.infer<typeof logInSchema>;

const LogInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormParams>({
    resolver: zodResolver(logInSchema),
    mode: 'onChange',
  });
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const submitHandler = async (data: FormParams) => {
    try {
      const { email, password } = data;
      const res = await axios.post<User>('/auth/login', {
        email,
        password,
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
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      <Input
        placeholder="Email Address"
        {...register('email')}
        errorMessage={errors.email?.message}
        icon={<LuMail size={18} className="text-primary-80" />}
      />
      <Input
        placeholder="Password"
        {...register('password')}
        errorMessage={errors.password?.message}
        type="password"
        icon={<LuLockKeyhole className="text-primary-80" size={18} />}
      />
      <div className="mb-6 flex w-full justify-end">
        <Link href="/" className="text-sm text-primary">
          Forgot password?
        </Link>
      </div>
      <div>
        {errors.root && (
          <p className="text-center text-sm text-red-600">
            {errors.root.message}
          </p>
        )}
        <Button size="lg" className="mx-auto mt-3 block w-[60%]">
          Log In
        </Button>
      </div>
    </form>
  );
};

export default LogInForm;
