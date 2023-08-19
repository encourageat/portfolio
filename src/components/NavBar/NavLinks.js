import './NavBar.css'
const NavLinks = () => {
    return (     
        <ul>
            <li>
                <a href="/portfolio">Home</a>
            </li>
            <li>
                <a href="/portfolio/#/about">About</a>
            </li>
            <li>
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