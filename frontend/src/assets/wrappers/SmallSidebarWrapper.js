import styled from "styled-components";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  background: #252932;
  width: 100%;
  height: 94vh;
  overflow-y: scroll; /** scroll side bar on overflow */
  /* position: absolute; */

  .icon-container {
    width: 3rem;
    height: 3rem;
    color: #898fa9;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
  }

  .link-container:focus {
    color: blue;
    background-color: darkgray;
  }
  .icon-container:active {
    color: blue;
    background-color: darkgray;
    border-radius: 10px;
  }
  .icon-container:hover {
    color: blue;
  }
`;
export default Wrapper;
