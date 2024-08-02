import Wrapper from "../../assets/wrappers/RegisterPageWrapper";
import { Link, Form, redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

/**action function to register */
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axios.post("/api/auth/register", data);
    toast.success("New user registered");
    return redirect("/login");
  } catch (err) {
    console.log(err);
    toast.error(
      Array.isArray(err?.response?.data?.message)
        ? err?.response?.data?.message[0]
        : err?.response?.data?.message
    );
  }
};

function RegisterPage() {
  return (
    <Wrapper>
      {/** main container */}
      <div className='login-container'>
        <div className='login-header'>
          <h1 className='login-label'>Sign up</h1>
        </div>
        {/** register contents */}
        <Form method='post'>
          <div className='login-contents'>
            <input
              type='text'
              className='inputs'
              placeholder='Username'
              name='username'
            />
            <input
              type='text'
              className='inputs'
              placeholder='First name'
              name='firstName'
            />
            <input
              type='text'
              className='inputs'
              placeholder='Last name'
              name='lastName'
            />
            <input
              type='email'
              className='inputs'
              placeholder='Email'
              name='email'
            />
            <input
              type='password'
              className='inputs'
              placeholder='Password'
              name='password'
            />
          </div>

          {/** buttons */}
          <div className='button-container'>
            <button className='button-element'>
              <h1>Sign up</h1>
            </button>
          </div>
        </Form>
        {/** links */}

        <div className='link-login'>
          <span>
            Already have an account?{" "}
            <Link to='/login' className='links'>
              <span className='link-label'>Log in</span>
            </Link>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
export default RegisterPage;
