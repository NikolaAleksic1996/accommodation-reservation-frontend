import logo from '../../assets/react.svg';
import {NavLink} from "react-router-dom";
import NavigationLinks from './NavLinks.jsx';
import {FiMenu} from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const Navbar = ({showSideBar, setShowSideBar}) => {
    const {navLinks} = NavigationLinks();

    return (
        <>
            <div className='relative mt-1 flex items-center justify-between bg-[#ffffff] pl-4 md:pl-14'>
                <div className='md:w-42 my-2 h-8 w-28 sm:h-[2.5rem] sm:w-36 md:my-0 md:h-20 '>
                    <img src={logo} alt='logo' className='h-full w-full object-contain'/>
                </div>
                <div className='hidden xl:flex items-center gap-[25px] mr-[20px]'>
                    {navLinks.map((navlink) => {
                        const {id, text, path} = navlink;
                        return (
                            <NavLink
                                className='border-b-4 border-white text-[16px] font-medium text-[#484848] aria-[current=page]:border-b-primary-yellow aria-[current=page]:text-primary-yellow'
                                to={path}
                                key={id}
                            >
                                {text}
                            </NavLink>
                        );
                    })}
                </div>
                <div className='mr-[20px] flex cursor-pointer xl:hidden' onClick={() => setShowSideBar(!showSideBar)}>
                    <FiMenu size={40} color='#fed400'/>
                </div>
            </div>
        </>
    )
}

export default Navbar;