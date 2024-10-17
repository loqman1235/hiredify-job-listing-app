import Card from "@/components/common/Card";
import FormField from "@/components/common/FormField";
import Image from "next/image";
import { PiCamera } from "react-icons/pi";
import TextEditor from "./TextEditor";
import Button from "@/components/common/Button";

const EditEmployerProfileForm = () => {
  return (
    <form className="space-y-5">
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
            name="fullname"
            placeholder="Enter your fullname"
            isRequired
          />
          <FormField
            className="flex-1"
            label="Phone Number"
            id="phoneNumber"
            name="phoneNum"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            className="flex-1"
            label="Website"
            id="website"
            name="website"
            placeholder="Enter your website"
          />
          <FormField
            className="flex-1"
            label="Company size"
            id="companySize"
            name="companySize"
            type="number"
            placeholder="Enter company size"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            className="flex-1"
            label="Location"
            id="location"
            name="location"
            placeholder="Enter company's location"
          />
          <FormField
            className="flex-1"
            label="Address"
            id="address"
            name="address"
            type="number"
            placeholder="Enter company's address"
          />
        </div>

        <TextEditor label="About Company" />
      </Card>

      <Button type="submit">Save</Button>
    </form>
  );
};

export default EditEmployerProfileForm;
