import { useState } from "react"

import { Header } from './Components/Header';
import { ResultadoCapital } from './Components/ResultadoCapital';
import { BotonIndex } from './Components/BotonIndex';
import { BotonMenu } from './Components/BotonMenu';
import { Menu } from "./Components/Menu";
export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <BotonMenu setOpenMenu = { setOpenMenu }/>
      {openMenu && <Menu setOpenMenu = { setOpenMenu }/>}
      <Header/>
      <ResultadoCapital/>
      <BotonIndex>Activos</BotonIndex>
      <BotonIndex>Pasivos</BotonIndex>
    </div>
  )
}
