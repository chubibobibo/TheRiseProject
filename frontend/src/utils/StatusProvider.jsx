import { createContext, useState } from "react";

export const StatusContext = createContext();

function StatusProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StatusContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
      {children}
    </StatusContext.Provider>
  );
}
export default StatusProvider;
