const BotonMenu = ({setOpenMenu}) => {
    return (
        <div className="botonMenu" onClick={()=> setOpenMenu(true)}>
            <img src={'/menu.png'} />
        </div>
    )
}
export default BotonMenu;