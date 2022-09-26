const Modal  = ({children, setOpenModal}) => {
    return (
        <div className="modal" >
            <div className="modalExterior" onClick={()=> setOpenModal(false)}></div>
            <div className="modalInterior">{children}</div>
        </div>
    )
}
export default Modal;