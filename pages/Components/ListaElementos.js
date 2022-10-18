import { useEffect, useState } from "react"

const ListaElementos = ({lista, handleEditar, handleEliminar}) => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        setData(lista);
    },[lista]);

    return (
        <div className="seccionElementosLista">
        {data.map( elemento =>
            <div className="elementoLista" key={elemento.key}>
                <div className="nombre">{elemento.nombre}</div>
                <div className="cantidad">$<b>{elemento.cantidad}</b></div>
                <button className="edit"  onClick={ () => handleEditar(elemento) } >
                    <img src="/edit.png"/>
                </button>
                <button className="delete" onClick={()=>handleEliminar(elemento)}> 
                    <img src="/delete.png"/>
                </button>
            </div>
        )}
    </div>
    )
}
export default ListaElementos;