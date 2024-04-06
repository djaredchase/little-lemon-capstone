import { Button } from "@chakra-ui/react";
import GreekSalad from '../../assets/greek_salad.jpg';
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const SpecialsCard = () => {
    return (
        <article className='specials-card'>
            <img src={GreekSalad} alt='add food description'/>
            <div className='specials-card-body'>
                <div className='specials-card-body-header'>
                    <h3>Dish title</h3>
                    <h3>$10.99</h3>
                </div>
                <p>Dish description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus eleifend euismod.</p>
                <Button variant='link' rightIcon={<ArrowForwardIcon/>}>
                    Order for delivery
                </Button>
            </div>
        </article>
    )
}
