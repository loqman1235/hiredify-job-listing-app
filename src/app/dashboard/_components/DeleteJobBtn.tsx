import Button from "@/components/common/Button";
import { PiX } from "react-icons/pi";
import { deleteJob } from "../actions";

type DeleteJobBtnProps = {
  jobId: string;
};

const DeleteJobBtn = ({ jobId }: DeleteJobBtnProps) => {
  return (
    <form
      action={async () => {
        "use server";
        await deleteJob(jobId);
      }}
    >
      <Button variant="destructive" className="px-1.5 py-1.5">
        <PiX className="size-4" />
      </Button>
    </form>
  );
};

export default DeleteJobBtn;
