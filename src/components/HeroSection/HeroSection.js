import './HeroSection.css';
import { Button } from '@chakra-ui/react';

export const HeroSection = () => {
    // F4CE14
    return (
        <div className='hero-section-container'>
            <div className='hero-section-text'>
                <h1>Little lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus eleifend euismod.</p>
                <Button bg='brand.200' className='primary-btn'>Reserve a table</Button>
            </div>
            <div>

            </div>
        </div>
    )
}