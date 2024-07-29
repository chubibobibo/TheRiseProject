/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/ClientPageHeaderWrapper.js";

import { Link } from "react-router-dom";

function ClientPageHeader() {
  return (
    <Wrapper>
      <div className='client-links'>
        <div>
          <Link to='/dashboard/clients' className='links'>
            Overview
          </Link>
        </div>
        <div>
          <Link to='/dashboard/clients-clients' className='links'>
            Clients
          </Link>
        </div>
        <div>
          <Link to='/dashboard/clients-contacts' className='links'>
            Contacts
          </Link>
        </div>
      </div>
      <div className='client-buttons'>
        <div>
          <Link className='links'>manage labels</Link>
        </div>
        <div>
          <Link className='links'>import clients</Link>
        </div>
        <div>
          <Link className='links'>Add client</Link>
        </div>
      </div>
    </Wrapper>
  );
}
export default ClientPageHeader;
