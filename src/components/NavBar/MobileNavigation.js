import './NavBar.css'
import NavLinks from './NavLinks'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {useState} from 'react'


const MobileNavigation = () => {
    const [open,setOpen] = useState(false);

    const hamOpen = <CgMenuRound className="Hamburger" 
                        size='40px' color='white' 
                        onClick={() => setOpen(!open)}
                    />

    const hamClose= <CgCloseO className="Hamburger" 
                    size='40px' color='white' 
                    onClick={() => setOpen(!open)}
                />
    return (
        <nav className="MobileNavigation"> 
            {open ? hamClose : hamOpen}
            {open && <NavLinks/>}
        </nav>
      );    
}
export default MobileNavigation;