import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import { PiEye, PiX } from "react-icons/pi";

const Applied = () => {
  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">Applied Jobs</h3>
      <Card>
        {/* Table */}
        <table className="!m-0 w-full table-auto text-sm text-text-secondary">
          <thead className="bg-muted text-left text-sm text-text-secondary">
            <tr>
              <th scope="col" className="rounded-s-lg px-6 py-3">
                Job Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date Applied
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="rounded-e-lg px-3 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="border-b border-b-muted">
            <tr className="border-b border-b-muted text-sm text-text-secondary">
              <td className="px-6 py-4"> .NET Developer</td>
              <td className="px-6 py-4">July 20, 2021</td>
              <td className="px-6 py-4">
                <Badge text="pending" />
              </td>
              <td className="flex items-center gap-2 px-2 py-4">
                <Button variant="destructive" className="px-1.5 py-1.5">
                  <PiX className="size-4" />
                </Button>
                <Button variant="secondary" className="px-1.5 py-1.5">
                  <PiEye className="size-4" />
                </Button>
              </td>
            </tr>

            <tr className="border-b border-b-muted text-sm text-text-secondary">
              <td className="px-6 py-4"> .NET Developer</td>
              <td className="px-6 py-4">July 20, 2021</td>
              <td className="px-6 py-4">
                <Badge text="pending" />
              </td>
              <td className="flex items-center gap-2 px-2 py-4">
                <Button variant="destructive" className="px-1.5 py-1.5">
                  <PiX className="size-4" />
                </Button>
                <Button variant="secondary" className="px-1.5 py-1.5">
                  <PiEye className="size-4" />
                </Button>
              </td>
            </tr>

            <tr className="border-b border-b-muted text-sm text-text-secondary">
              <td className="px-6 py-4"> .NET Developer</td>
              <td className="px-6 py-4">July 20, 2021</td>
              <td className="px-6 py-4">
                <Badge text="pending" />
              </td>
              <td className="flex items-center gap-2 px-2 py-4">
                <Button variant="destructive" className="px-1.5 py-1.5">
                  <PiX className="size-4" />
                </Button>
                <Button variant="secondary" className="px-1.5 py-1.5">
                  <PiEye className="size-4" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Applied;
