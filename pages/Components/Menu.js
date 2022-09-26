
const Menu = ({setOpenMenu}) => {
    return (
        <div className="menu">
            <div className="interior">
                <div>Info</div>
                <div>Contact</div>
            </div>
            <div className="exterior" onClick={()=> setOpenMenu(false)}>

            </div>
        </div>
    )
}
export default Menu