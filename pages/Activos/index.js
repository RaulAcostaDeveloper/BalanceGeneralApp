import { useEffect, useState } from "react";
import Header from "../Components/Header";
import BotonRegresar from "../Components/BotonRegresar";
import BotonAniadir from "../Components/BotonAniadir";
import FormularioAniadir from "../Components/FormularioAniadir";
import FormularioEditar from "../Components/FormularioEditar";
import ListaElementos from "../Components/ListaElementos";
import ResultadoCapital from "../Components/ResultadoCapital";

const ActivosPage = () => {
    const [muestraForm, setMuestraForm] = useState(false);
    const [muestraFormEditar, setMuestraFormEditar] = useState(false);
    const [dataElementoEditar, setDataElementoEditar] = useState({});
    const [activos, setActivos] = useState([]); //nombre 20 length, cantidad 8 length
    const [total, setTotal] = useState(0);
    const [contadorLista, setContadorLista] = useState(0);
    
    useEffect(()=>{//Traer de local storage
        if (typeof window !== 'undefined') {
            // localStorage.clear(); // <--------------------------------------------------------
            let items = JSON.parse(localStorage.getItem('activosBalanceGeneralApp'));
            if (items) {
                setActivos(items.activos);
                setContadorLista(items.contadorLista);
            }
        }
    },[]);

    const handleAniadirElemento = (activo) => {//Añade elemento
        setActivos(activos.concat(activo));
        setContadorLista(++contadorLista);
        if (typeof window !== 'undefined') {
            localStorage.setItem('activosBalanceGeneralApp', JSON.stringify({
                activos:activos.concat(activo),
                contadorLista:++contadorLista,
            }))
        }
    }

    const handleOpenEditar = (elemento) => {//Abre el form de editar
        setDataElementoEditar(elemento); //data para el form
        setMuestraFormEditar(true);
    }

    const handleEditarElemento = (elemento)=>{
        let nuevaLista = activos.map( entidad =>{
            if (entidad.key === elemento.key) {
                return {
                    nombre: elemento.nombre,
                    cantidad: elemento.cantidad,
                    key: elemento.key,
                }
            } else {
                return entidad;
            }
        });
        setActivos(nuevaLista);
        if (typeof window !== 'undefined') {
            localStorage.setItem('activosBalanceGeneralApp', JSON.stringify({
                activos: nuevaLista,
                contadorLista,
            }))
        }
    }

    const handleEliminarElemento = (elemento) => {
        let nuevaLista = activos.map(entidad => {
            return entidad;
        });
        for (let index = 0; index < nuevaLista.length; index++) {
            if (nuevaLista[index].key === elemento.key) {
                nuevaLista.splice(index, 1)
            }
        }
        setActivos(nuevaLista);
        if (typeof window !== 'undefined') {
            localStorage.setItem('activosBalanceGeneralApp', JSON.stringify({
                activos: nuevaLista,
                contadorLista,
            }));
        }
    }

    useEffect(()=>{//Calcula total
        let totalTemp = activos.map(item => item.cantidad).reduce((prev,curr) => Number(prev) + Number(curr), 0)
        if (activos.length>=0) {
            setTotal(totalTemp);
        } else {
            setTotal(0);
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('activosTotal', JSON.stringify({
                total: totalTemp,
            }));
        }
    },[activos])

    return (
        <div>
            <Header>Activos</Header>
            <BotonRegresar href="/"/>
            <ResultadoCapital titulo = {"Total Activos"} cantidad = {total}/>
            <BotonAniadir setMuestraForm = { setMuestraForm }/>
            { muestraForm && 
                <FormularioAniadir 
                    setMuestraForm = { setMuestraForm } 
                    handleAniadirElemento = { handleAniadirElemento } 
                    contadorLista = {contadorLista}
                />
            }
            <ListaElementos 
                lista = {activos} 
                handleEditar = { handleOpenEditar } 
                handleEliminar = { handleEliminarElemento }
            />
            { muestraFormEditar && 
                <FormularioEditar 
                    setMuestraForm = { setMuestraFormEditar } 
                    elemento = { dataElementoEditar } 
                    handleEditarElemento = { handleEditarElemento }
                />}
        </div>
    )
}
export default ActivosPage;