import { useEffect } from "react";

const ResultadoCapital = ({titulo, cantidad}) => {
    return (
        <div className="resultadoCapital">
            <div className="titulo">{titulo}</div>
            <div className="cantidad">${cantidad}</div>
        </div>
    )
}
export default ResultadoCapital;