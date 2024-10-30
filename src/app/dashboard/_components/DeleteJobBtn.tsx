"use client";
import Button from "@/components/common/Button";
import { deleteJob } from "../actions";

type DeleteJobBtnProps = {
  jobId: string;
};

const DeleteJobBtn = ({ jobId }: DeleteJobBtnProps) => {
  return (
    <Button
      onClick={async () => {
        await deleteJob(jobId);
      }}
      variant="destructive"
      className="px-3 py-1.5"
    >
      Yes
    </Button>
  );
};

export default DeleteJobBtn;
