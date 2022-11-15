import Context from "../context/context.js"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"



const Pokemones = () => {
    const navigate = useNavigate()
    const { data } = useContext(Context)
    const [seleccionado, setSeleccionado] = useState('')


    const verDetalle = ()=>{
        navigate(`/pokemones/${seleccionado}`)
    }

    return(
        <main>
            <h1>Selecciona un Pokemón</h1>

            <select className='pkmn-select'  onChange={(e)=> setSeleccionado(e.target.value)}>
                <option value="0">Seleccionar</option>
                {
                    data.map((pkmn)=> {
                        return (
                            <option key={pkmn.name} value={pkmn.name}>{pkmn.name}</option>
                        )

                    })
                }    
            </select>

            <button className={`btn ${ (!seleccionado || seleccionado == '0') ? 'disabled' : ''}`} onClick={()=> verDetalle()}>Ver Detalle</button>
        </main>


    )

}
export default Pokemones