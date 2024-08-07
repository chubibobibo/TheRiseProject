/** Styled component import that wraps around components to apply styles */
import { useState, createContext } from "react";
import Wrapper from "../../assets/wrappers/ClientPageHeaderWrapper.js";

import ClientPageModal from "./ClientPageModal";

import { useContext } from "react";
import { StatusContext } from "../../utils/StatusProvider.jsx";

import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { FiTag } from "react-icons/fi";

export const ClientPageContext = createContext();

function ClientPageHeader() {
  const data = useContext(StatusContext);
  // const [isOpen, setIsOpen] = useState(false);
  console.log(data);
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
        <div className='add-client'>
          <FiTag size={"2rem"} style={{ margin: "2px" }} />
          <Link className='links'>manage labels</Link>
        </div>
        <div className='add-client'>
          <CiExport size={"2rem"} style={{ margin: "2px" }} />
          <Link className='links'>import clients</Link>
        </div>
        <div>
          <div className='add-client'>
            <CiCirclePlus size={"2rem"} style={{ margin: "2px" }} />
            <Link
              className='links'
              onClick={() => {
                data.setIsOpen(true);
              }}
            >
              Add client
            </Link>
          </div>
        </div>
      </div>
      {/* <ClientPageContext.Provider
        value={{ isOpen: isOpen, setIsOpen: setIsOpen }}
      >
        {isOpen && <ClientPageModal />}
      </ClientPageContext.Provider> */}
    </Wrapper>
  );
}
export default ClientPageHeader;
