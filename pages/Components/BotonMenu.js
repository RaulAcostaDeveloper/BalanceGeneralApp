import Image from "next/image"
export const BotonMenu = ({setOpenMenu}) => {
    return (
        <div className="botonMenu" onClick={()=> setOpenMenu(true)}>
            <img src={'/menu.png'} />
        </div>
    )
}