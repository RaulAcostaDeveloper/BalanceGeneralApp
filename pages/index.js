import { useEffect, useState } from "react"

import Header from './Components/Header';
import ResultadoCapital from './Components/ResultadoCapital';
import BotonIndex from './Components/BotonIndex';
import BotonMenu from './Components/BotonMenu';
import Menu from "./Components/Menu";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [cantidadCapital, setCantidadCapital] = useState(0);
  const [totalActivos, setTotalActivos] = useState(0);
  const [totalPasivos, setTotalPasivos] = useState(0);

  //Esta aplicación tiene sus datos en un localStorage, por lo que al entrar a la página, busca y hace el cálculo
  useEffect(()=>{//Traer de local storage
    if (typeof window !== 'undefined') {
        // localStorage.clear(); // <--------------------------------------------------------
        let itemTotalActivos = JSON.parse(localStorage.getItem('activosTotal'));
        let itemTotalPasivos = JSON.parse(localStorage.getItem('pasivosTotal'));
        if (itemTotalActivos) {
          setTotalActivos(itemTotalActivos.total);
        }
        if (itemTotalPasivos) {
          setTotalPasivos(itemTotalPasivos.total);
        }
    }
  },[]);

  useEffect(()=>{
    setCantidadCapital(totalActivos-totalPasivos);
  },[totalActivos,totalPasivos]);

  console.log('Render Index');
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
