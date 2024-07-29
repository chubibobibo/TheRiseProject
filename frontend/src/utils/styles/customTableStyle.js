import { BiFontSize } from "react-icons/bi";

export const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
      backgroundColor: "#252932",
      color: "white",
      borderBottom: "1px solid gray",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "#252932",
      color: "white",
      fontSize: "18px",
      fontWeight: 600,
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      borderBottom: "1px solid gray",
      fontSize: "16px",
    },
  },
  pagination: {
    style: {
      backgroundColor: "#252932",
      color: "white",
    },
  },
};
