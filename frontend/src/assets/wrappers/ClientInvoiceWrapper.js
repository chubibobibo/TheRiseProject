import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "title title" "percentage num" "bar bar";

  .invoice-title {
    grid-area: title;
    color: #898fa9;
    display: flex;
    justify-content: start;
    margin: 1.5rem;
    font-weight: 600;
  }

  .invoice-percentage {
    grid-area: percentage;
    color: #898fa9;
    display: flex;
    justify-content: start;
    margin: 1.5rem;
  }

  .invoice-num {
    grid-area: num;
    color: #898fa9;
    display: flex;
    justify-content: end;
    margin-right: 1.5rem;
    font-size: 40px;
  }
`;

export default Wrapper;
