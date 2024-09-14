import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import SelectBox from "@/components/common/SelectBox";

type AuthFormProps = {
  page: "login" | "register";
};

const AuthForm = ({ page }: AuthFormProps) => {
  return (
    <div className="flex flex-col gap-5">
      {page === "login" ? (
        <>
          <FormField
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            isRequired
          />
          <FormField
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            isRequired
          />
        </>
      ) : (
        <>
          <div></div>
          <FormField
            id="username"
            label="Username"
            placeholder="Enter your username"
            isRequired
          />
          <FormField
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            isRequired
          />
          <FormField
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            isRequired
          />

          <SelectBox
            variant="primary"
            className="border-border rounded-md border bg-background py-3"
            label="Account type"
            options={["Candidate", "Employer"]}
            isRequired
          />
        </>
      )}
      <Button type="submit" className="py-3">
        {page === "login" ? "Login" : "Sign Up"}
      </Button>
    </div>
  );
};

export default AuthForm;
