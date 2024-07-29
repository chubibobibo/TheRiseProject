import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "title title" "percentage num" "bar bar";

  .tickets-title {
    grid-area: title;
    color: #898fa9;
    display: flex;
    justify-content: start;
    margin-left: 1rem;
    margin-top: 1rem;
    font-weight: 600;
  }
  .tickets-percentage {
    grid-area: percentage;
    color: #898fa9;
    display: flex;
    justify-content: start;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
  .tickets-num {
    grid-area: num;
    color: #898fa9;
    display: flex;
    justify-content: start;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    font-size: 30px;
  }
  .tickets-bar {
    grid-area: bar;
    color: #898fa9;
    display: flex;
    justify-content: start;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
`;

export default Wrapper;
