import NavigationLinks from "../navbar/NavLinks.jsx";
import {Link} from "react-router-dom";
import {FaRegWindowClose} from "react-icons/fa";
import logo from '../../assets/react.svg';


// eslint-disable-next-line react/prop-types
const Sidebar = ({showSideBar, setShowSideBar}) => {
    const {navLinks} = NavigationLinks();


    return (
        <div
            className={`fixed left-0 top-0 z-50 ${
                !showSideBar ? 'left-[-100%]' : 'left-0'
            } h-screen w-[80%] bg-[#181818] px-[20px] pb-[20px] pt-[30px] duration-300 ease-in-out sm:w-[50%]`}
        >
            <div className='absolute right-[10px] top-[10px] cursor-pointer'
                 onClick={() => setShowSideBar(!showSideBar)}
            >
                <FaRegWindowClose size={20} color='#474747'/>
            </div>
            <div className='flex h-full w-full flex-col'>
                <div className='mx-auto mb-[10px] max-h-[60px] max-w-[198px]'>
                    <img src={logo} alt='logo' className='h-full w-full object-cover'/>
                </div>
                <div className='flex flex-col'>
                    {navLinks.map((navlink) => {
                        const {id, text, path, icon} = navlink;
                        return (
                            <Link
                                className='flex flex-row items-center rounded-md py-[10px] pl-[5px] pr-[20px] text-left text-[16px] font-medium text-white hover:bg-primary-yellow'
                                to={path}
                                key={id}
                                onClick={() => setShowSideBar(!showSideBar)}
                            >
                                {icon}
                                {text}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
