import { useEffect, useState } from 'react'
import './cardrandom.css'
import axios from 'axios';
import { Card } from './Card';

export const CardRandom = () => {
    
    const [random, setRandom] = useState([])

    useEffect(() => {
        axios('https://breakingbadapi.com/api/character/random')
        .then(({data}) => setRandom(data[0]))

        .catch(error => console.log(error))
    }, [])

    return (
        <div className="cardRandom">
            
                <Card random={random}/>
            
        </div>
    )
}
