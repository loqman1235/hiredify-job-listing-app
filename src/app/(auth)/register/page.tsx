import AuthForm from "../(components)/AuthForm";

const Register = () => {
  return (
    <div>
      <h2 className="mb-5 text-xl font-bold tracking-tight md:text-2xl">
        Create an account
      </h2>
      <AuthForm page="register" />
    </div>
  );
};

export default Register;
