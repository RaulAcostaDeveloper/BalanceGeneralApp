const BotonRegresar = ({ href }) => {
    return (
        <a href={String(href)} className="botonRegresar">
            <button > 
                <img src="/return.png"/>
            </button>
        </a>
    )
}
export default BotonRegresar;