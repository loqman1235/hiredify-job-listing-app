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
import { PiPencilSimpleLine, PiTrash } from "react-icons/pi";
// import { postedJobsData } from "@/data";
import Link from "next/link";
import Badge from "@/components/common/Badge";
import prisma from "@/libs/prisma";
import { redirect } from "next/navigation";
import { validateRequest } from "@/auth";
import { dateFormatter } from "@/libs/utils";
import DeleteJobBtn from "../_components/DeleteJobBtn";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const JobsPage = async () => {
  const { user } = await validateRequest();

  if (user?.role !== "EMPLOYER") {
    return redirect("/dashboard");
  }

  const jobs = await prisma.job.findMany({
    where: {
      employerId: user.id,
    },
    include: {
      applications: {
        include: {
          candidate: true,
        },
      },
    },
  });

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
            {jobs.length === 0 && (
              <TableRow>
                <TableData colSpan={6} className="text-center">
                  No jobs found
                </TableData>
              </TableRow>
            )}

            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableData>
                  <Link
                    href={`/dashboard/jobs/${job.id}`}
                    className="text-base font-semibold text-text-primary transition hover:text-primary"
                  >
                    {job.title}
                  </Link>
                </TableData>
                <TableData className="text-success">
                  {job.applications.length}
                </TableData>
                <TableData>{dateFormatter(job.createdAt)}</TableData>
                <TableData className="text-destructive">
                  {job.expiresAt ? dateFormatter(job.expiresAt) : "N/A"}
                </TableData>
                <TableData>
                  <Badge
                    text={job.status}
                    variant={
                      job.status === "PUBLISHED" ? "success" : "destructive"
                    }
                  />
                </TableData>

                <TableData className="flex min-h-[80px] items-center">
                  <div className="flex items-center gap-2">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="px-1.5 py-1.5">
                          <PiTrash className="size-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you sure you want to delete this job?
                          </AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>No</AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <DeleteJobBtn jobId={job.id} />
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
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
