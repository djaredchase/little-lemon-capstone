import './Footer.css';
import Logo from '../../assets/Logo.svg';

export const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={Logo} alt='Little Lemon logo' />
            <div>
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Order online</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Contact</h3>
                <nav>
                    <ul>
                        <li><a href='/'>Address</a></li>
                        <li><a href='/'>Phone number</a></li>
                        <li><a href='/'>Email</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Social media links</h3>
                <nav>
                    <ul>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Tiktok</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}