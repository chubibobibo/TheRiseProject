/** Obtains errors in routes */
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

/** styled components imports */
import Wrapper from "../assets/wrappers/ErrorPageWrapper.js";

function ErrorPageComponent() {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <div className='errorContainer'>
        {error.status === 404 ? (
          <img src='../src/assets/images/404.png' alt='' className='errorImg' />
        ) : (
          <p>Something went wrong {error.stack}</p>
        )}
      </div>
      <div className='linkHome'>
        <Link to='/dashboard' className='link'>
          Return to the dashboard
        </Link>
      </div>
    </Wrapper>
  );
}
export default ErrorPageComponent;
