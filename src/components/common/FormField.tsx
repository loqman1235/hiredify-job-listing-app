"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

type InputProps = {
  type?: "email" | "password" | "text" | "number" | "tel" | "date";
  label: string;
  className?: string;
  isRequired?: boolean;
  hasError?: boolean;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      hasError,
      errorMessage,
      className,
      label,
      isRequired = false,
      type = "text",
      ...props
    },
    ref,
  ) => {
    const [isPassHidden, setIsPassHidden] = useState(true);

    return (
      <div className="w-full space-y-1">
        <label
          className="flex items-center gap-1 text-sm font-medium capitalize"
          htmlFor={props.id}
        >
          {label} {isRequired && <span className="text-destructive">*</span>}
        </label>
        <div className="relative">
          <input
            {...props}
            id={props.id}
            className={cn(
              `w-full rounded-md border bg-transparent p-3 outline-none placeholder:font-light placeholder:text-text-secondary focus:border-primary ${hasError ? "border-destructive" : "border-border"}`,
              className,
            )}
            type={type === "password" && !isPassHidden ? "text" : type}
            ref={ref}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() => setIsPassHidden((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary transition hover:text-text-primary"
            >
              {isPassHidden ? (
                <PiEye className="size-5" />
              ) : (
                <PiEyeSlash className="size-5" />
              )}
            </button>
          )}
        </div>

        {hasError && (
          <span className="text-sm text-destructive">{errorMessage}</span>
        )}
      </div>
    );
  },
);

FormField.displayName = "FormField";

export default FormField;
