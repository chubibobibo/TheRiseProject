import styled from "styled-components";

/** wrapper for the whole component of the bigsidebar */
/** Big sidebar needs to be a column and should have a scroll if overflowing */
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  flex-direction: column;
  /* height: 100vh;
  width: 100vw; */

  .errorContainer {
    align-content: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .errorImg {
    display: flex;
    width: 80rem;
    max-height: 45rem;
    margin: auto;
  }

  .linkHome {
    display: flex;
    justify-content: center;
    .link {
      text-decoration: none;
      font-size: 40px;
    }
  }
`;

export default Wrapper;
