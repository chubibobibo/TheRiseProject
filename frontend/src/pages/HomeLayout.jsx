/** import outlet to display all child components of HomeLayout */
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default HomeLayout;
