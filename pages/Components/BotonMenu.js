import Image from "next/image"
export const BotonMenu = ({setOpenMenu}) => {
    return (
        <div className="botonMenu" onClick={()=> setOpenMenu(true)}>
            <Image src={'/menu.png'} width={50} height={50}/>
        </div>
    )
}