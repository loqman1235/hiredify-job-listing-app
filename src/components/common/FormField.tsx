"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";

type InputProps = {
  type?: "email" | "password" | "text" | "number" | "tel";
  label: string;
  className?: string;
  isRequired?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormField = ({
  className,
  label,
  isRequired = false,
  type = "text",
  ...props
}: InputProps) => {
  const [isPassHidden, setIsPassHidden] = useState(true);

  return (
    <div className="space-y-1">
      <label
        className="flex items-center gap-1 text-base font-medium tracking-[-0.18px]"
        htmlFor={props.id}
      >
        {label}{" "}
        {isRequired && <span className="text-destructive-foreground">*</span>}
      </label>
      <div className="relative">
        <input
          {...props}
          id={props.id}
          className={cn(
            "w-full rounded-md border border-border bg-transparent p-3 outline-none",
            className,
          )}
          type={type === "password" && !isPassHidden ? "text" : type}
        />

        {type === "password" && (
          <button
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
    </div>
  );
};

export default FormField;
