import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("/src/assets/images/office.jpg");
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100vh;
  max-width: 100vw;
  overflow-y: scroll;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-container {
    background-color: #252932;
    width: 40%;
    height: 50%;
    border-radius: 10px;
    margin-top: 1rem;
  }

  .login-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    padding: 1rem;
  }

  .login-label {
    color: #898fa9;
  }

  .login-contents {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .inputs {
    height: 3rem;
    margin: 10px;
    background-color: #20242c;
    border-radius: 10px;
    color: white;
  }

  .captcha-container {
    background-color: red;
    width: 60%;
    height: 14%;
    margin-left: 1rem;
    margin-top: 1rem;
    background-color: #222222;
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;

    .robot {
      color: white;
      margin-left: 1rem;
    }

    .captcha-img {
      width: 20%;
      margin-left: 2rem;
    }
  }

  .captcha {
    height: 3rem;
    width: 3rem;
  }

  .button-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .button-element {
    width: 95%;
    height: 4rem;
    background-color: #5867dd;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link-container {
    margin-left: 1rem;

    .links {
      text-decoration: none;
      color: #5b73e8;
    }
  }
  .link-register {
    margin-left: 1rem;
    color: white;

    .links {
      text-decoration: none;
      color: #5b73e8;
    }
  }

  .login-extra {
    background-color: red;
    margin-top: 1rem;
    width: 40%;
    height: 50%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
