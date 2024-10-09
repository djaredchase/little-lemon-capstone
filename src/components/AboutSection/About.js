import './About.css';
import MarioAndAdrian_A from '../../assets/Mario_and_Adrian_A.jpg';
import MarioAndAdrian_B from '../../assets/Mario_and_Adrian_b.jpg';

export const About = () => {
    return (
        <div className='about-section'>
            <div className='about-section-text'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <img src={MarioAndAdrian_A} />
            <img src={MarioAndAdrian_B} />
            {/* <div className='about-section-images'>
            </div> */}
        </div>
    )
}