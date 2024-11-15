import './HeroSection.css';
import FoodImage from '../../assets/restaurant_food.jpg';
import { Button } from '@chakra-ui/react';

export const HeroSection = () => {
    return (
        <div className='hero-section-container'>
            <div className='hero-section-text'>
                <h1>Little lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus eleifend euismod.</p>
                <Button variant='secondary'>Reserve a table</Button>
            </div>
            <div className='hero-section-img'>
                <img src={FoodImage} alt='add food description'/>
            </div>
        </div>
    )
}