/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/ClientPageContactsWrapper.js";

/** importing temporara data */
import { contacts } from "../../utils/Contacts";
import { customStyles } from "../../utils/styles/customTableStyle.js";

/** importing table component */
/** provides a table component that can be setup */
import DataTable from "react-data-table-component";

/** importing components to be rendered */
import ClientPageHeader from "../../components/clientPageElements/ClientPageHeader";

function ClientPageContacts() {
  /** columns for the table */
  const columns = [
    // {
    //   name: "Avatar",
    //   selector: (row) => row.avatar,
    //   sortable: true,
    // },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Job title",
      selector: (row) => row.jobTitle,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Skype",
      selector: (row) => row.skype,
      sortable: true,
    },
  ];

  return (
    <Wrapper>
      <ClientPageHeader />
      <div className='table-container'>
        <DataTable
          columns={columns}
          data={contacts}
          fixedHeader
          customStyles={customStyles}
          pagination
        />
      </div>
    </Wrapper>
  );
}
export default ClientPageContacts;
