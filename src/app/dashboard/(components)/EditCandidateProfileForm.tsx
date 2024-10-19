"use client";

import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import SelectBox from "@/components/common/SelectBox";
import TextEditor from "./TextEditor";
import Image from "next/image";
import { PiCamera, PiUploadSimple } from "react-icons/pi";
import Card from "@/components/common/Card";
import { useForm } from "react-hook-form";
import {
  editCandidateProfileSchema,
  editCandidateProfileSchemaType,
} from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gender, SalaryType } from "@prisma/client";

const EditCandidateProfileForm = () => {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<editCandidateProfileSchemaType>({
    resolver: zodResolver(editCandidateProfileSchema),
  });

  const onSubmit = (values: editCandidateProfileSchemaType) => {
    console.log(values);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Card title="My Profile">
        {/* PROFILE PICTURE */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-md bg-muted md:h-40 md:w-40">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="profile picture"
            fill
            className="relative h-full w-full object-cover"
          />

          <label
            htmlFor="profileImg"
            className="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full bg-muted p-1 text-primary shadow"
          >
            <input id="profileImg" type="file" className="hidden" />
            <PiCamera className="size-5" />
          </label>
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            className="flex-1"
            label="Full name"
            id="fullname"
            placeholder="Enter your full name"
            isRequired
            {...register("fullname")}
            hasError={!!errors.fullname}
            errorMessage={errors.fullname?.message}
          />
          <FormField
            className="flex-1"
            label="Date of birth"
            id="dob"
            type="date"
            {...register("dob")}
            hasError={!!errors.dob}
            errorMessage={errors.dob?.message}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <SelectBox
            options={["MALE", "FEMALE"]}
            label="Gender"
            variant="primary"
            defaultText="Select your gender"
            onChange={(val: string) =>
              setValue("gender", val as Gender)
            }
            hasError={!!errors.gender}
            errorMessage={errors.gender?.message}
          />
          <SelectBox
            options={["Web Development", "Design", "Marketing", "Finance"]}
            label="Category"
            variant="primary"
            defaultText="Select category"
            onChange={(val: string) => setValue("category", val)}
            hasError={!!errors.category}
            errorMessage={errors.category?.message}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            className="flex-1"
            label="Address"
            id="address"
            placeholder="Enter your address"
            {...register("address")}
            hasError={!!errors.address}
            errorMessage={errors.address?.message}
          />
          <FormField
            className="flex-1"
            label="Location"
            id="location"
            placeholder="Enter your location"
            {...register("location")}
            hasError={!!errors.location}
            errorMessage={errors.location?.message}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            className="flex-1"
            label="Salary ($)"
            id="salary"
            placeholder="Enter your salary"
            {...register("salary")}
          />

          <SelectBox
            options={["HOURLY", "DAILY", "MONTHLY", "YEARLY"]}
            label="Salary Type"
            variant="primary"
            defaultText="Select your salary type"
            onChange={(val) =>
              setValue(
                "salaryType",
                val as SalaryType,
              )
            }
            hasError={!!errors.salaryType}
            errorMessage={errors.salaryType?.message}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            className="flex-1"
            label="Phone number"
            id="phoneNum"
            placeholder="Enter your phone number"
            {...register("phoneNumber")}
            hasError={!!errors.phoneNumber}
            errorMessage={errors.phoneNumber?.message}
          />
        </div>

        <div className="flex w-full flex-col gap-5">
          <FormField
            label="Job title"
            id="jobTitle"
            placeholder="Enter job title"
            {...register("title")}
            hasError={!!errors.title}
            errorMessage={errors.title?.message}
          />
          <TextEditor
            label="Bio"
            onChange={(val) => setValue("bio", val)}
            hasError={!!errors.bio}
            errorMessage={errors.bio?.message}
          />
        </div>
      </Card>

      <Card title="My Resume">
        <label
          htmlFor="resume"
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary/10 px-6 py-3 text-sm font-medium capitalize text-primary transition hover:bg-primary/20 hover:text-primary"
        >
          <PiUploadSimple className="size-4" /> <span>Upload</span>
          <input type="file" name="resume" id="resume" className="hidden" />
        </label>

        <p className="text-sm text-text-secondary">
          Upload file. pdf, doc, docs
        </p>
      </Card>

      <Button type="submit">Save</Button>
    </form>
  );
};

export default EditCandidateProfileForm;
