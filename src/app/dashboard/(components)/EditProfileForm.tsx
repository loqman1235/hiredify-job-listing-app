import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import SelectBox from "@/components/common/SelectBox";
import TextEditor from "./TextEditor";

const EditProfileForm = () => {
  return (
    <form className="mt-5 w-full space-y-5">
      <div className="flex w-full items-center gap-5">
        <FormField
          className="flex-1"
          label="Full name"
          id="fullname"
          placeholder="Enter your full name"
        />
        <FormField
          className="flex-1"
          label="Date of birth"
          id="dob"
          type="date"
        />
      </div>

      <div className="flex w-full items-center gap-5">
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

      <div className="flex w-full items-center gap-5">
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

      <div className="flex w-full flex-col gap-5">
        <FormField
          label="Job title"
          id="jobTitle"
          placeholder="Enter job title"
        />
        <TextEditor />
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
};

export default EditProfileForm;
