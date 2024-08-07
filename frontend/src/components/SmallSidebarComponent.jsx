import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallSidebarWrapper.js";
import { bigSideBarLinks } from "../utils/BigSideBarLinks.jsx";

function SmallSidebarComponent() {
  return (
    <Wrapper>
      {/* <div
        //className show-sidebar is responsible for diplaying the sidebar. We used a ternary operator to check whether the showSidebar is true then include the className show-sidebar else className will only have the sidebar-container.
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      > */}
      <div className='show-sidebar sidebar-container'>
        <div className='content'>
          {bigSideBarLinks.map((icons, idx) => {
            return (
              <Link key={idx} to={`${icons.path}`} className='link-container'>
                <button type='button' className='icon-container'>
                  {icons.icon}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  );
}
export default SmallSidebarComponent;
