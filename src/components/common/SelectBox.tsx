"use client";
import { cn } from "@/libs/utils";
import { useEffect, useRef, useState } from "react";
import { PiCaretDown } from "react-icons/pi";

type SelectBoxProps = {
  variant?: "primary" | "secondary";
  label?: string;
  options: string[];
  defaultText?: string;
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
  isRequired?: boolean;
};

const SelectBox = ({
  variant = "primary",
  options,
  label,
  isRequired,
  value = "",
  onChange,
  className,
  defaultText = "Select an option",
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleSelectDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (val: string) => {
    setSelectedVal(val);
    setIsOpen(false);
    if (onChange) {
      onChange(val);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (value) {
      setSelectedVal(value);
    }
  }, [value]);

  return (
    <div className={`w-full`}>
      {variant === "primary" && (
        <label className="text-sm font-medium">
          {label}{" "}
          {variant === "primary" && isRequired && (
            <span className="text-destructive-foreground">*</span>
          )}
        </label>
      )}
      <div
        ref={selectRef}
        onClick={toggleSelectDropdown}
        className={cn(
          `relative cursor-pointer p-3 ${variant === "primary" && "rounded-md border border-border"}`,
          className,
        )}
      >
        {/* SELECTED VALUE */}
        <span
          className={`text-input-placeholder ${selectedVal && "!text-text-primary"}`}
        >
          {selectedVal ? selectedVal : defaultText}
        </span>
        <button
          type="button"
          className={`absolute top-1/2 -translate-y-1/2 ${variant === "primary" ? "right-3" : "right-0"}`}
        >
          <PiCaretDown
            className={`size-5 text-[var(--text-icon)] transition ${isOpen && "rotate-180"}`}
          />
        </button>

        {/* DROPDOWN */}
        {isOpen && (
          <ul
            role="listbox"
            onClick={(e) => e.stopPropagation()}
            className={`absolute left-0 top-full z-40 w-full space-y-5 rounded-xl border border-border bg-foreground p-5 shadow-xl`}
          >
            {/* OPTIONS */}
            {options.map((option) => (
              <li
                role="option"
                aria-selected={selectedVal === option}
                key={option}
                className="cursor-pointer text-text-secondary transition hover:text-text-primary"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectBox;
