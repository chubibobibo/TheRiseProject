import styled from "styled-components";

const Wrapper = styled.section`
  /** Layout for the navigationBar to take up the whole width of the screen */
  display: grid;
  grid-template-columns: 0fr 2fr;
  grid-template-rows: 0fr;
  /* grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas: "navbar navbar" "sidebar outlet"; */
  height: 100vh;
  width: 100vw;

  .dashboard {
    /* display: inline-block; */
    grid-column-start: span 2;
    grid-row-start: 1;
    /* grid-area: navbar navbar; */
    /* width: 100vw; */
    /* position: relative; */
    /* overflow-wrap: normal; */
  }

  /** layout for the BigSideBar component to have a grid layout */
  /** grid layout will allow us to make 2 columns for the bigSidebar and the outlet components */
  .dashboard-bigSidebar {
    /* position: absolute; */
    grid-column-start: 1;
    grid-row-start: 2;
    /* grid-area: sidebar; */
    /* display: grid; */
    /* grid-template-columns: 0fr 1fr; * sets the size of each columns */
    /* width: 100vw;
    height: 90vh; */
  }
  /* @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }

  } */
  /** layout for the outlet components */
  .outlet-container {
    grid-column-start: 2;
    grid-row-start: 2;
    /* grid-area: outlet; */
    height: 20rem;
    min-width: 100%;
    overflow-wrap: normal;
  }

  .searchField {
    margin-left: auto;
  }

  @media only screen and(min-width: 360px) {
    .dashboard-outlet {
      height: 100rem;
    }
  }
  @media only screen and(min-width: 480px) {
    .dashboard-outlet {
      height: 100rem;
    }
  }
  @media only screen and (min-width: 992px) {
    .dashboard-outlet {
      height: 100vh;
    }
  }
  @media (min-width: 1400px) {
    .dashboard-outlet {
      height: 50rem;
    }
  }
`;
export default Wrapper;
