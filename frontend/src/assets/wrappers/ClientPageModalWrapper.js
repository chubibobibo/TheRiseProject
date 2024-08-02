import styled from "styled-components";

const Wrapper = styled.div`
  /* Outside div */
  .darkBG {
    background-color: #292e38;
    width: 70%;
    max-height: 100vh;
    z-index: 0;
    top: 500%;
    left: 50%;
    transform: translate(-50%, -10%);
    position: absolute;
  }

  /** Positioning the modal in the center of the screen */
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #292e38;
    width: 90%;
    height: 40rem;
    /* background-color: red; */
    .header {
      color: white;
      padding-top: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid gray;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 25px;
    }

    .form-row {
      margin-bottom: 1rem;
    }

    .modal-container {
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding-left: 1rem;
      background-color: #272b35;
      width: 90%;
      height: 35rem;
      margin-bottom: 1.5rem;
      overflow-y: scroll;
      transform: translateY(10%);
    }

    .form-container {
      display: flex;
      /* align-items: start; */
      /* justify-content: center; */
      flex-direction: column;
    }

    .label {
      margin-right: 10rem;
      color: white;
    }

    .input {
      width: 90%;
      margin-bottom: 1rem;
      height: 2rem;
      background-color: #20242c;
      color: white;
    }

    .textInput {
      margin-bottom: 1rem;
      background-color: #20242c;
      color: white;
    }

    .btn-container {
      display: flex;
      justify-content: end;
    }

    .button {
      width: 5rem;
      height: 3rem;
      background-color: #5867dd;
      border-radius: 5px;
      border: 1px solid #5867dd;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
    }

    .button:hover {
      background-color: #5867aa;
    }

    /** Button to close the modal */
    .closeBtn {
      cursor: pointer;
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 8px;
      border: none;
      font-size: 18px;
      color: #2c3e50;
      background: white;
      transition: all 0.25s ease;
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
      position: absolute;
      right: 0;
      top: 0;
      align-self: flex-end;
      margin-top: 3px;
      margin-right: 4px;
    }

    .closeBtn:hover {
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
      transform: translate(4px, -4px);
    }
  }
`;

export default Wrapper;
