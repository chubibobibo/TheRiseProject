import Wrapper from "../../assets/wrappers/ClientPageContentWrapper.js";

/** importing temporara data */
import { clients } from "../../utils/Clients";
import { customStyles } from "../../utils/styles/customTableStyle.js";
import axios from "axios";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

/** importing table component */
/** provides a table component that can be setup */
import DataTable from "react-data-table-component";

/** loader function to obtain client data */
export const loader = async () => {
  try {
    const foundClients = await axios.get("/api/clients/getAllClients");
    return foundClients;
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return err;
  }
};

function ClientPageContent() {
  //   /** instantiate a state that will handle the data for the search functionality */
  //   const [data, setData] = useState(clients);

  //   /**function to handle change in the search input field */
  //   const handleChange = (e) => {
  //     setData
  //   }

  const data = useLoaderData();
  console.log(data);

  /** columns for the table */
  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
      wrap: true,
    },
    {
      name: "Name",
      selector: (row) => row.clientName,
      sortable: true,
      center: true,
    },
    {
      name: "Primary contact",
      selector: (row) => row.contact,
      sortable: true,
      center: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
      center: true,
    },
    {
      name: "Client groups",
      selector: (row) => row.clientGroup,
      sortable: true,
      wrap: true,
      center: true,
    },
    {
      name: "Labels",
      selector: (row) => row.label,
      sortable: true,
      wrap: true,
      center: true,
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
      center: true,
    },
    {
      name: "Payment received",
      selector: (row) => row.receivedPayment,
      sortable: true,
      center: true,
    },
    {
      name: "Due",
      selector: (row) => row.due,
      sortable: true,
      center: true,
    },
  ];

  return (
    <Wrapper>
      <div className='table-container'>
        <DataTable
          columns={columns}
          data={data.data.allClients}
          fixedHeader
          pagination
          customStyles={customStyles}
        />
      </div>
    </Wrapper>
  );
}
export default ClientPageContent;
