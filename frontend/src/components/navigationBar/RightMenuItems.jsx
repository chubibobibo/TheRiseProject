/** importing react-icons */
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function RightMenuItems() {
  return (
    <>
      <button type='button' className='toggle-btn'>
        <FaMagnifyingGlass />
      </button>
      <button type='button' className='toggle-btn'>
        <IoAddCircleOutline />
      </button>
      <button type='button' className='toggle-btn'>
        <TbWorld />
      </button>
      <button type='button' className='toggle-btn'>
        <FaRegClock />
      </button>
      <button type='button' className='toggle-btn'>
        <FaRegBell />
      </button>
      <button type='button' className='toggle-btn'>
        <MdOutlineEmail />
      </button>
    </>
  );
}
export default RightMenuItems;
