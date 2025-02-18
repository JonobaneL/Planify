import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUpPage = () => {
  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <div className="p-6 bg-white rounded-md space-y-2">
        <h1 className="text-center font-semibold text-2xl">Sign Up</h1>
        <Input placeholder="Email address" />
        <Input placeholder="Enter Password" />
        <Input placeholder="Confirm Password" />
        <Button>Sign Up</Button>
      </div>
    </main>
  );
};

export default SignUpPage;
