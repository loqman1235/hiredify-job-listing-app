import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/Table";
import { PiBriefcase, PiEye, PiMapPin, PiX } from "react-icons/pi";
import { appliedJobsData } from "@/data";
import Image from "next/image";
import Link from "next/link";

const ShortlistJobs = () => {
  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Shortlist Jobs</h3>
      <Card>
        {/* Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader className="rounded-s-md">Job Title</TableHeader>
              <TableHeader>Posted date</TableHeader>
              <TableHeader className="rounded-e-md">Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {appliedJobsData.map((job, i) => (
              <TableRow key={job.title + "-" + i}>
                <TableData>
                  <div className="flex w-full items-center gap-5">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-muted p-1">
                      <Image
                        src={job.image}
                        alt={job.title}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Link
                        href="/"
                        className="text-base font-semibold text-text-primary transition hover:text-primary"
                      >
                        {job.title}
                      </Link>
                      <ul className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-5">
                        <li className="flex items-center gap-1">
                          <span className="text-[var(--text-icon)]">
                            <PiBriefcase className="size-4" />
                          </span>
                          <span className="text-sm text-text-secondary">
                            {job.category}
                          </span>
                        </li>

                        <li className="flex items-center gap-1">
                          <span className="text-[var(--text-icon)]">
                            <PiMapPin className="size-4" />
                          </span>
                          <span className="text-sm text-text-secondary">
                            {job.location}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TableData>
                <TableData>July 20, 2021</TableData>

                <TableData className="flex min-h-[80px] items-center">
                  <div className="flex items-center gap-2">
                    <Button variant="destructive" className="px-1.5 py-1.5">
                      <PiX className="size-4" />
                    </Button>
                    <Button variant="secondary" className="px-1.5 py-1.5">
                      <PiEye className="size-4" />
                    </Button>
                  </div>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ShortlistJobs;
