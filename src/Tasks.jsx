import React from 'react';
import { useTickets } from './TicketsContext';
import './task.css'
export default function Tasks() {
  const { tickets } = useTickets();

  return (
        (tickets.length > 0) ? (
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Distance</th>
                    <th>Duration</th>
                    <th>Final Location</th>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                        <td>{tickets.indexOf(ticket)+1}</td>
                        <td>{ticket.date}</td>
                        <td>{ticket.distance} km</td>
                        <td>{ticket.duration} (min)</td>
                        <td>{ticket.finalLocation}</td>
                        <td>{ticket.name}</td>
                        <td>{ticket.price} uah</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        ):
        (
            <div></div>
        )
    
    
  );
}
