import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LuLockKeyhole, LuMail } from "react-icons/lu";

const LogInPage = () => {
  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <div className="max-w-[420px] px-6 py-10 bg-white rounded-md">
        <h1 className="text-center font-semibold text-3xl text-primary-b-80 mb-2">
          Log In
        </h1>
        <h3 className="text-sm text-center mb-6 text-balance">
          Ready to get back to work? Sign in to Planify and stay on top of your
          tasks with ease!
        </h3>
        <div className="mb-6 space-y-6">
          <div className="flex relative items-center">
            <LuMail className="absolute left-3 text-primary-b-80" size={18} />
            <Input
              className="h-10 pl-10 focus-visible:ring-primary-b-80"
              placeholder="Email address"
            />
          </div>
          <div className="flex relative items-center">
            <LuLockKeyhole
              className="absolute left-3 text-primary-b-80 "
              size={18}
            />
            <Input
              className="h-10 pl-10 focus-visible:ring-primary-b-80"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="w-full flex justify-end mb-6">
          <Link href="/" className="text-sm text-primary-b ">
            Forgot password?
          </Link>
        </div>

        <Button className="mx-auto block w-[60%] text-base h-10 bg-primary-b hover:bg-primary-b-80">
          Log In
        </Button>
        <p className="text-sm text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-primary-b">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LogInPage;
