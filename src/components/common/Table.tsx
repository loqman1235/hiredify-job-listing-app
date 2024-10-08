import { cn } from "@/libs/utils";
import React from "react";

type TableProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLTableElement>;

type TableHeadProps = {
  className?: string;
  children: React.ReactNode;
};

type TableBodyProps = {
  className?: string;
  children: React.ReactNode;
};

type TableRowProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLTableRowElement>;

type TableDataProps = {
  className?: string;
  children: React.ReactNode;
};

type TableHeaderProps = {
  className?: string;
  children: React.ReactNode;
};

const TableBody = ({ className, children }: TableBodyProps) => {
  return (
    <tbody className={cn("border-b border-b-muted", className)}>
      {children}
    </tbody>
  );
};

const TableHead = ({ className, children, ...props }: TableHeadProps) => {
  return (
    <thead
      className={cn("bg-primary/5 text-left text-sm text-primary", className)}
      {...props}
    >
      {children}
    </thead>
  );
};

const TableHeader = ({ className, children }: TableHeaderProps) => {
  return (
    <th className={cn("bg-muted px-6 py-3 text-text-secondary", className)}>
      {children}
    </th>
  );
};
const TableRow = ({ className, children, ...props }: TableRowProps) => {
  return (
    <tr
      className={cn(
        "border-b border-b-muted text-sm text-text-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

const TableData = ({ className, children }: TableDataProps) => {
  return <td className={cn("px-6 py-4", className)}>{children}</td>;
};

const Table = ({ className, children, ...props }: TableProps) => {
  return (
    <table
      className={cn(
        "!m-0 w-full table-auto text-sm text-text-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </table>
  );
};

export { Table, TableHead, TableBody, TableRow, TableData, TableHeader };
