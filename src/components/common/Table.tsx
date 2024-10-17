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
  colSpan?: number;
} & React.HTMLAttributes<HTMLTableCellElement>;

type TableHeaderProps = {
  className?: string;
  children: React.ReactNode;
  colSpan?: number;
} & React.HTMLAttributes<HTMLTableCellElement>;

const TableBody = ({ className, children }: TableBodyProps) => {
  return <tbody className={cn("", className)}>{children}</tbody>;
};

const TableHead = ({ className, children, ...props }: TableHeadProps) => {
  return (
    <thead className={cn("text-left", className)} {...props}>
      {children}
    </thead>
  );
};

const TableHeader = ({
  className,
  colSpan,
  children,
  ...props
}: TableHeaderProps) => {
  return (
    <th
      colSpan={colSpan}
      className={cn(
        "bg-muted px-6 py-3 text-xs font-semibold uppercase text-text-secondary",
        className,
      )}
      {...props}
    >
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

const TableData = ({
  className,
  colSpan,
  children,
  ...props
}: TableDataProps) => {
  return (
    <td colSpan={colSpan} className={cn("px-6 py-4", className)} {...props}>
      {children}
    </td>
  );
};

const Table = ({ className, children, ...props }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          "!m-0 w-full table-auto text-sm text-text-secondary",
          className,
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

export { Table, TableHead, TableBody, TableRow, TableData, TableHeader };
