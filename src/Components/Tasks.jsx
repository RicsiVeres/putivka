// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {deleteTicket} from "../Redux/ticketsSlice.js";

export default function Tasks() {
    const dispatch = useDispatch(); // useDispatch hook meghívása itt
    const tickets = useSelector((state) => state.tickets.items);

    return (
        <div>
            <Link className="submitbtn" to="/">Back</Link>
            {tickets.length > 0 ? (
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
                        <th></th>
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
                            <td>
                                <button
                                    className="submitbtn"
                                    onClick={() => dispatch(deleteTicket(index))}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div className="no-tickets">No tickets available</div>
            )}
        </div>
    );
}
