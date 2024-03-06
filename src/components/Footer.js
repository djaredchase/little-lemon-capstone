import { Nav } from "./Nav/Nav"
import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <img src='logo src' alt='' />
            <section>
                <h3>Doormat Navigation</h3>
                <Nav />
                {/* <nav>
                    <ul>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Menu</a></li>
                        <li><a href=''>Order online</a></li>
                        <li><a href=''>Reservations</a></li>
                        <li><a href=''>Login</a></li>
                    </ul>
                </nav> */}
            </section>
            <section>
                <h3>Contact</h3>
                <Nav />
                {/* <nav>
                    <ul>
                        <li><a href=''>Address</a></li>
                        <li><a href=''>Phone number</a></li>
                        <li><a href=''>Email</a></li>
                    </ul>
                </nav> */}
            </section>
            <section>
                <h3>Social media links</h3>
                <Nav />
                {/* <nav>
                    <ul>
                        <li><a href=''>Instagram</a></li>
                        <li><a href=''>Twitter</a></li>
                        <li><a href=''>Facebook</a></li>
                        <li><a href=''>Tiktok</a></li>
                    </ul>
                </nav> */}
            </section>
        </footer>
    )
}