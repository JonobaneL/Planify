'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { LuLockKeyhole, LuMail } from 'react-icons/lu';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/stores/auth';

const logInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().nonempty('This field is required'),
});

type FormParams = z.infer<typeof logInSchema>;

const LogInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormParams>({
    resolver: zodResolver(logInSchema),
    mode: 'onChange',
  });
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const submitHandler = async (data: FormParams) => {
    try {
      await login(data.email, data.password);
      router.push('/dashboard');
    } catch (e) {
      console.error(e);
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
      <Button size="lg" className="mx-auto !mt-6 block w-[60%]">
        Log In
      </Button>
    </form>
  );
};

export default LogInForm;
