import { Img, Linknav, NavB } from './styled'
import Icono from './smallicon.png'


const Navbar = () => {

    return (
        <>
        <NavB>
            <div>
                <a href='https://playvalorant.com/en-us/' target="_blank">
                    <Img src={Icono} />
                </a> 
            </div>

            <div style={{marginLeft:'2rem'}}>
                <Linknav to="/">Home</Linknav>
                <Linknav to="Agents">Agents</Linknav>
                <Linknav to="Ranks">Ranks</Linknav>
                <Linknav to="Maps">Maps</Linknav>
                <Linknav to="Sprays">Sprays</Linknav>
            </div>
        </NavB>
        </>
    )
}

export default Navbar