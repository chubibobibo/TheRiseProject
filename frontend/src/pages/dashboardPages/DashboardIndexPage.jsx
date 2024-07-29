/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/DashboardIndexPageWrapper.js";
/**React icon imports to be used in the icon boxes */
import { FaRegClock, FaRegCompass } from "react-icons/fa";
import { CiCalendar, CiMenuBurger } from "react-icons/ci";

function DashboardIndexPage() {
  return (
    <Wrapper>
      <div className='top-row'>
        <div className='page-header'>Dashboard</div>
        <div className='top-clock-in'>
          <div className='icon-clock-in-container'>
            <FaRegClock size={"3rem"} color={"white"} />
          </div>
        </div>
        <div className='top-open-tasks'>
          <div className='icon-open-task-container'>
            <CiMenuBurger size={"3rem"} color={"white"} />
          </div>
        </div>
        <div className='top-event-today'>
          <div className='icon-top-event-container'>
            <CiCalendar size={"3rem"} color={"white"} />
          </div>
        </div>
        <div className='top-due'>
          <div className='icon-due-container'>
            <FaRegCompass size={"3rem"} color={"white"} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default DashboardIndexPage;
