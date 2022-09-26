const ListaElementos = ({lista, handleEditar}) => {
    return (
        <div className="seccionElementosLista">
        {lista.map( elemento =>
            <div className="elementoLista" key={elemento.key}>
                <div className="nombre">{elemento.nombre}</div>
                <div className="cantidad">$<b>{elemento.cantidad}</b></div>
                <button className="edit"  onClick={ () => handleEditar(elemento) } >
                    <img src="/edit.png"/>
                </button>
                <button className="delete"> <img src="/delete.png"/></button>
            </div>
        )}
    </div>
    )
}
export default ListaElementos;