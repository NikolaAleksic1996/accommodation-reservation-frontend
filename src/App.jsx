import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import Error from "./pages/Errors/Error.jsx";
import GuestLayout from "./pages/Layouts/GuestLayout.jsx";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";
import Home from "./pages/Home/Home.jsx";
import SuccessReservation from "./pages/Accommodation/SuccessReservation.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'accommodation',
                element: <Accommodation />,
            },
            {
                path: 'success',
                element: <SuccessReservation />,
            },
        ],
    },
]);

function App() {

    return <RouterProvider router={router} />;
}

export default App
