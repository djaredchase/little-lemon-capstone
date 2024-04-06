import './Specials.css';
import { Button } from "@chakra-ui/react"
import { SpecialsCard } from './SpecialsCard';;

export const Specials = () => {
    const arr = [1,2,3]; // placeholder until you have real data

    return (
        <>
            <div className='specials-header'>
                <h2>Specials</h2>
                <Button variant='primary'>Order Online</Button>
            </div>
            <div className='specials-body'>
                {
                    arr.map((item) => (
                        <SpecialsCard key={item}/>
                    ))
                }
            </div>
        </>
    )
}