"use client";

import { useState } from "react";

const AccountTypeSwitch = () => {
  const [isEmployer, setIsEmployer] = useState(false);

  return (
    <div className="relative flex h-[55px] w-full rounded-md bg-background p-[6px]">
      <div className="relative flex h-full w-full items-center">
        <div
          className={`absolute left-0 top-1/2 z-[1] h-full w-1/2 -translate-y-1/2 rounded-md bg-foreground shadow transition duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${isEmployer ? "translate-x-full" : "translate-x-0"}`}
        ></div>

        <button
          type="button"
          onClick={() => setIsEmployer(false)}
          className={`z-10 flex flex-1 items-center justify-center font-medium transition-colors duration-300 ${
            isEmployer ? "text-text-secondary" : "text-text-primary"
          }`}
        >
          Candidate
        </button>
        <button
          type="button"
          onClick={() => setIsEmployer(true)}
          className={`z-10 flex flex-1 items-center justify-center font-medium transition-colors duration-300 ${
            isEmployer ? "text-text-primary" : "text-text-secondary"
          }`}
        >
          Employer
        </button>
      </div>
    </div>
  );
};

export default AccountTypeSwitch;
