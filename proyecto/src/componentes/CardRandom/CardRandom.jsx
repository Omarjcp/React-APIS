import { useEffect, useState } from 'react'
import './cardrandom.css'
import axios from 'axios';
import { Card } from './Card';

export const CardRandom = () => {
    
    const [loading, setLoading] = useState(true)
    const [random, setRandom] = useState([])

    useEffect(() => {
        axios('https://breakingbadapi.com/api/character/random')
        .then(({data}) => {
            setRandom(data[0])
            setLoading(false)
        })

        .catch(error => console.log(error))
    }, [])

    return (
        <div className="cardRandom">
             <Card random={random} loading={loading}/>
        </div>
    )
}
