const BotonAniadir = ({setMuestraForm}) => {
    return (
        <button className="botonAniadir" onClick={ () => setMuestraForm(true)}> 
            <img src="/add.png"/>
        </button>
    )
}
export default BotonAniadir;