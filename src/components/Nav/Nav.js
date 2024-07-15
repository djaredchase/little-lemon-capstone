import './Nav.css';
import Logo from '../../assets/Logo.svg';

export const Nav = () => {
    return (
        <header>
            <nav className='header-nav'>
                <img src={Logo} alt='Little Lemon logo'/>
                <ul>
                    <li className='nav-selected'><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Order online</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
                <button className='header-nav-btn'>Nav</button>
            </nav>
        </header>
    )
}