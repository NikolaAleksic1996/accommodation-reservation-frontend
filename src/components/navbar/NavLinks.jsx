import {BsCardHeading} from 'react-icons/bs';
import {FaHome} from 'react-icons/fa';

const NavigationLinks = () => {

    const navLinks = [
        {
            id: 1,
            text: 'Home',
            path: '/',
            icon: <FaHome size={16} color='#ffffff' className='mr-[10px]'/>,
        },
        {
            id: 2,
            text: 'Accommodation',
            path: 'accommodation',
            icon: <BsCardHeading size={16} color='#ffffff' className='mr-[10px]'/>,
        },
    ];
    return {
        navLinks
    }
}
export default NavigationLinks;