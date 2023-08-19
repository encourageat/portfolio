import './NavBar.css'
const NavLinks = (props) => {
    return (     
        <ul>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/portfolio">Home</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/portfolio/#/about">About</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/portfolio/#/contact">Contact</a>
            </li>
        </ul>
        
      );    
}
export default NavLinks;
/*
            <li>
                <a href="/#/portfolio">Home</a>
            </li>
            <li>
                <a href="/#/portfolio/about">About</a>
            </li>
            <li>
                <a href="/#/portfolio/contact">Contact</a>
            </li>
*/