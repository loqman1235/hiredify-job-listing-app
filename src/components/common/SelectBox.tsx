"use client";
import { cn } from "@/libs/utils";
import { useEffect, useRef, useState } from "react";
import { PiCaretDown } from "react-icons/pi";

type SelectBoxProps = {
  options: string[];
  defaultText?: string;
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
};

const SelectBox = ({
  options,
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
    <div
      ref={selectRef}
      onClick={toggleSelectDropdown}
      className={cn("relative cursor-pointer p-4", className)}
    >
      {/* SELECTED VALUE */}
      <span className="text-text-secondary">
        {selectedVal ? selectedVal : defaultText}
      </span>
      <button className="absolute right-0 top-1/2 -translate-y-1/2">
        <PiCaretDown className="size-5 text-[var(--text-icon)]" />
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <ul
          role="listbox"
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-full w-full space-y-5 rounded-xl border border-[var(--border)] bg-foreground p-5 shadow-xl`}
        >
          {/* OPTIONS */}
          {options.map((option) => (
            <li
              role="option"
              aria-selected={selectedVal === option}
              key={option}
              className="cursor-pointer text-text-secondary"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
