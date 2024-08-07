/** Importing logo */
import Logo from "./Logo";
/** Importing the styled components */
import Wrapper from "../../assets/wrappers/NavigationBar";
import { useContext } from "react";
import { StatusContextNav } from "../../pages/DashboardLayout";

/** imported the component for the menu items in the navbar */
import LeftMenuItems from "./LeftMenuItems";
import RightMenuItems from "./RightMenuItems";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

// export const NavigationContext = createContext();
function NavigationBar() {
  const { data } = useContext(StatusContextNav);
  console.log(data);
  return (
    <Wrapper>
      <div className='logoImg'>
        <Logo />
      </div>
      <div className='nav'>
        <LeftMenuItems />
      </div>
      <div className='nav-right'>
        <RightMenuItems />
        <UserAvatar />
      </div>
      <div>
        <Link className='username'>
          {data.data.foundUser.username.toUpperCase()}
        </Link>
      </div>
    </Wrapper>
  );
}
export default NavigationBar;
