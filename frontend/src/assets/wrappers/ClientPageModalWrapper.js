// import styled from "styled-components";

// const Wrapper = styled.div`
//   /* Outside div */
//   .darkBG {
//     background-color: #292e38;
//     width: 70%;
//     max-height: 100vh;
//     z-index: 0;
//     top: 500%;
//     left: 50%;
//     transform: translate(-50%, -10%);
//     position: absolute;
//   }

//   /** Positioning the modal in the center of the screen */
//   .centered {
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: #292e38;
//     width: 90%;
//     height: 40rem;
//     /* background-color: red; */
//     .header {
//       color: white;
//       padding-top: 2rem;
//       padding-bottom: 2rem;
//       border-bottom: 1px solid gray;
//       align-items: center;
//       margin-bottom: 1rem;
//       font-size: 25px;
//     }

//     .form-row {
//       margin-bottom: 1rem;
//     }

//     .modal-container {
//       z-index: 10;
//       display: flex;
//       flex-direction: column;
//       justify-content: start;
//       padding-left: 1rem;
//       background-color: #272b35;
//       width: 90%;
//       height: 35rem;
//       margin-bottom: 1.5rem;
//       overflow-y: scroll;
//       transform: translateY(10%);
//     }

//     .form-container {
//       display: flex;
//       /* align-items: start; */
//       /* justify-content: center; */
//       flex-direction: column;
//     }

//     .label {
//       margin-right: 10rem;
//       color: white;
//     }

//     .input {
//       width: 90%;
//       margin-bottom: 1rem;
//       height: 2rem;
//       background-color: #20242c;
//       color: white;
//     }

//     .textInput {
//       margin-bottom: 1rem;
//       background-color: #20242c;
//       color: white;
//     }

//     .btn-container {
//       display: flex;
//       justify-content: end;
//     }

//     .button {
//       width: 5rem;
//       height: 3rem;
//       background-color: #5867dd;
//       border-radius: 5px;
//       border: 1px solid #5867dd;
//       cursor: pointer;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       margin-right: 1rem;
//     }

//     .button:hover {
//       background-color: #5867aa;
//     }

//     /** Button to close the modal */
//     .closeBtn {
//       cursor: pointer;
//       font-weight: 500;
//       padding: 4px 8px;
//       border-radius: 8px;
//       border: none;
//       font-size: 18px;
//       color: #2c3e50;
//       background: white;
//       transition: all 0.25s ease;
//       box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
//       position: absolute;
//       right: 0;
//       top: 0;
//       align-self: flex-end;
//       margin-top: 3px;
//       margin-right: 4px;
//     }

//     .closeBtn:hover {
//       box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
//       transform: translate(4px, -4px);
//     }
//   }
// `;

// export default Wrapper;

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
    transform: translate(-50%, -45%);
  }

  /** modal container*/
  .modal {
    width: 40rem;
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
    justify-content: center;

    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50rem;
      gap: 1rem;

      .form-inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    .input {
      width: 30rem;
      height: 2rem;
    }

    .textInput {
      width: 30rem;
    }
  }

  /** header of modal displays the title of the task */
  .modalHeader {
    height: 50px;
    background: #292e38;

    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  /** Heading text (title of the task) */
  .heading {
    margin: 0;
    padding: 10px;
    color: #7c8fa9;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
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

  /* .deleteBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #fff;
    background: #ff3e4e;
    transition: all 0.25s ease;
  } */

  /* .deleteBtn:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background: #ff3e4e;
  } */

  /* .cancelBtn {
    margin-top: 10px;
    cursor: pointer;
    font-weight: 500;
    padding: 11px 28px;
    border-radius: 12px;
    font-size: 0.8rem;
    border: none;
    color: #2c3e50;
    background: #fcfcfc;
    transition: all 0.25s ease;
  } */
  /* 
  .cancelBtn:hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  } */

  /** container for content of the modal under the header */
  .content-container {
    /* display: grid;
    grid-template-columns: 2fr 1fr; */
    display: flex;
    max-width: 200%;
  }

  /** Content of the modal for tasks (right side) */
  .modal-content {
    /* padding: 10px; */
    font-size: 22px;
    color: #7c8fa9;
    /* text-align: left; */
    .userAvatar {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  /** content for the author of the task (left side) */
  .author-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr;
  }

  /** User avatar in the author-container */
  .userAvatar {
    max-width: 20rem;
    height: 5rem;
    border-radius: 50px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .author-name {
    font-size: 22px;
    margin-left: 2rem;
    color: #7c8f9f;
  }

  .author-details {
    color: #7c8f9f;
    font-size: 22px;
  }

  /** Container for the activities at the bottom of the modal */
  .activities-container {
    /* grid-column: span 2; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;

    .userAvatar {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: start;
    }
    .author-name {
      font-size: 22px;
      margin-left: 5px;
      align-self: center;
      color: #7c8f9f;
    }
  }

  .activity-header {
    display: flex;
    justify-content: center;
    font-size: 25px;
  }
  .user-avatar-activities {
    display: flex;
    justify-content: start;
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
`;

export default Wrapper;
