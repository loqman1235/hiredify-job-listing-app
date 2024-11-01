import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import CreateJobForm from "../_components/CreateJobForm";
import prisma from "@/lib/prisma";

const CreateJobPage = async () => {
  const { user } = await validateRequest();
  const categories = await prisma.category.findMany();

  if (user?.role !== "EMPLOYER") {
    return redirect("/dashboard");
  }

  return (
    <div>
      <h3 className="mb-5 text-2xl font-bold tracking-tight">
        Create a new job
      </h3>

      <CreateJobForm categories={categories} />
    </div>
  );
};

export default CreateJobPage;
