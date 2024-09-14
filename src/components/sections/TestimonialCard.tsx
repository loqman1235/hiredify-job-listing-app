import { BiSolidQuoteLeft } from "react-icons/bi";
import UserAvatar from "../common/UserAvatar";

type TestimonialCardProps = {
  text: string;
  author: {
    avatar: string;
    name: string;
    jobTitle: string;
  };
};

const TestimonialCard = ({ text, author }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-foreground p-10 shadow-sm">
      <BiSolidQuoteLeft className="size-10 text-muted" />

      <p className="italic text-text-secondary">{text}</p>

      <div className="flex items-center gap-5">
        <UserAvatar avatarUrl={author.avatar} />
        <ul>
          <li className="text-lg font-semibold">{author.name}</li>
          <li className="text-sm text-text-secondary">{author.jobTitle}</li>
        </ul>
      </div>
    </div>
  );
};

export default TestimonialCard;
