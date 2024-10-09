"use client";
import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import AccountTypeSwitch from "./AccountTypeSwitch";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "@/libs/validation";

type AuthFormProps = {
  page: "login" | "register";
};

const AuthForm = ({ page }: AuthFormProps) => {
  const [isEmployer, setIsEmployer] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: registerSchemaType) => {
    if (page === "register") {
      console.log("Register Form");
      console.log(data);
    }
  };

  useEffect(() => {
    setValue("isEmployer", isEmployer);
  }, [isEmployer, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
            {...register("username")}
            hasError={!!errors.username}
            errorMessage={errors.username?.message}
          />

          <FormField
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            isRequired
            {...register("email")}
            hasError={!!errors.email}
            errorMessage={errors.email?.message}
          />
          <FormField
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            isRequired
            {...register("password")}
            hasError={!!errors.password}
            errorMessage={errors.password?.message}
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
