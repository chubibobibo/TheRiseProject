import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 50px;
  width: 2rem;
  height: 2rem;
  background-color: #2f3541;
  margin: 1rem;
  color: #898fa9;
  cursor: pointer;
  border-color: transparent;
  /** changes color to black with transition of half a sec. */
  &:hover {
    background-color: black;
    transition: 0.5s;
  }
`;

export default Wrapper;
