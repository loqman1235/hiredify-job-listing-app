import Card from "@/components/common/Card";
import FormField from "@/components/common/FormField";
import React from "react";
import TextEditor from "./TextEditor";
import SelectBox from "@/components/common/SelectBox";
import Button from "@/components/common/Button";

const CreateJobForm = () => {
  return (
    <Card title="Post job">
      <form className="space-y-5">
        <FormField
          label="Title"
          name="title"
          id="title"
          placeholder="Enter job title"
          isRequired
        />
        <TextEditor label="Description" isRequired />

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <SelectBox
            label="Category"
            options={["Web development", "Graphic Designer"]}
            defaultText="Select job category"
            isRequired
          />
          <SelectBox
            label="Job Type"
            options={["Freelance", "Full-Time"]}
            defaultText="Select job type"
            isRequired
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <SelectBox
            label="Salary Type"
            options={["Hourly", "Daily", "Monthly", "yearly"]}
            defaultText="Select salary type"
            isRequired
          />

          <FormField
            label="Min Salary"
            name="minSalary"
            id="minSalary"
            placeholder="Enter minimum salary"
            type="number"
            isRequired
          />
          <FormField
            label="Max Salary"
            name="maxSalary"
            id="maxSalary"
            placeholder="Enter maximum salary"
            type="number"
            isRequired
          />
        </div>

        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <FormField
            label="Location"
            name="location"
            id="location"
            placeholder="Enter job location"
            isRequired
          />
          <FormField
            label="Address"
            name="address"
            id="address"
            placeholder="Enter job address"
          />
        </div>
        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
};

export default CreateJobForm;
