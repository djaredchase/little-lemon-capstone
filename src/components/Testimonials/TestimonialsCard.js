import { Avatar } from '@chakra-ui/react';

export const TestimonialsCard = () => {
    return (
        <article className='testimonials-card'>
            <h3>Rating: 4/5</h3>
            <div className='testimonial-profile'>
                <Avatar name='Dummy User' />
                <h4>Dummy User</h4>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </article>
    )
}