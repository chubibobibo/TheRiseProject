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
    width: 30%;
    height: 50rem;
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
    font-size: 12px;
  }

  /* .link-container {
    margin-left: 1rem;

    .links {
      text-decoration: none;
      color: #5b73e8;
    }
  } */
  .link-login {
    margin-left: 1rem;
    margin-top: 1rem;
    color: white;
    margin-bottom: 1rem;

    .links {
      text-decoration: none;
      color: #5b73e8;
    }
  }
`;

export default Wrapper;
