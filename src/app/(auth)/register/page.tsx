import Link from "next/link";
import AuthForm from "../(components)/AuthForm";

const Register = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* HEADER */}
      <div className="space-y-1 text-center">
        <h2 className="text-xl font-bold tracking-[-0.47px] md:text-2xl">
          Let&#39;s get you started
        </h2>
        <p className="text-text-secondary">
          Sign Up and get access to Hiredify
        </p>
      </div>
      <AuthForm page="register" />
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
