import Wrapper from "../../assets/wrappers/ClientInvoiceWrapper";
function ClientInvoice({ title, percentage, num }) {
  return (
    <Wrapper>
      <div className='invoice-title'>{title}</div>
      <div className='invoice-percentage'>{percentage}</div>
      <div className='invoice-num'>{num}</div>
      <div className='invoice-bar'>graph bar</div>
    </Wrapper>
  );
}
export default ClientInvoice;
