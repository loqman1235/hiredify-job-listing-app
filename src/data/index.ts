import {
  PiAtom,
  PiBank,
  PiHeadset,
  PiHeartbeat,
  PiMegaphone,
  PiPaintBrush,
  PiRocket,
  PiTruck,
  PiUsersFour,
} from "react-icons/pi";

export const categories = [
  { name: "Finance", count: 1, icon: PiBank },
  { name: "Marketing", count: 1, icon: PiMegaphone },
  { name: "Design", count: 1, icon: PiPaintBrush },
  { name: "Development", count: 1, icon: PiAtom },
  { name: "Human Resources", count: 1, icon: PiUsersFour },
  { name: "Project Management", count: 1, icon: PiRocket },
  { name: "Customer Service", count: 1, icon: PiHeadset },
  { name: "Health & Care", count: 1, icon: PiHeartbeat },
  { name: "Automative", count: 1, icon: PiTruck },
] as const;

export const testimonials = [
  {
    text: "Finding the right job used to be a daunting task, but this website made the process so much smoother. The user-friendly interface and detailed job listings helped me land my dream role within weeks. Highly recommend!",
    author: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      jobTitle: "Software Engineer",
    },
  },
  {
    text: "Finding the right job used to be a daunting task, but this website made the process so much smoother. The user-friendly interface and detailed job listings helped me land my dream role within weeks. Highly recommend!",
    author: {
      name: "Malak",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      jobTitle: "Accountant",
    },
  },

  {
    text: "Finding the right job used to be a daunting task, but this website made the process so much smoother. The user-friendly interface and detailed job listings helped me land my dream role within weeks. Highly recommend!",
    author: {
      name: "Emily R",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      jobTitle: "Marketing Specialist",
    },
  },
] as const;
