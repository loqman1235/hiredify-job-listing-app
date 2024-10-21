"use client";

import Card from "@/components/common/Card";
import FormField from "@/components/common/FormField";
import Image from "next/image";
import { PiCamera } from "react-icons/pi";
import TextEditor from "./TextEditor";
import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editEmployerProfileSchema,
  editEmployerProfileSchemaType,
} from "@/libs/validation";
import { useTransition } from "react";
import { updateEmployerProfile } from "../actions";
import { toast } from "react-toastify";
import { EmployerProfile } from "@prisma/client";

type EditCandidateProfileFormProps = {
  employerProfile: EmployerProfile;
};

const EditEmployerProfileForm = ({
  employerProfile,
}: EditCandidateProfileFormProps) => {
  const [isPending, startTranstion] = useTransition();

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<editEmployerProfileSchemaType>({
    resolver: zodResolver(editEmployerProfileSchema),
    defaultValues: {
      about: employerProfile.about || undefined,
      address: employerProfile.address || undefined,
      companySize: employerProfile.companySize || undefined,
      fullname: employerProfile.fullname || undefined,
      location: employerProfile.location || undefined,
      phoneNumber: employerProfile.phoneNumber || undefined,
      website: employerProfile.website || undefined,
    },
  });

  const onSubmit = async (values: editEmployerProfileSchemaType) => {
    startTranstion(async () => {
      const result = await updateEmployerProfile(values);

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Profile has been updated");
      }
    });
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
            placeholder="Enter your fullname"
            isRequired
            {...register("fullname")}
            hasError={!!errors.fullname}
            errorMessage={errors.fullname?.message}
          />
          <FormField
            className="flex-1"
            label="Phone Number"
            id="phoneNumber"
            placeholder="Enter your phone number"
            {...register("phoneNumber")}
            hasError={!!errors.phoneNumber}
            errorMessage={errors.phoneNumber?.message}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            className="flex-1"
            label="Website"
            id="website"
            placeholder="Enter your website"
            {...register("website")}
            hasError={!!errors.website}
            errorMessage={errors.website?.message}
          />
          <FormField
            className="flex-1"
            label="Company size"
            id="companySize"
            type="number"
            placeholder="Enter company size"
            {...register("companySize")}
            hasError={!!errors.companySize}
            errorMessage={errors.companySize?.message}
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            className="flex-1"
            label="Location"
            id="location"
            placeholder="Enter company's location"
            {...register("location")}
            hasError={!!errors.location}
            errorMessage={errors.location?.message}
          />
          <FormField
            className="flex-1"
            label="Address"
            id="address"
            placeholder="Enter company's address"
            {...register("address")}
            hasError={!!errors.address}
            errorMessage={errors.address?.message}
          />
        </div>

        <TextEditor
          label="About Company"
          onChange={(val) => setValue("about", val)}
          hasError={!!errors.about}
          errorMessage={errors.about?.message}
          value={employerProfile.about || ""}
        />
      </Card>

      <Button disabled={isPending} type="submit">
        {isPending ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default EditEmployerProfileForm;
