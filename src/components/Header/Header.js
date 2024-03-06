import { Nav } from "../Nav/Nav"
import Logo from '../../assets/Logo.svg';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <img src={Logo} alt='Little Lemon logo'/>
            <Nav />
        </header>
    )
}