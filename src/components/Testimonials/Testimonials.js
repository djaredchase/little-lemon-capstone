import './Testimonials.css';
import { TestimonialsCard } from './TestimonialsCard';

export const Testimonials = () => {
    const arr = [1, 2, 3, 4];

    return (
        <>
            <h2 className='testimonials-header'>Testimonials</h2>
            <div className='testimonials-body'>
                {
                    arr.map(i => (
                        <TestimonialsCard key={i} />
                    ))
                }
            </div>
        </>
    )
}