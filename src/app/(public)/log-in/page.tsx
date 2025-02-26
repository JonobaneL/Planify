import Link from 'next/link';
import { LuLockKeyhole, LuMail } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LogInPage = () => {
  return (
    <main className="flex h-dvh w-full items-center justify-center">
      <div className="max-w-[420px] rounded-md bg-white px-6 py-10">
        <h1 className="mb-2 text-center text-3xl font-semibold text-primary-b-80">
          Log In
        </h1>
        <h3 className="mb-6 text-balance text-center text-sm">
          Ready to get back to work? Sign in to Planify and stay on top of your
          tasks with ease!
        </h3>
        <div className="mb-6 space-y-6">
          <div className="relative flex items-center">
            <LuMail className="absolute left-3 text-primary-b-80" size={18} />
            <Input
              className="h-10 pl-10 focus-visible:ring-primary-b-80"
              placeholder="Email address"
            />
          </div>
          <div className="relative flex items-center">
            <LuLockKeyhole
              className="absolute left-3 text-primary-b-80"
              size={18}
            />
            <Input
              className="h-10 pl-10 focus-visible:ring-primary-b-80"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mb-6 flex w-full justify-end">
          <Link href="/" className="text-sm text-primary-b">
            Forgot password?
          </Link>
        </div>

        <Button className="mx-auto block h-10 w-[60%] bg-primary-b text-base hover:bg-primary-b-80">
          Log In
        </Button>
        <p className="mt-6 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-primary-b">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LogInPage;
