import React from 'react';
import { useSelector } from 'react-redux';

export default function Tasks() {
    const tickets = useSelector((state) => state.tickets.items);

    return (
        tickets.length > 0 ? (
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
                {tickets.map((ticket, index) => (
                    <tr key={ticket.id}>
                        <td>{index + 1}</td>
                        <td>{ticket.date}</td>
                        <td>{ticket.distance} km</td>
                        <td>{ticket.duration} min</td>
                        <td>{ticket.finalLocation}</td>
                        <td>{ticket.name}</td>
                        <td>{ticket.price} UAH</td>
                    </tr>
                ))}
                </tbody>
            </table>
        ) : (
            <div className="no-tickets">No tickets available</div>
        )
    );
}
