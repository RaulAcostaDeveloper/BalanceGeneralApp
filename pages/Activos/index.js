import { useEffect, useState } from "react";
import Header from "../Components/Header";
import BotonRegresar from "../Components/BotonRegresar";
import BotonAniadir from "../Components/BotonAniadir";
import FormularioAniadir from "../Components/FormularioAniadir";
import FormularioEditar from "../Components/FormularioEditar";
import ListaElementos from "../Components/ListaElementos";
import ResultadoCapital from "../Components/ResultadoCapital";
import Modal from "../Components/Modal";
const ActivosPage = () => {
    const [muestraForm, setMuestraForm] = useState(false);
    const [muestraFormEditar, setMuestraFormEditar] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [mensajeModal, setMensajeModal] = useState('');
    const [dataElementoEditar, setDataElementoEditar] = useState({nombre:'', cantidad:0});
    const [activos, setActivos] = useState([]);
    const [totalActivos, setTotalActivos] = useState(552.00);
    useEffect(()=>{
        setActivos([ //nombre 20 length cantidad 8 length
            { nombre: "Mi activo wqdin qwo", cantidad: 10000000, key:1 },
            { nombre: "Mi activo wqdin qwo", cantidad: 2322, key:2 },
            { nombre: "Mi activo", cantidad: 2322, key:3 },
            { nombre: "Mi activo", cantidad: 2322, key:4 },
            { nombre: "Mi activo", cantidad: 2322, key:5 },
            { nombre: "Mi activo", cantidad: 2322, key:6 },
            { nombre: "Mi activo", cantidad: 2322, key:7 },
            { nombre: "Mi activo", cantidad: 2322, key:8 },
        ])
    },[])

    const handleOpenEditar = (elemento) => {
        setMuestraFormEditar(true);
        setDataElementoEditar(elemento); //Para el form
    }

    return (
        <div>
            <Header>Activos</Header>
            <BotonRegresar href="/"/>
            <ResultadoCapital titulo = {"Total Activos"} cantidad = {totalActivos}/>
            <BotonAniadir setMuestraForm = { setMuestraForm }/>
            {muestraForm && <FormularioAniadir setMuestraForm = { setMuestraForm }/>}
            {muestraFormEditar && <FormularioEditar setMuestraForm = { setMuestraFormEditar } elemento = { dataElementoEditar }/>}
            <ListaElementos lista = {activos} handleEditar = { handleOpenEditar }/>
            {openModal&& <Modal setOpenModal = { setOpenModal }>{mensajeModal}</Modal>}
        </div>
    )
}
export default ActivosPage;