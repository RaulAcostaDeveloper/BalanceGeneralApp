import { useEffect, useState } from "react";
import Header from "../Components/Header";
import BotonRegresar from "../Components/BotonRegresar";
import BotonAniadir from "../Components/BotonAniadir";
import FormularioAniadir from "../Components/FormularioAniadir";
import FormularioEditar from "../Components/FormularioEditar";
import ListaElementos from "../Components/ListaElementos";
import ResultadoCapital from "../Components/ResultadoCapital";

const PasivosPage = () => {
    const [muestraForm, setMuestraForm] = useState(false);
    const [muestraFormEditar, setMuestraFormEditar] = useState(false);
    const [dataElementoEditar, setDataElementoEditar] = useState({});
    const [pasivos, setPasivos] = useState([]); //nombre 20 length, cantidad 8 length
    const [total, setTotal] = useState(0);
    const [contadorLista, setContadorLista] = useState(0);
    
    useEffect(()=>{//Traer de local storage
        if (typeof window !== 'undefined') {
            // localStorage.clear(); // <--------------------------------------------------------
            let items = JSON.parse(localStorage.getItem('pasivosBalanceGeneralApp'));
            if (items) {
                setPasivos(items.pasivos);
                setContadorLista(items.contadorLista);
            }
        }
    },[]);

    const handleAniadirElemento = (pasivo) => {//Añade elemento
        setPasivos(pasivos.concat(pasivo));
        setContadorLista(++contadorLista);
        if (typeof window !== 'undefined') {
            localStorage.setItem('pasivosBalanceGeneralApp', JSON.stringify({
                pasivos:pasivos.concat(pasivo),
                contadorLista:++contadorLista,
            }))
        }
    }

    const handleOpenEditar = (elemento) => {//Abre el form de editar
        setDataElementoEditar(elemento); //data para el form
        setMuestraFormEditar(true);
    }

    const handleEditarElemento = (elemento)=>{
        let nuevaLista = pasivos.map( entidad =>{
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
        setPasivos(nuevaLista);
        if (typeof window !== 'undefined') {
            localStorage.setItem('pasivosBalanceGeneralApp', JSON.stringify({
                pasivos: nuevaLista,
                contadorLista,
            }))
        }
    }

    const handleEliminarElemento = (elemento) => {
        let nuevaLista = pasivos.map(entidad => {
            return entidad;
        });
        for (let index = 0; index < nuevaLista.length; index++) {
            if (nuevaLista[index].key === elemento.key) {
                nuevaLista.splice(index, 1)
            }
        }
        setPasivos(nuevaLista);
        if (typeof window !== 'undefined') {
            localStorage.setItem('pasivosBalanceGeneralApp', JSON.stringify({
                pasivos: nuevaLista,
                contadorLista,
            }));
        }
    }

    useEffect(()=>{//Calcula total
        let totalTemp = pasivos.map(item => item.cantidad).reduce((prev,curr) => Number(prev) + Number(curr), 0)
        if (pasivos.length>=0) {
            setTotal(totalTemp);
        } else {
            setTotal(0);
        }
        if (typeof window !== 'undefined') {
            localStorage.setItem('pasivosTotal', JSON.stringify({
                total: totalTemp,
            }))
        }
    },[pasivos])
    
    return (
        <div>
            <Header>Pasivos</Header>
            <BotonRegresar href="/"/>
            <ResultadoCapital titulo = {"Total Pasivos"} cantidad = {total}/>
            <BotonAniadir setMuestraForm = { setMuestraForm }/>
            { muestraForm && 
                <FormularioAniadir 
                    setMuestraForm = { setMuestraForm } 
                    handleAniadirElemento = { handleAniadirElemento } 
                    contadorLista = {contadorLista}
                />
            }
            <ListaElementos 
                lista = {pasivos} 
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
export default PasivosPage;