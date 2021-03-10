import { createContext, useState } from 'react';

export const EditContext = createContext();

export default function EditProvider({ children }) {
  const [naverId, setNaverId] = useState();

  return (
    <EditContext.Provider
      value={{
        naverId,
        setNaverId,
      }}
    >
      {children}
    </EditContext.Provider>
  );
}
