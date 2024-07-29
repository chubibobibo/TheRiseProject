import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1c1f26;
  height: 94vh;
  max-width: 100vw;
  overflow-y: scroll;

  .client-container {
    background-color: #252932;
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "controls"
      "content";
    max-height: 90%;
    max-width: 98%;
    margin-top: 3rem;
    margin-left: 1rem;
    border-radius: 5px;
  }
`;

export default Wrapper;
