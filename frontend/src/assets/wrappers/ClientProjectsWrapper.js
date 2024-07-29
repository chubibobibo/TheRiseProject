import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: "title " "firstRow" "secondRow" "thirdRow" "fourthRow";
  height: 100%;
  justify-items: stretch;

  padding: 1rem;

  .title {
    grid-area: title;
    color: #898fa9;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }
  .firstRow {
    grid-area: firstRow;
    margin-left: 1rem;
    margin-bottom: 2rem;
    color: #898fa9;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
  }
  .secondRow {
    grid-area: secondRow;
    margin-left: 1rem;
    margin-bottom: 2rem;
    color: #898fa9;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
  }
  .thirdRow {
    grid-area: thirdRow;
    margin-left: 1rem;
    margin-bottom: 2rem;
    color: #898fa9;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
  }
  .fourthRow {
    grid-area: fourthRow;
    margin-left: 1rem;
    margin-bottom: 2rem;
    color: #898fa9;
    display: flex;
    justify-content: space-between;
  }
`;
export default Wrapper;
