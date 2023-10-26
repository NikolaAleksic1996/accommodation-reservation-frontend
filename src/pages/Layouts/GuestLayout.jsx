// import Footer from '../../components/footer/Footer.jsx';
import Navbar from '../../components/navbar/Navbar.jsx';
import {Outlet} from 'react-router-dom';
import {useState} from 'react';
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const GuestLayout = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <main className='min-h-screen min-w-full'>
            <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            <Outlet/>
            {/*<Footer />*/}
        </main>
    );
};

export default GuestLayout;