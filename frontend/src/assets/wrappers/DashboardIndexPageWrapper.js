import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1c1f26;
  height: 94vh;
  width: 100%;

  /** Top row of the page defining grid areas */
  .top-row {
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    grid-template-rows: 1fr 3fr;
    grid-template-areas: "header header header header" "clock-in open-tasks event-today due";
    /** page header  */
    .page-header {
      grid-area: header;
      margin: 1rem;
      font-size: 25px;
      color: white;
    }
    //** Each box in the top row */
    .top-clock-in {
      grid-area: clock-in;
      background-color: #252932;
      margin: 1rem;
      height: 10rem;
      border-radius: 5px;
      /** container for the icon */
      .icon-clock-in-container {
        width: 5rem;
        height: 5rem;
        background-color: #22b9ff;
        border-radius: 10px;
        margin-top: 2rem;
        margin-left: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .top-open-tasks {
      grid-area: open-tasks;
      background-color: #252932;
      margin: 1rem;
      height: 10rem;
      border-radius: 5px;
      /** container for the icon */
      .icon-open-task-container {
        width: 5rem;
        height: 5rem;
        background-color: #22b9ff;
        border-radius: 10px;
        margin-top: 2rem;
        margin-left: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .top-event-today {
      grid-area: event-today;
      background-color: #252932;
      margin: 1rem;
      height: 10rem;
      border-radius: 5px;
      /** container for the icon */
      .icon-top-event-container {
        width: 5rem;
        height: 5rem;
        background-color: pink;
        border-radius: 10px;
        margin-top: 2rem;
        margin-left: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .top-due {
      grid-area: due;
      background-color: #252932;
      margin: 1rem;
      height: 10rem;
      border-radius: 5px;
      /** container for the icon */
      .icon-due-container {
        width: 5rem;
        height: 5rem;
        background-color: pink;
        border-radius: 10px;
        margin-top: 2rem;
        margin-left: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default Wrapper;
