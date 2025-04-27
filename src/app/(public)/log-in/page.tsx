import Image from 'next/image';
import Link from 'next/link';

import LogInForm from './_components/LogInForm';

const LogInPage = () => {
  return (
    <main className="flex h-full w-full flex-1">
      <div className="relative hidden h-full w-[60%] lg:block">
        <Image
          className="h-dvh w-full object-cover"
          src="assets/backgrounds/publicBackground.jpg"
          alt="logo"
          priority={true}
        />
      </div>
      <div className="flex w-full items-center justify-center lg:w-[40%]">
        <div className="max-w-[420px] rounded-md bg-white px-6 py-10">
          <h1 className="mb-2 text-center text-3xl font-semibold text-primary-80">
            Log In
          </h1>
          <h3 className="mb-6 text-balance text-center text-sm">
            Ready to get back to work? Sign in to Planify and stay on top of
            your tasks with ease!
          </h3>
          <LogInForm />
          <p className="mt-6 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LogInPage;
