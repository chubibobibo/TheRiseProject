import styled from "styled-components";

/** wrapper for the whole component of the bigsidebar */
/** Big sidebar needs to be a column and should have a scroll if overflowing */
const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  background: #252932;
  width: 15rem;
  height: 94vh;
  overflow-y: scroll; /** scroll side bar on overflow */
  /* position: absolute; */

  /** styling the buttons used in the sidebar */
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    color: #898fa9;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

export default Wrapper;
