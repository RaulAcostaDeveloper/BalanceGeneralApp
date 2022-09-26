import Link from "next/link";
//Quería usar Link pero no recibe múltiples parámetros
//Siempre los tag nativos van a ser superiores a los creados
// a > Link
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