import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #252932;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "links buttons";
  justify-items: start;
  transform: translateY(1rem) translateX(1rem);
  max-width: 98%;

  .client-links {
    display: flex;
    gap: 1rem;
    margin: 1.5rem;
    max-width: 50%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;

    .links {
      text-decoration: none;
      color: white;
      padding-bottom: 20px;
    }
  }

  .links:hover {
    color: lightblue;
    border-bottom: 5px solid lightblue;
  }

  .links:focus {
    color: lightblue;
    border-bottom: 5px solid lightblue;
  }

  .client-buttons {
    display: flex;
    justify-content: end;
    gap: 1rem;
    margin: 1.5rem;
    margin-left: 30rem;
    max-width: 50%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    .links {
      text-decoration: none;
      color: white;
    }
  }
`;

export default Wrapper;