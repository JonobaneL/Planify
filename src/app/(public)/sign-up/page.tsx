import Link from 'next/link';

import SignUpForm from './_components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="w-full max-w-[420px] p-6 py-10">
      <h1 className="mb-2 text-center text-3xl font-semibold text-primary-80">
        Sign Up
      </h1>
      <h3 className="mb-6 text-balance text-center text-sm font-normal">
        Ready to boost productivity? Create your Planify account and simplify
        your tasks!
      </h3>
      <SignUpForm />
      <p className="mt-6 text-center text-sm">
        Already have an account?{' '}
        <Link href="/log-in" className="text-primary">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
