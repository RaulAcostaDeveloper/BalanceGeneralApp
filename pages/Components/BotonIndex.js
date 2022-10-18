const BotonIndex = ({children, href}) => {
    return (
        <a href={String(href)}>
            <button className="botonIndex"> 
                {String(children)}
            </button>
        </a>
    )
}
export default BotonIndex;