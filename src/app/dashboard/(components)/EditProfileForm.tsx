import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import SelectBox from "@/components/common/SelectBox";
import TextEditor from "./TextEditor";
import Image from "next/image";
import { PiCamera } from "react-icons/pi";

const EditProfileForm = () => {
  return (
    <form className="mt-5 w-full space-y-5">
      {/* PROFILE PICTURE */}
      <div className="relative h-40 w-40 overflow-hidden rounded-md bg-muted">
        <Image
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="profile picture"
          fill
          className="relative"
        />

        <label
          htmlFor="profileImg"
          className="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full bg-black/50 p-1 text-white"
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
        />
        <FormField
          className="flex-1"
          label="Date of birth"
          id="dob"
          type="date"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-5 md:flex-row">
        <SelectBox
          options={["male", "female"]}
          label="Gender"
          variant="primary"
          defaultText="Select your gender"
        />
        <FormField
          className="flex-1"
          label="Age"
          type="number"
          id="age"
          placeholder="Enter your age"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-5 md:flex-row">
        <FormField
          className="flex-1"
          label="Phone number"
          id="phoneNum"
          placeholder="Enter your phone number"
        />
        <FormField
          className="flex-1"
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-5 md:flex-row">
        <FormField
          className="flex-1"
          label="Address"
          id="address"
          placeholder="Enter your address"
        />
        <FormField
          className="flex-1"
          label="Location"
          id="location"
          placeholder="Enter your location"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-5 md:flex-row">
        <FormField
          className="flex-1"
          label="Salary"
          id="salary"
          placeholder="Enter your salary"
        />

        <SelectBox
          options={["Hourly", "Daily", "Weekly", "Monthly", "Yearly"]}
          label="Salary Type"
          variant="primary"
          defaultText="Select your salary type"
        />
      </div>

      <div className="flex w-full flex-col gap-5">
        <FormField
          label="Job title"
          id="jobTitle"
          placeholder="Enter job title"
        />
        <TextEditor label="Bio" />
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
};

export default EditProfileForm;