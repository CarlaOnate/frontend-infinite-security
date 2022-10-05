import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState({ id: 10, rol: 1, setUser: null }); // 10 en id y rol 1

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
