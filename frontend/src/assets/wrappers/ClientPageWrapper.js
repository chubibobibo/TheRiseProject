import styled from "styled-components";

const Wrapper = styled.div`
  /* width: 100vw; */
  background-color: #1c1f26;
  height: 94vh;
  max-width: 100vw;
  overflow-y: scroll;

  /** first column contains 1 row of 4 columns*/
  .first-row-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "total-clients total-contacts contacts-logged contacts-logged7";
    justify-items: center;
    margin-top: 3rem;
    /* -ms-wrap-flow: auto; */

    /** each div inside first column container */
    .total-clients {
      grid-area: total-clients;
      width: 80%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      /** contains the box for icons */
      .box-icon-container-blue {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        background-color: lightblue;
        border-radius: 5px;
      }
      .icon-description {
        display: flex;
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        color: #898fa9;
        p {
          font-size: 50px;
          font-family: Arial, Helvetica, sans-serif;
          margin-bottom: 0;
          margin-top: 0;
        }
        span {
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }

    .client-contacts {
      grid-area: total-contacts;
      width: 80%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* margin-left: 1rem; */

      /** contains the box for icons */
      .box-icon-container-yellow {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        background-color: orange;
        border-radius: 5px;
      }
      .icon-description {
        display: flex;
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        color: #898fa9;
        p {
          font-size: 50px;
          font-family: Arial, Helvetica, sans-serif;
          margin-bottom: 0;
          margin-top: 0;
        }
        span {
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }

    .contacts-logged {
      grid-area: contacts-logged;
      width: 80%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* margin-left: 1rem; */

      /** contains the box for icons */
      .box-icon-container-blue {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        background-color: lightblue;
        border-radius: 5px;
      }
      .icon-description {
        display: flex;
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        color: #898fa9;
        p {
          font-size: 50px;
          font-family: Arial, Helvetica, sans-serif;
          margin-bottom: 0;
          margin-top: 0;
        }
        span {
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }

    .contacts-logged7 {
      grid-area: contacts-logged7;
      width: 80%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* margin-left: 1rem; */

      /** contains the box for icons */
      .box-icon-container-blue {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        background-color: teal;
        border-radius: 5px;
      }
      .icon-description {
        display: flex;
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        color: #898fa9;
        p {
          font-size: 50px;
          font-family: Arial, Helvetica, sans-serif;
          margin-bottom: 0;
          margin-top: 0;
        }
        span {
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }
  }

  /**second row container  contains 1 row and 3 columns */
  .second-row-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "unpaid partially overdue";
    margin-top: 2rem;
    justify-items: center;

    .unpaid-inv {
      grid-area: unpaid;
      width: 85%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
    }
    .partially-paid-inv {
      grid-area: partially;
      width: 85%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
    }
    .overdue-inv {
      grid-area: overdue;
      width: 85%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
    }
  }

  /** third row container contains 2 columns and 3 rows */
  .third-row-container {
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "projects estimates" "open-tickets proposals" "new-orders proposals";
    margin-top: 2rem;
    justify-items: center;

    .project {
      grid-area: projects;
      width: 90%;
      height: 20rem;
      background-color: #252932;
      border-radius: 5px;
      margin-bottom: 2rem;
    }
    .estimates {
      grid-area: estimates;
      width: 90%;
      height: 20rem;
      background-color: #252932;
      border-radius: 5px;
    }
    .open-tickets {
      grid-area: open-tickets;
      width: 90%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
    }
    .new-orders {
      grid-area: new-orders;
      width: 90%;
      height: 10rem;
      background-color: #252932;
      border-radius: 5px;
    }
    .proposals {
      grid-area: proposals;
      width: 90%;
      height: 20rem;
      background-color: #252932;
      border-radius: 5px;
    }
  }
`;

export default Wrapper;
