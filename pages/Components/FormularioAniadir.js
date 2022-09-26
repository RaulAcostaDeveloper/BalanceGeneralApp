export const FormularioAniadir = ({setMuestraForm}) => {
    return (
        <div className="formularioAniadir">
            <div className="exterior" onClick={()=>setMuestraForm(false)}></div>
            <div className="interior">
                    <input type={"text"} placeholder="Nombre activo"/>
                    <input type={"number"} placeholder="Cantidad"/>
                    <button onClick={()=>setMuestraForm(false)}>Añadir</button>
            </div>
        </div>
    )
}