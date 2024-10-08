import Badge from "@/components/common/Badge";
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
import { PiEye, PiX } from "react-icons/pi";

const Applied = () => {
  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Applied Jobs</h3>
      <Card>
        {/* Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader className="rounded-s-lg">Job Title</TableHeader>
              <TableHeader>Date Applied</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader className="rounded-e-lg">Action</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableData>.NET Developer</TableData>
              <TableData>July 20, 2021</TableData>
              <TableData>
                <Badge variant="success" text="approved" />
              </TableData>
              <TableData className="flex items-center">
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

            <TableRow>
              <TableData>.NET Developer</TableData>
              <TableData>July 20, 2021</TableData>
              <TableData>
                <Badge variant="warning" text="pending" />
              </TableData>
              <TableData className="flex items-center">
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

            <TableRow>
              <TableData>.NET Developer</TableData>
              <TableData>July 20, 2021</TableData>
              <TableData>
                <Badge variant="warning" text="pending" />
              </TableData>
              <TableData>
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
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Applied;
