/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/ClientPageWrapper.js";

import { PiSuitcase } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { FiCheckSquare } from "react-icons/fi";

/** import components to be rendered */
import ClientPageHeader from "../../components/clientPageElements/ClientPageHeader.jsx";
import ClientInvoice from "../../components/clientPageElements/ClientInvoice.jsx";
import ClientProjects from "../../components/clientPageElements/ClientProjects.jsx";
import ClientTickets from "../../components/clientPageElements/ClientTickets.jsx";

function ClientPage() {
  return (
    <Wrapper>
      <ClientPageHeader />
      <div className='first-row-container'>
        <div className='total-clients'>
          <div className='box-icon-container-blue'>
            <PiSuitcase size={"3rem"} color={"white"} />
          </div>
          <div className='icon-description'>
            <p>50</p>
            <span>Total clients</span>
          </div>
        </div>
        <div className='client-contacts'>
          <div className='box-icon-container-yellow'>
            <SlPeople size={"3rem"} color={"white"} />
          </div>
          <div className='icon-description'>
            <p>50</p>
            <span>Total contacts</span>
          </div>
        </div>
        <div className='contacts-logged'>
          <div className='box-icon-container-blue'>
            <FiCheckSquare size={"3rem"} color={"white"} />
          </div>
          <div className='icon-description'>
            <p>1</p>
            <span>Total contacts</span>
          </div>
        </div>
        <div className='contacts-logged7'>
          <div className='box-icon-container-blue'>
            <FiCheckSquare size={"3rem"} color={"white"} />
          </div>
          <div className='icon-description'>
            <p>1</p>
            <span>Total contacts</span>
          </div>
        </div>
      </div>
      {/** using ClientInvoice component in each of the containers */}
      <div className='second-row-container'>
        <div className='unpaid-inv'>
          <ClientInvoice
            title={"Clients has unpaid invoices"}
            percentage={"8% of total clients"}
            num={"4"}
          />
        </div>
        <div className='partially-paid-inv'>
          <ClientInvoice
            title={"Clients has partially paid invoices"}
            percentage={"10% of total clients"}
            num={"5"}
          />
        </div>
        <div className='overdue-inv'>
          {" "}
          <ClientInvoice
            title={"Clients has overdue invoices"}
            percentage={"8% of total clients"}
            num={"4"}
          />
        </div>
      </div>
      <div className='third-row-container'>
        <div className='project'>
          <ClientProjects
            title={"Projects"}
            firstRow={"Clients  has open projects"}
            secondRow={"Clients has completed projects"}
            thirdRow={"Clients  has  hold projects"}
            fourthRow={"Clients  has canceled projects"}
          />
        </div>
        <div className='estimates'>
          <ClientProjects
            title={"Projects"}
            firstRow={"Clients  has open estimates"}
            secondRow={"Clients has accepted estimates"}
            thirdRow={"Clients  has  new estimate requests"}
            fourthRow={"Clients  has estimate requests in progress"}
          />
        </div>
        <div className='open-tickets'>
          <ClientTickets
            title={"Clients has unpaid invoices"}
            percentage={"8% of total clients"}
            num={"4"}
          />
        </div>
        <div className='new-orders'>
          <ClientTickets
            title={"Clients has unpaid invoices"}
            percentage={"8% of total clients"}
            num={"4"}
          />
        </div>

        <div className='proposals'>
          <ClientProjects
            title={"Proposals"}
            firstRow={"Clients  has open proposals"}
            secondRow={"Clients has accepted proposals"}
            thirdRow={"Clients  has  rejected proposals"}
            // fourthRow={"Clients  has estimate requests in progress"}
          />
        </div>
      </div>
    </Wrapper>
  );
}
export default ClientPage;
