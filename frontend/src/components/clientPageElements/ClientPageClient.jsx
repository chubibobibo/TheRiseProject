import Wrapper from "../../assets/wrappers/ClientPageClientWrapper.js";
/** import components to be rendered */
import ClientPageHeader from "../../components/clientPageElements/ClientPageHeader.jsx";
import ClientPageControls from "./ClientPageControls.jsx";
import ClientPageContent from "./ClientPageContent.jsx";

import ClientPageModal from "./ClientPageModal.jsx";

function ClientPageClient() {
  return (
    <Wrapper>
      <ClientPageHeader />
      <div className='client-container'>
        <div className='controls'>
          {/* <ClientPageControls /> */}
          <div className='search-input'>
            <input type='search' placeholder='Search' />
          </div>
          <ClientPageContent />
        </div>
        <div className='content'></div>
      </div>
    </Wrapper>
  );
}
export default ClientPageClient;
