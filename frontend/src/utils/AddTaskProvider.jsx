import { createContext, useState } from "react";

export const AddTaskContext = createContext();

function AddTaskProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AddTaskContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
      {children}
    </AddTaskContext.Provider>
  );
}
export default AddTaskProvider;
