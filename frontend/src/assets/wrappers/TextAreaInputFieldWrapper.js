import styled from "styled-components";

const Wrapper = styled.div`
  .comment-input {
    background-color: #2b303b;
    color: white;
    /* height: 2rem; */
    margin: 0.5rem;
    width: 30rem;
    max-width: 30rem;
  }

  .button-container {
    display: flex;

    .button {
      width: 8rem;
      height: 3rem;
      background-color: #5867dd;
      border-radius: 5px;
      border: 1px solid #5867dd;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
      color: white;
      gap: 5px;
    }

    .button:hover {
      background-color: #5867aa;
    }
  }
`;

export default Wrapper;
