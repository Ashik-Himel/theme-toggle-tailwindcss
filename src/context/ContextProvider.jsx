import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AllContext = createContext(null);

export default function ContextProvider({ children }) {
  const [darkEnabled, setDarkEnabled] = useState(false);

  const value = {
    darkEnabled,
    setDarkEnabled
  }
  
  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node
}