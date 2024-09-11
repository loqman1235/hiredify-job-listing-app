import { PiCaretDown, PiMagnifyingGlass, PiMapPin } from "react-icons/pi";
import Button from "./common/Button";

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
            className="placeholder:text-text-secondary bg-transparent outline-none"
          />
        </div>

        <div className="flex w-[50%] items-center gap-4">
          <PiMapPin className="size-6 text-[var(--text-icon)]" />

          <div className="relative flex flex-1 items-center justify-between">
            <select className="text-text-secondary w-full appearance-none bg-transparent outline-none">
              <option value="1">City or postcode</option>
              <option value="1"></option>
              <option value="1"></option>
              <option value="1"></option>
            </select>
            <PiCaretDown className="pointer-events-none absolute right-0 top-1/2 size-5 -translate-y-1/2 text-[var(--text-icon)]" />
          </div>
        </div>
      </div>

      <Button className="h-full">Find Jobs</Button>
    </form>
  );
};

export default SearchBar;
