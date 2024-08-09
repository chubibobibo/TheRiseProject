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

  /** container for content of the modal under the header */
  .content-container {
    display: grid;
    grid-template-columns: 5fr 4fr;

    p {
      font-size: 18px;
    }
  }

  /** Content of the modal for tasks (right side) */
  .modal-content {
    padding: 10px;
    font-size: 22px;
    color: #7c8fa9;
    text-align: left;
    .userAvatar {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  /** content for the author of the task (left side) */
  .author-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5fr;
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

  .comment-section {
    width: 100%;

    .comments {
      margin: 1rem;
      border-bottom: 1px solid gray;
      color: #898fa9;
    }

    .author {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .author-container {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }

  .author-details-container {
    margin-top: -5rem;
  }
`;

export default Wrapper;
