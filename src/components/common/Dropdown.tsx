"use client";
import { cn } from "@/libs/utils";
import { useEffect, useRef } from "react";

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dropdown = ({
  children,
  className,
  isOpen,
  setIsOpen,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnClickOutside);

    return () => document.removeEventListener("mousedown", closeOnClickOutside);
  }, [setIsOpen]);

  console.log(isOpen);

  return (
    <div
      ref={dropdownRef}
      className={cn(
        `absolute right-0 top-full min-w-[200px] rounded-lg border border-border bg-foreground p-2 shadow-md ${isOpen ? "block" : "hidden"}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Dropdown;
