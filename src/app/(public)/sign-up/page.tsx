import Image from 'next/image';
import Link from 'next/link';

import backgroundImage from '@/assets/images/publicBackground.jpg';

import SignUpForm from './_components/SignUpForm';

const SignUpPage = () => {
  return (
    <main className="flex h-full w-full flex-1">
      <div className="relative hidden h-full w-[60%] lg:block">
        <Image
          className="h-dvh w-full object-cover"
          src={backgroundImage}
          alt="logo"
          priority={true}
        />
      </div>
      <div className="flex h-dvh w-full items-center justify-center lg:w-[40%]">
        <div className="w-full max-w-[420px] rounded-md bg-white p-6">
          <h1 className="mb-2 text-center text-3xl font-semibold text-primary-80">
            Sign Up
          </h1>
          <h3 className="mb-6 text-balance text-center text-sm">
            Ready to boost productivity? Create your Planify account and
            simplify your tasks!
          </h3>
          <SignUpForm />
          <p className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link href="/log-in" className="text-primary">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
