import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTicket } from '../Redux/ticketsSlice';
import {useNavigate} from "react-router-dom";

export default function Ticket() {
  const dispatch = useDispatch();

  const [inpName, setInpName] = useState("");
  const [inpDistance, setInpDistance] = useState("");
  const [inpFinalLocation, setInpFinalLocation] = useState("");

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();

  function createTicket(event) {
    event.preventDefault();
    const newTicket = {
      id: window.crypto.randomUUID(),
      name: inpName,
      date: `${month}/${day} ${hour}:${minute}`,
      distance: inpDistance,
      price: (inpDistance * 2.6).toFixed(2),
      finalLocation: inpFinalLocation,
      duration: (inpDistance * 1.78).toFixed(2),
    };

    if (inpName && inpDistance > 0 && inpFinalLocation) {
      dispatch(addTicket(newTicket));
      reset();
    }
  }

  function reset() {
    setInpName("");
    setInpDistance("");
    setInpFinalLocation("");
  }

  return (
      <form onSubmit={createTicket}>
        <input
            className="inpfield"
            type="text"
            placeholder="Name"
            value={inpName}
            onChange={(e) => setInpName(e.target.value)}
        />
        <input
            className="inpfield"
            type="number"
            placeholder="Distance (km)"
            value={inpDistance}
            onChange={(e) => setInpDistance(Number(e.target.value))}
        />
        <input
            className="inpfield"
            type="text"
            placeholder="Final Location"
            value={inpFinalLocation}
            onChange={(e) => setInpFinalLocation(e.target.value)}
        />
        <button className="submitbtn" type="submit">Create Ticket</button>
      </form>
  );
}
