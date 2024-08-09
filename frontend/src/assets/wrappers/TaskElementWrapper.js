import styled from "styled-components";

const Wrapper = styled.div`
  .content-column {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: repeat(4, 1fr); */
    height: 10rem;
    border-radius: 3px;
    margin: 1rem;
    background-color: #2f3541;
    color: #898fa9;
    width: 40rem;
    overflow-y: scroll;
    /* overflow-x: hidden; */
  }

  .content-element {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    background-color: #252932;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .each-element {
    height: 5rem;
    width: 15rem;
    display: flex;
    align-items: center;
    margin: 2px;
    span {
      margin-left: 1rem;
      font-size: 18px;
      /* width: 10rem; */
    }
  }

  .userAvatar {
    height: 3rem;
    width: 3rem;
    border-radius: 100px;
  }

  /** styles for the label colors */
  .design {
    background-color: green;
    width: 3rem;
    height: 1rem;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  .bug {
    background-color: red;
    width: 3rem;
    height: 1rem;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  .enhancement {
    background-color: lightblue;
    width: 6rem;
    height: 1rem;
    border-radius: 5px;
    color: white;
    justify-content: center;
    margin: 1rem;
  }

  .feedback {
    background-color: blue;
    width: 5rem;
    height: 1rem;
    border-radius: 5px;
    color: white;
    justify-content: center;
    margin: 1rem;
  }

  .priority-container {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 1rem;
  }

  .priority {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightcoral;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100px;
    color: white;
  }
`;

export default Wrapper;
