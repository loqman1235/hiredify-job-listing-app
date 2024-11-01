"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { PiCaretDown } from "react-icons/pi";

type SelectBoxProps = {
  variant?: "primary" | "secondary";
  label?: string;
  options: { value: string; label: string }[];
  defaultText?: string;
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
  isRequired?: boolean;
  hasError?: boolean;
  errorMessage?: string;
};

const SelectBox = ({
  hasError,
  errorMessage,
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
  const [selectedLabel, setSelectedLabel] = useState(defaultText);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleSelectDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (val: string) => {
    const selectedOption = options.find((option) => option.value === val);
    setSelectedLabel(selectedOption ? selectedOption.label : defaultText);
    setIsOpen(false);
    onChange?.(val);
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
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) {
      setSelectedLabel(selectedOption.label);
    }
  }, [value, options]);

  return (
    <div className="w-full">
      {label && (
        <label className="text-sm font-medium" onClick={toggleSelectDropdown}>
          {label} {isRequired && <span className="text-destructive">*</span>}
        </label>
      )}
      <div
        ref={selectRef}
        className={cn(
          "relative cursor-pointer p-3",
          hasError && "border-destructive",
          variant === "primary" && "rounded-md border border-border",
          className,
        )}
        onClick={toggleSelectDropdown}
      >
        {/* SELECTED LABEL */}
        <span
          className={cn(
            "font-light text-text-secondary",
            selectedLabel && "!text-text-primary",
          )}
        >
          {selectedLabel || defaultText}
        </span>
        <button
          type="button"
          aria-expanded={isOpen}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2",
            variant === "secondary" && "right-0",
          )}
        >
          <PiCaretDown
            className={cn(
              "size-5 text-[var(--text-icon)] transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {/* DROPDOWN */}
        {isOpen && (
          <ul
            role="listbox"
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-full z-40 w-full space-y-5 rounded-xl border border-border bg-foreground p-5 shadow-xl"
          >
            {/* OPTIONS */}
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={selectedLabel === option.label}
                className="cursor-pointer text-text-secondary transition hover:text-text-primary"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {hasError && (
        <span className="text-sm text-destructive">{errorMessage}</span>
      )}
    </div>
  );
};

export default SelectBox;
