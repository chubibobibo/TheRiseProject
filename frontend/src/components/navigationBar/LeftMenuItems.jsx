/** Importing react-icons */
import { FiMenu } from "react-icons/fi";
import { MdTaskAlt } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";

import { useContext } from "react";
import { StatusContextNav } from "../../pages/DashboardLayout";

/** @StatusContext context created in the StatusProvider component that is used to wrap around the LeftMenuItems component */
function LeftMenuItems() {
  const { isOpen, setIsOpen } = useContext(StatusContextNav);
  // console.log(isOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type='button' className='toggle-btn'>
        <FiMenu onClick={handleClick} />
      </button>
      <button type='button' className='toggle-btn'>
        <MdTaskAlt />
      </button>
      <button type='button' className='toggle-btn'>
        <BiCategory />
      </button>
      <button type='button' className='toggle-btn'>
        <BsSuitcaseLg />
      </button>
      <button type='button' className='toggle-btn'>
        <SlScreenDesktop />
      </button>
    </>
  );
}
export default LeftMenuItems;
