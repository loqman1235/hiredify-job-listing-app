import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import CreateJobForm from "../(components)/CreateJobForm";

const CreateJobPage = async () => {
  const { user } = await validateRequest();

  if (user?.role !== "EMPLOYER") {
    return redirect("/dashboard");
  }

  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">
        Create a new job
      </h3>

      <CreateJobForm />
    </div>
  );
};

export default CreateJobPage;
