import Wrapper from "../../assets/wrappers/ClientPageContentWrapper.js";

/** importing temporara data */
import { clients } from "../../utils/Clients";
import { customStyles } from "../../utils/styles/customTableStyle.js";

/** importing table component */
/** provides a table component that can be setup */
import DataTable from "react-data-table-component";

// import { useState } from "react";

function ClientPageContent() {
  //   /** instantiate a state that will handle the data for the search functionality */
  //   const [data, setData] = useState(clients);

  //   /**function to handle change in the search input field */
  //   const handleChange = (e) => {
  //     setData
  //   }

  /** columns for the table */
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Primary contact",
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Client groups",
      selector: (row) => row.clientGroup,
      sortable: true,
    },
    {
      name: "Labels",
      selector: (row) => row.labels,
      sortable: true,
    },
    {
      name: "projects",
      selector: (row) => row.projects,
      sortable: true,
    },
    {
      name: "Total invoiced",
      selector: (row) => row.totalInvoice,
      sortable: true,
    },
    {
      name: "Payment received",
      selector: (row) => row.receivedPayment,
      sortable: true,
    },
    {
      name: "Due",
      selector: (row) => row.due,
      sortable: true,
    },
  ];

  return (
    <>
      <div className='table-container'>
        <DataTable
          columns={columns}
          data={clients}
          fixedHeader
          pagination
          customStyles={customStyles}
        />
      </div>
    </>
  );
}
export default ClientPageContent;
