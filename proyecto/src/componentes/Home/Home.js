import { Card } from "../Cards/Card"
import './home.css'


export default function Home({episodes}) {

    return (
        <div className="container-card">
            {episodes.map((e) => (
                <Card key={e.episode_id} data={e} />
            ))}
        </div>
    )
}