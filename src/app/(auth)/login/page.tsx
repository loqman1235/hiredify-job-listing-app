import Link from "next/link";
import AuthForm from "../_components/AuthForm";

const Login = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* HEADER */}
      <div className="space-y-1 text-center">
        <h2 className="text-xl font-bold tracking-[-0.47px] md:text-2xl">
          Welcome back!
        </h2>
        <p className="text-text-secondary">Sign in to continue to hiredify</p>
      </div>
      <AuthForm page="login" />
      <p className="text-center">
        Don&#39;t have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
