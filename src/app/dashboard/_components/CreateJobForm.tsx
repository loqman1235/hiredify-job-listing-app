"use client";

import Card from "@/components/common/Card";
import FormField from "@/components/common/FormField";
import TextEditor from "./TextEditor";
import SelectBox from "@/components/common/SelectBox";
import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createJobSchema, createJobSchemaType } from "@/libs/validation";
import { Category, JobType, SalaryType } from "@prisma/client";
import { useTransition } from "react";
import { createJob } from "../actions";
import { toast } from "react-toastify";

const jobTypes = [
  { value: "FREELANCE", label: "Freelance" },
  { value: "FULL_TIME", label: "Full time" },
  { value: "PART_TIME", label: "Part time" },
  { value: "INTERNSHIP", label: "Internship" },
  { value: "TEMPORARY", label: "Temporary" },
];

const salaryTypes = [
  { value: "HOURLY", label: "Hourly" },
  { value: "DAILY", label: "Daily" },
  { value: "MONTHLY", label: "Monthly" },
  { value: "YEARLY", label: "Yearly" },
];

type CreateJobFormProps = {
  categories: Category[];
};

const CreateJobForm = ({ categories }: CreateJobFormProps) => {
  const cats = categories.map((cat: Category) => ({
    value: cat.id,
    label: cat.name,
  }));

  const [isPending, startTranstion] = useTransition();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<createJobSchemaType>({
    resolver: zodResolver(createJobSchema),
  });

  console.log(errors);

  const onSubmit = (values: createJobSchemaType) => {
    startTranstion(async () => {
      const result = await createJob(values);
      setValue("jobDesc", "");
      reset();
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Job has been posted");
      }
    });
  };

  return (
    <Card title="Post job">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Title"
          id="title"
          placeholder="Enter job title"
          isRequired
          {...register("title")}
          hasError={!!errors.title}
          errorMessage={errors.title?.message}
        />
        <TextEditor
          onChange={(val) => setValue("jobDesc", val, { shouldValidate: true })}
          label="Description"
          isRequired
          hasError={!!errors.jobDesc}
          errorMessage={errors.jobDesc?.message}
        />

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <SelectBox
            label="Category"
            options={cats}
            defaultText="Select job category"
            isRequired
            onChange={(val) =>
              setValue("category", val, { shouldValidate: true })
            }
            hasError={!!errors.category}
            errorMessage={errors.category?.message}
          />
          <SelectBox
            label="Job Type"
            options={jobTypes}
            defaultText="Select job type"
            isRequired
            onChange={(val) =>
              setValue("jobType", val as JobType, { shouldValidate: true })
            }
            hasError={!!errors.jobType}
            errorMessage={errors.jobType?.message}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <SelectBox
            label="Salary Type"
            options={salaryTypes}
            defaultText="Select salary type"
            isRequired
            onChange={(val) =>
              setValue("salaryType", val as SalaryType, {
                shouldValidate: true,
              })
            }
            hasError={!!errors.salaryType}
            errorMessage={errors.salaryType?.message}
          />

          <FormField
            label="Min Salary"
            id="minSalary"
            placeholder="Enter minimum salary"
            type="number"
            isRequired
            {...register("minSalary")}
            hasError={!!errors.minSalary}
            errorMessage={errors.minSalary?.message}
          />
          <FormField
            label="Max Salary"
            id="maxSalary"
            placeholder="Enter maximum salary"
            type="number"
            isRequired
            {...register("maxSalary")}
            hasError={!!errors.maxSalary}
            errorMessage={errors.maxSalary?.message}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            label="Location"
            id="location"
            placeholder="Enter job location"
            isRequired
            {...register("location")}
            hasError={!!errors.location}
            errorMessage={errors.location?.message}
          />
          <FormField
            label="Address"
            id="address"
            placeholder="Enter job address"
            {...register("address")}
            hasError={!!errors.address}
            errorMessage={errors.address?.message}
          />
        </div>
        <Button isLoading={isPending} type="submit">
          {isPending ? "Posting..." : "Post Job"}
        </Button>
      </form>
    </Card>
  );
};

export default CreateJobForm;
