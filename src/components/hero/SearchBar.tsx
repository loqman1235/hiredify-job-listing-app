import { PiMagnifyingGlass, PiMapPin } from "react-icons/pi";
import Button from "@/components/common/Button";
import SelectBox from "../common/SelectBox";

const SearchBar = () => {
  return (
    <form className="flex h-[100px] w-full items-center gap-10 rounded-lg bg-foreground p-5 shadow-sm">
      <div className="flex h-full flex-1 items-center gap-4">
        <div className="flex h-full items-center gap-4 border-r border-r-[var(--border)]">
          <PiMagnifyingGlass className="size-6 text-[var(--text-icon)]" />
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Job Title, Keyword..."
            className="bg-transparent outline-none placeholder:text-text-secondary"
          />
        </div>

        <div className="flex w-[50%] items-center gap-4">
          <PiMapPin className="size-6 text-[var(--text-icon)]" />

          <div className="relative flex flex-1 items-center justify-between">
            <SelectBox
              options={["CA, Los Angeles", "NY, New York", "CA, Los Angeles"]}
              defaultText="City or postcode"
              className="w-full p-0"
            />
          </div>
        </div>
      </div>

      <Button className="h-full">Find Jobs</Button>
    </form>
  );
};

export default SearchBar;
