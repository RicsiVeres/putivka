// src/router.js
import { createBrowserRouter } from 'react-router-dom';
import Tasks from '../Components/Tasks.jsx';
import Ticket from '../Components/Ticket.jsx';
import NavBar from '../Components/Navbar.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <NavBar />
                    <Ticket />
            </>
        ),
    },
    {
        path: '/tasks',
        element: (
            <>
                <NavBar />
                    <Tasks />
            </>
        ),
    },
]);

export default router;
