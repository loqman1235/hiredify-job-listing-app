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
import { PiPencilSimpleLine, PiX } from "react-icons/pi";
import { postedJobsData } from "@/data";
import Link from "next/link";
import Badge from "@/components/common/Badge";

const JobsPage = () => {
  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Manage Jobs</h3>
      <Card>
        {/* Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader className="rounded-s-md">Job Title</TableHeader>
              <TableHeader className="rounded-s-md">Applicants</TableHeader>
              <TableHeader className="rounded-s-md">Created At</TableHeader>
              <TableHeader className="rounded-s-md">Expires At</TableHeader>
              <TableHeader className="rounded-s-md">Status</TableHeader>
              <TableHeader className="rounded-e-md">Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {postedJobsData.map((job, i) => (
              <TableRow key={job.title + "-" + i}>
                <TableData>
                  <Link
                    href="/"
                    className="text-base font-semibold text-text-primary transition hover:text-primary"
                  >
                    {job.title}
                  </Link>
                </TableData>
                <TableData className="text-success">
                  {job.numOfApplicants}
                </TableData>
                <TableData>{job.createdAt}</TableData>
                <TableData className="text-destructive">
                  {job.expiresAt}
                </TableData>
                <TableData>
                  <Badge text={job.status} variant="success" />
                </TableData>

                <TableData className="flex min-h-[80px] items-center">
                  <div className="flex items-center gap-2">
                    <Button variant="destructive" className="px-1.5 py-1.5">
                      <PiX className="size-4" />
                    </Button>
                    <Button variant="secondary" className="px-1.5 py-1.5">
                      <PiPencilSimpleLine className="size-4" />
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

export default JobsPage;
