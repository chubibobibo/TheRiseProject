import { useLoaderData } from "react-router-dom";
import axios from "axios";

/** loader function to obtain payment details */
export const loader = async () => {
  try {
    const foundPayment = await axios.get("/api/payment/allPayments");
    return foundPayment;
  } catch (err) {
    console.log(err);
    return err;
  }
};

function SalesPage() {
  const data = useLoaderData();
  console.log(data);
  return <div>SalesPage</div>;
}

export default SalesPage;
