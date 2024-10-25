import React, { useState } from 'react';
import './App.css';
import { useTickets } from './TicketsContext';

export default function Ticket() {
  const { tickets, setTickets } = useTickets();

  const [inpName, setInpName] = useState("");
  const [inpDistance, setInpDistance] = useState();
  const [inpFinalLocation, setInpFinalLocation] = useState("");

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate(); 
  const hour = currentDate.getHours(); 
  const minute = currentDate.getMinutes(); 

  function CreateTicket(event) {
    event.preventDefault();
    const newTicket = {
      id: window.crypto.randomUUID(),
      name: inpName,
      date: `${month}/${day} ${hour}:${minute}`,
      distance: inpDistance,
      price: inpDistance * 2.6,
      finalLocation: inpFinalLocation,
      duration: (inpDistance * 1.78).toFixed(2),
    };
    if (inpName.length > 0 & inpDistance > 0 & inpFinalLocation.length > 0) {
      setTickets([...tickets, newTicket]);  
      Reset();
    }

  }

  function Reset() {
    setInpName("");
    setInpDistance(1);
    setInpFinalLocation("");
  }

  return (
    <form onSubmit={CreateTicket}>
      <input
        type="text"
        placeholder="Name"
        value={inpName}
        onChange={(e) => setInpName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Distance (km)"
        value={inpDistance}
        onChange={(e) => setInpDistance(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Final Location"
        value={inpFinalLocation}
        onChange={(e) => setInpFinalLocation(e.target.value)}
      />
      <br />
      <button type="submit">Create Ticket</button>
    </form>
  );
}
