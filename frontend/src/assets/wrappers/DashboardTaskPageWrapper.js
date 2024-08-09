import styled from "styled-components";

/** Wraps around the the DashboardTaskPage to implement styles */
const Wrapper = styled.div`
  /* width: 100vw; */
  background-color: #1c1f26;
  height: 94vh;
  width: 100%;
  overflow-x: hidden;

  /** container for the main navbar */
  /** takes up the whole width of the page */
  .container {
    padding: 2rem;
    /* height: 20rem; */
  }

  .taskHeader {
    background-color: #252932;
    height: 5rem;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: end;
    align-items: center;

    .links-right {
      display: flex;
      text-decoration: none;

      .add-task-btn {
        width: 7rem;
        height: 3rem;
        border-color: transparent;
        background-color: #2f3541;
        border-radius: 10px;
        color: #888ea8;
        margin-right: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        text-decoration: none;
      }

      .add-mult-task-btn {
        width: 10rem;
        height: 3rem;
        border-color: transparent;
        background-color: #2f3541;
        border-radius: 10px;
        color: #888ea8;
        margin-right: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        text-decoration: none;
      }

      .add-task-btn:hover {
        background-color: black;
      }
      .add-mult-task-btn:hover {
        background-color: black;
      }

      .task-btn-link {
        text-decoration: none;
      }
    }
  }

  /** Contains the buttons, icons and user avatar */
  .button-row {
    background-color: #252932;
    height: 4rem;
    display: flex;
    justify-content: start;
    /* width: 100vw; */
    /* padding: 1rem; */
  }
  .table-container {
    max-width: 100%;
    background-color: #2f3541;
    min-height: 30em;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  /** row for the contents of the dashboard */
  .content-header {
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    /* .span-header {
      margin: 10px;
      font-size: 15px;
    } */
  }
  .column-header {
    /* border: 1px solid black; */
    border-radius: 3px;
    margin: 1rem;
    margin-right: 3rem;
    margin-left: 2rem;
    background-color: #252932;
    color: #898fa9;
    padding: 4px;
    display: grid;
    grid-template-columns: 1fr 0fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;

    .span-header {
      font-size: 20px;
    }
  }

  /** Colored line under column header */
  /** grid-column start: span 2 takes the space of the 2 columns */
  .column-color-yellow {
    height: 3px;
    background-color: yellow;
    grid-column-start: span 2;
  }
  .column-color-blue {
    height: 3px;
    background-color: blue;
    grid-column-start: span 2;
  }
  .column-color-purple {
    height: 3px;
    background-color: purple;
    grid-column-start: span 2;
  }
  .column-color-cyan {
    height: 3px;
    background-color: cyan;
    grid-column-start: span 2;
  }

  .content-column {
    display: flex;
    flex-direction: column;
    height: 20rem;
    border-radius: 3px;
    margin: 1rem;
    background-color: #2f3541;
    color: #898fa9;
    width: 40rem;
    overflow-y: scroll;
    /* grid-template-columns: repeat(4, 1fr); */
    overflow-x: hidden;
  }

  /** Responsive for small screens */

  @media only screen and(min-width: 360px) {
    .table-container {
      height: 30rem;
    }
  }
  @media only screen and(min-width: 480px) {
    .table-container {
      height: 30rem;
    }
  }
  @media (min-width: 992px) {
    .table-container {
      height: 24rem;
    }
  }
  @media (min-width: 2000px) {
    .table-container {
      height: 40rem;
    }
  }
`;

export default Wrapper;
