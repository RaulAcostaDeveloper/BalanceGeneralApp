import { useEffect, useState } from "react"

const FormularioEditar = ({elemento, tipo, setMuestraForm}) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    useEffect(()=>{
        setNombre(elemento.nombre);
        setCantidad(elemento.cantidad);
    },[]);
    return (
        <div className="formularioAniadir">
            <div className="exterior" onClick={()=>setMuestraForm(false)}></div>
            <div className="interior">
                    <input value={nombre} onChange={e=>setNombre(e.target.value)} type={"text"} placeholder="Nombre activo"/>
                    <input value={cantidad} onChange={e=>setCantidad(e.target.value)} type={"number"} placeholder="Cantidad"/>
                    <button onClick={()=>setMuestraForm(false)}>Editar</button>
            </div>
        </div>
    )
}
export default FormularioEditar;