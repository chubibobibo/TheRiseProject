/** react icons */
import { BsSuitcaseLg } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { PiArrowsClockwiseBold, PiStackSimple } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  IoCartOutline,
  IoChatbubbleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdAnchor } from "react-icons/md";
import { FaBook, FaRegFolder } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { TbSquareRoundedArrowRight, TbWheel } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";

export const bigSideBarLinks = [
  {
    path: "/dashboard",
    icon: <SlScreenDesktop size={"2rem"} />,
    label: "Dashboard",
  },
  {
    path: "/dashboard/events",
    icon: <CiCalendar size={"2rem"} />,
    label: "Events",
  },
  {
    path: "/dashboard/clients",
    icon: <BsSuitcaseLg size={"2rem"} />,
    label: "Clients",
  },
  {
    path: "/dashboard/projects",
    icon: <BiCategory size={"2rem"} />,
    label: "Projects",
  },
  {
    path: "/dashboard/tasks",
    icon: <IoMdCheckmarkCircleOutline size={"2rem"} />,
    label: "Tasks",
  },
  {
    path: "/dashboard/leads",
    icon: <PiStackSimple size={"2rem"} />,
    label: "Leads",
  },
  {
    path: "/dashboard/subscriptions",
    icon: <PiArrowsClockwiseBold size={"2rem"} />,
    label: "Subscriptions",
  },
  {
    path: "/dashboard/sales",
    icon: <IoCartOutline size={"2rem"} />,
    label: "Sales",
  },
  {
    path: "/dashboard/prospects",
    icon: <MdAnchor size={"2rem"} />,
    label: "Prospects",
  },
  {
    path: "/dashboard/notes",
    icon: <FaBook size={"2rem"} />,
    label: "Notes",
  },
  {
    path: "/dashboard/messages",
    icon: <IoChatbubbleOutline size={"2rem"} />,
    label: "Messages",
  },
  {
    path: "/dashboard/team",
    icon: <AiOutlineTeam size={"2rem"} />,
    label: "Team",
  },
  {
    path: "/dashboard/tickets",
    icon: <TbWheel size={"2rem"} />,
    label: "Tickets",
  },
  {
    path: "/dashboard/expenses",
    icon: <TbSquareRoundedArrowRight size={"2rem"} />,
    label: "Expenses",
  },
  {
    path: "/dashboard/reports",
    icon: <FaRegClock size={"2rem"} />,
    label: "Reports",
  },
  {
    path: "/dashboard/files",
    icon: <FaRegFolder size={"2rem"} />,
    label: "Files",
  },
  {
    path: "/dashboard/help-support",
    icon: <RxQuestionMarkCircled size={"2rem"} />,
    label: "Help & Support",
  },
  {
    path: "/dashboard/settings",
    icon: <IoSettingsOutline size={"2rem"} />,
    label: "Settings",
  },
];
