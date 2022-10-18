import { useState } from "react"
import Modal from "../Components/Modal";

const FormularioAniadir = ({setMuestraForm, handleAniadirElemento, contadorLista}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [mensajeModal, setMensajeModal] = useState('');
    
    const tryAniadir =()=>{
        // Muestra el modal
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
        handleAniadirElemento({
            nombre,
            cantidad,
            key: contadorLista,
        })
        setMuestraForm(false) 
    }
    return (
        <>
            <div className="formularioAniadir">
                <div className="exterior" onClick={()=>setMuestraForm(false)}></div>
                <div className="interior">
                        <input type={"text"} 
                            value = {nombre} 
                            onChange={e=>setNombre(e.target.value)} 
                            placeholder="Nombre activo"
                        />
                        <input 
                            type={"number"} 
                            value = {cantidad} 
                            onChange={e=>setCantidad(e.target.value)} 
                            placeholder="Cantidad"
                        />
                        <button onClick={()=>{ tryAniadir() }}>Añadir</button>
                </div>
            </div>
            {openModal&& <Modal setOpenModal = { setOpenModal }>{mensajeModal}</Modal>}
        </>
    )
}
export default FormularioAniadir;