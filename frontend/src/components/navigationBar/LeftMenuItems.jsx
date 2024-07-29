/** Importing react-icons */
import { FiMenu } from "react-icons/fi";
import { MdTaskAlt } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";

function LeftMenuItems() {
  return (
    <>
      <button type='button' className='toggle-btn'>
        <FiMenu />
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
