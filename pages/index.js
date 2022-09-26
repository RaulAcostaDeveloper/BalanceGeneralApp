import { useState } from "react"

import Header from './Components/Header';
import ResultadoCapital from './Components/ResultadoCapital';
import BotonIndex from './Components/BotonIndex';
import BotonMenu from './Components/BotonMenu';
import Menu from "./Components/Menu";
export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [cantidadCapital, setCantidadCapital] = useState(1233.00)
  return (
    <div>
      <BotonMenu setOpenMenu = { setOpenMenu }/>
      {openMenu && <Menu setOpenMenu = { setOpenMenu }/>}
      <Header>Balance General</Header>
      <ResultadoCapital titulo = {"Capital"} cantidad = {cantidadCapital}/>
      <BotonIndex href = "/Activos">Activos</BotonIndex>
      <BotonIndex  href = "/Pasivos">Pasivos</BotonIndex>
    </div>
  )
}
