// src/TicketsContext.js
import React, { createContext, useContext, useState } from 'react';

const TicketsContext = createContext();

export function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  return (
    <TicketsContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketsContext.Provider>
  );
}

export function useTickets() {
  return useContext(TicketsContext);
}
