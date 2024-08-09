import styled from "styled-components";

/** Wrapper style for the TaskModal component */
const Wrapper = styled.div`
  /* Outside div */
  .darkBG {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  /** Positioning the modal in the center of the screen */
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /** modal container*/
  .modal {
    width: 60rem;
    height: 40rem;
    background: #2f3541;
    z-index: 10;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /** header of modal displays the title of the task */
  .modalHeader {
    height: 50px;
    background: #292e38;
    color: #7c8fa9;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  /** Heading text (title of the task) */
  .header {
    margin: 0;
    padding: 10px;
    color: #7c8fa9;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    margin-left: 1rem;
  }

  .modalContent {
    padding: 10px;
    font-size: 25px;
    color: #7c8fa9;
    text-align: center;
  }

  .modalActions {
    position: absolute;
    bottom: 2px;
    margin-bottom: 10px;
    width: 100%;
  }

  .actionsContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
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

  /** container for content of the modal under the header */
  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .form-inputs {
      display: flex;
      flex-direction: column;
      width: 120%;
    }

    .label {
      grid-area: label;
      margin-top: 1rem;
    }

    .input {
      grid-area: input;
      height: 2rem;
    }

    .select-input {
      height: 2rem;
    }
  }

  /** Content of the modal for tasks (right side) */
  .modal-content {
    padding: 10px;
    font-size: 22px;
    color: #7c8fa9;
    text-align: left;
  }

  .btn-container {
    display: flex;
    justify-content: start;
    margin-top: 1rem;
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
`;

export default Wrapper;
