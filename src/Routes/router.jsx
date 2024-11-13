import {createBrowserRouter} from 'react-router-dom';
import Layout from '../Components/Layout.jsx';
import Tasks from '../Components/Tasks.jsx';
import Ticket from '../Components/Ticket.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Ticket/>,
            },
            {
                path: '/tasks',
                element: <Tasks/>,
            },
        ],
    },
]);

export default router;
