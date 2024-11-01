"use client";
import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import AccountTypeSwitch from "./AccountTypeSwitch";
import { useEffect, useState, useTransition } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  registerSchemaType,
  loginSchema,
  loginSchemaType,
} from "@/lib/validation";
import { loginAction, registerAction } from "../actions";
import { PiCircleNotch } from "react-icons/pi";

type AuthFormProps = {
  page: "login" | "register";
};

const AuthForm = ({ page }: AuthFormProps) => {
  const [error, setError] = useState<string>();
  const [isEmployer, setIsEmployer] = useState(false);
  const [isPending, startTranstion] = useTransition();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<registerSchemaType | loginSchemaType>({
    resolver: zodResolver(page === "login" ? loginSchema : registerSchema),
  });

  const onSubmit = (values: registerSchemaType | loginSchemaType) => {
    setError(undefined);
    startTranstion(async () => {
      if (page === "login") {
        const result = await loginAction(values as loginSchemaType);

        if (result && "error" in result) {
          setError(result.error);
        }
      } else {
        const { error } = await registerAction(values as registerSchemaType);
        if (error) setError(error);
      }
    });
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
          {error && (
            <span className="mt-2 text-sm text-destructive">{error}</span>
          )}
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
            hasError={!!(errors as FieldErrors<registerSchemaType>).username}
            errorMessage={
              (errors as FieldErrors<registerSchemaType>).username?.message
            }
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

          {error && (
            <span className="mt-2 text-sm text-destructive">{error}</span>
          )}
        </>
      )}

      {page === "login" ? (
        <Button isLoading={isPending} type="submit" className="py-3">
          {isPending && <PiCircleNotch className="size-5 animate-spin" />} Login
        </Button>
      ) : (
        <Button isLoading={isPending} type="submit" className="py-3">
          {isPending && <PiCircleNotch className="size-5 animate-spin" />} Sign
          Up
        </Button>
      )}
    </form>
  );
};

export default AuthForm;
