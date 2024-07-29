import Wrapper from "../../assets/wrappers/LoginPageWrapper";
import { Link, redirect, Form } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

/** action function to submit login */
export const action = async ({ request }) => {
  const formData = await request.formData(); /** obtains data from form */
  const data = Object.fromEntries(formData); /** converts data to objects */
  try {
    await axios.post("/api/auth/login", data);
    toast.success("User logged in");
    return redirect("/dashboard");
  } catch (err) {
    console.log(err);
    toast.error(
      Array.isArray(err?.response?.data?.message)
        ? err?.response?.data?.message[0]
        : err?.response?.data?.message
    );
    return err;
  }
};
function LoginPage() {
  return (
    <Wrapper>
      {/** main container */}
      <div className='login-container'>
        <div className='login-header'>
          <h1 className='login-label'>Login</h1>
        </div>
        {/** login contents */}
        <Form method='post'>
          <div className='login-contents'>
            <input
              type='text'
              className='inputs'
              placeholder='Username'
              name='username'
            />
            <input
              type='password'
              className='inputs'
              placeholder='Password'
              name='password'
            />
          </div>
          {/**captcha */}
          <label htmlFor='captcha'>
            <div className='captcha-container'>
              <input type='checkbox' name='' id='captcha' className='captcha' />
              <span className='robot'>I am not a robot</span>
              <img
                src='/src/assets/images/captcha.png'
                alt=''
                className='captcha-img'
              />
            </div>
          </label>
          {/** buttons */}
          <div className='button-container'>
            <button className='button-element'>
              <h1>Login</h1>
            </button>
          </div>
        </Form>
        {/** links */}
        <div className='link-container'>
          <Link className='links'>
            <p className='link-label'> Forgot password?</p>
          </Link>
        </div>
        <div className='link-register'>
          <span>
            You don't have an account?{" "}
            <Link className='links'>
              <span className='link-label'>Register</span>
            </Link>
          </span>
        </div>
      </div>
      {/**footer */}
      <div className='login-extra'>
        <div className='bottom-header'>
          <p>Log in as</p>
        </div>
        <div className='bottom-content-name'>
          <p>Admin</p>
          <p>admin@demo.com</p>
          <p>riseDemo</p>
        </div>
        <div className='bottom-content-name2'>
          <p>Client</p>
          <p>client@demo.com</p>
          <p>riseDemo</p>
        </div>

        <div className='bottom-content-footer'>
          To check team members, use the email addresses from the Team members
          list. Password is same riseDemo.
        </div>
      </div>
    </Wrapper>
  );
}
export default LoginPage;
