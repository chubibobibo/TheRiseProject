/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/ClientTickets.js";
function ClientTickets({ title, percentage, num }) {
  return (
    <Wrapper>
      <div className='tickets-title'>{title}</div>
      <div className='tickets-percentage'>{percentage}</div>
      <div className='tickets-num'>{num}</div>
      <div className='tickets-bar'>graph bar</div>
    </Wrapper>
  );
}
export default ClientTickets;
