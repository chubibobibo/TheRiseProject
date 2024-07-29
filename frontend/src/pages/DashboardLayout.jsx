/**  outlet to render all the child components of dashboard layout */
import { Outlet } from "react-router-dom";

/** Styled components wraps around components to apply styles.*/
import Wrapper from "../assets/wrappers/Dashboard.js";

/** Imports for all components */
import NavigationBar from "../components/navigationBar/NavigationBar.jsx";
import SmallSidebarComponent from "../components/SmallSidebarComponent.jsx";
import BigSidebarComponent from "../components/BigSidebarComponent.jsx";

function DashboardLayout() {
  /** Create context to pass data to components */

  return (
    /** main container will need to be display flex */
    /** div for the big and small sidebar component  will need to be grid that will have columns*/
    /** renders the NavigationBar, BigSidebar, SmallSidebar and child components of DashboardLayout*/
    <Wrapper>
      <div className='dashboard'>
        <NavigationBar />
      </div>
      <div className='dashboard-bigSidebar'>
        <BigSidebarComponent />
      </div>
      <div className='outlet-container'>
        <Outlet />
      </div>
    </Wrapper>
  );
}
export default DashboardLayout;
