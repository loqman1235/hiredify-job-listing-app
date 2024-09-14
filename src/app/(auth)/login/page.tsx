import AuthForm from "../(components)/AuthForm";

const Login = () => {
  return (
    <div>
      <h2 className="mb-5 text-xl font-bold tracking-tight md:text-2xl">
        Login
      </h2>
      <AuthForm page="login" />
    </div>
  );
};

export default Login;
