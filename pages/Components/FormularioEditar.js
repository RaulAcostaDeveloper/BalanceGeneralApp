import { useEffect, useState } from "react"
import Modal from "../Components/Modal";

const FormularioEditar = ({elemento, handleEditarElemento, setMuestraForm}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [mensajeModal, setMensajeModal] = useState('');
    useEffect(()=>{
        setNombre(elemento.nombre);
        setCantidad(elemento.cantidad);
    },[elemento]);

    const tryEditar =()=>{
        if (nombre.length<=0) {
            setOpenModal(true);
            setMensajeModal('Escribe el nombre');
            return;
        }
        if (nombre.length>20 ) {
            setOpenModal(true);
            setMensajeModal('Escribe un nombre mas corto, por favor!');
            return;
        }
        if (typeof(Number(cantidad)) != 'number') {
            setOpenModal(true);
            setMensajeModal('La cantidad debe ser un número');
            return;
        }
        if (Number(cantidad) <= 0) {
            setOpenModal(true);
            setMensajeModal('La cantidad debe ser positiva');
            return;
        }
        if (Number(cantidad) >= 99999999) {
            setOpenModal(true);
            setMensajeModal('La cantidad no puede ser tan alta, por favor!');
            return;
        }
        handleEditarElemento({
            nombre,
            cantidad,
            key: elemento.key,
        })
        setMuestraForm(false) 
    }

    return (
        <>
            <div className="formularioAniadir">
                <div className="exterior" onClick={()=>setMuestraForm(false)}></div>
                <div className="interior">
                        <input value={nombre} onChange={e=>setNombre(e.target.value)} type={"text"} placeholder="Nombre activo"/>
                        <input value={cantidad} onChange={e=>setCantidad(e.target.value)} type={"number"} placeholder="Cantidad"/>
                        <button onClick={()=>{
                            tryEditar()
                        }}>Editar</button>
                </div>
            </div>
            {openModal&& <Modal setOpenModal = { setOpenModal }>{mensajeModal}</Modal>}
        </>
    )
}
export default FormularioEditar;