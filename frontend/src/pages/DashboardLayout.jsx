/**  outlet to render all the child components of dashboard layout */
import { Outlet } from "react-router-dom";

/** Styled components wraps around components to apply styles.*/
import Wrapper from "../assets/wrappers/Dashboard.js";

/** Imports for all components */
import NavigationBar from "../components/navigationBar/NavigationBar.jsx";
import SmallSidebarComponent from "../components/SmallSidebarComponent.jsx";
import BigSidebarComponent from "../components/BigSidebarComponent.jsx";
import StatusProvider from "../utils/StatusProvider.jsx";

import { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const StatusContextNav = createContext();

/** loader function to obtain logged user */
export const loader = async () => {
  try {
    const loggedUser = await axios.get("/api/auth/currentLoggedUser");
    return loggedUser;
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return err;
  }
};

function DashboardLayout() {
  /** Create context to pass data to components */
  const [isOpen, setIsOpen] = useState(true);
  const data = useLoaderData();
  // console.log(data);

  return (
    /** main container will need to be display flex */
    /** div for the big and small sidebar component  will need to be grid that will have columns*/
    /** renders the NavigationBar, BigSidebar, SmallSidebar and child components of DashboardLayout*/
    <Wrapper>
      <StatusContextNav.Provider
        value={{ isOpen: isOpen, setIsOpen: setIsOpen, data: data }}
      >
        <div className='dashboard'>
          <NavigationBar />
        </div>
        <div className='dashboard-bigSidebar'>
          {!isOpen ? <SmallSidebarComponent /> : <BigSidebarComponent />}
        </div>
        <div className='outlet-container'>
          <StatusProvider>
            <Outlet />
          </StatusProvider>
        </div>
      </StatusContextNav.Provider>
    </Wrapper>
  );
}
export default DashboardLayout;
