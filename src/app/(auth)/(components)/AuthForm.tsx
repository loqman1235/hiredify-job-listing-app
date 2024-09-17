"use client";
import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import AccountTypeSwitch from "./AccountTypeSwitch";
import { useState } from "react";

type AuthFormProps = {
  page: "login" | "register";
};

const AuthForm = ({ page }: AuthFormProps) => {
  const [isEmployer, setIsEmployer] = useState(false);

  return (
    <form className="flex flex-col gap-5">
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
          {/* Account Type */}
          <AccountTypeSwitch
            setIsEmployer={setIsEmployer}
            isEmployer={isEmployer}
          />
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
        </>
      )}
      <Button type="submit" className="py-3">
        {page === "login" ? "Login" : "Sign Up"}
      </Button>
    </form>
  );
};

export default AuthForm;
