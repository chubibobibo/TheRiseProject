/** Importing logo */
import Logo from "./Logo";
/** Importing the styled components */
import Wrapper from "../../assets/wrappers/NavigationBar";

/** imported the component for the menu items in the navbar */
import LeftMenuItems from "./LeftMenuItems";
import RightMenuItems from "./RightMenuItems";
import UserAvatar from "./UserAvatar";

function NavigationBar() {
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
        <span className='username'>John_Doe</span>
      </div>
    </Wrapper>
  );
}
export default NavigationBar;
