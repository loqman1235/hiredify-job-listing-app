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
