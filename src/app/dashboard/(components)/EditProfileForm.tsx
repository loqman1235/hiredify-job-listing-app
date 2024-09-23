"use client";

import Button from "@/components/common/Button";
import FormField from "@/components/common/FormField";
import SelectBox from "@/components/common/SelectBox";
import TextEditor from "./TextEditor";
import Image from "next/image";
import { PiCamera, PiCaretDown, PiX } from "react-icons/pi";
import { useState } from "react";

const EditProfileForm = () => {
  const [socialNetworks, setSocialNetworks] = useState<string[]>([
    "https://twitter.com/",
  ]);
  const [socialDropdownVisible, setSocialDropdownVisible] = useState<boolean[]>(
    Array(socialNetworks.length).fill(false),
  );

  const addSocialNetwork = () => {
    setSocialNetworks([...socialNetworks, ""]);
    setSocialDropdownVisible([...socialDropdownVisible, false]);
  };

  const removeSocialNetwork = (index: number) => {
    if (index === 0) return;
    setSocialNetworks(socialNetworks.filter((_, i) => i !== index));
    setSocialDropdownVisible(
      socialDropdownVisible.filter((_, i) => i !== index),
    );
  };

  // const updateSocialNetwork = (index: number, value: string) => {
  //   setSocialNetworks(
  //     socialNetworks.map((socialNetwork, i) =>
  //       i === index ? value : socialNetwork,
  //     ),
  //   );
  // };

  const toggleDropdown = (index: number) => {
    setSocialDropdownVisible(
      socialDropdownVisible.map((isVisible, i) =>
        i === index ? !isVisible : isVisible,
      ),
    );
  };
  return (
    <form className="space-y-5">
      <div className="mt-5 w-full space-y-5 rounded-lg bg-foreground p-5 shadow">
        <h4 className="text-lg font-semibold tracking-tight">My Profile</h4>
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
            label="Salary ($)"
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
      </div>

      <div className="mt-5 w-full space-y-5 rounded-lg bg-foreground p-5 shadow">
        <h4 className="text-lg font-semibold tracking-tight">
          Social Networks
        </h4>

        {socialNetworks.map((socialNetwork, index) => (
          // Social dropdown
          <div key={index} className="space-y-3">
            <div
              onClick={() => toggleDropdown(index)}
              className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-muted p-5"
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeSocialNetwork(index)}
                  type="button"
                  className="text-destructive"
                >
                  <PiX />
                </button>
                <span className="text-sm font-semibold">
                  Network {index + 1}
                </span>
              </div>

              <PiCaretDown
                className={`size-5 transition ${socialDropdownVisible[index] ? "rotate-180" : ""}`}
              />
            </div>
            <div
              className={`flex-col items-center gap-5 md:flex-row ${socialDropdownVisible[index] ? "flex" : "hidden"}`}
            >
              <SelectBox
                label="Social"
                options={["facebook", "twitter", "instagram", "linkedin"]}
                defaultText="Select your social network"
                value={index === 0 ? "facebook" : ""}
              />
              <FormField
                label="url"
                placeholder="Enter url"
                id={`url-${index}`}
              />
            </div>
          </div>
        ))}

        <Button
          className="text-sm"
          variant="secondary"
          type="button"
          onClick={addSocialNetwork}
        >
          Add another network
        </Button>
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
};

export default EditProfileForm;
