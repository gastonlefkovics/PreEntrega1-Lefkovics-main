import { height } from '@mui/system';
import React from 'react'
import Logo from '../../assets/Isologo-red.png'
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

export const NavBar = () => {

  const categorias = [
    {nombre:"Motherboards", id:0, ruta:"#"},
    {nombre:"Placas de video", id:1, ruta:"#"},
    {nombre:"Memorias RAM", id:2, ruta:"#"},
    {nombre:"Procesadores", id:3, ruta:"#"},
  ];



  return (
    <header style={style.menu}>
        <img style={style.logo} src={Logo} alt="logo Crew One" />
        <nav>
            {
              categorias.map((categoria)=>{
                return <a key={categoria.id} style={style.categorias} href="categoria.ruta">{categoria.nombre}</a>
              })
            }
        </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar;

const style = {
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    width: "100%",
    backgroundColor: "#042743",
    color: "#f0ffff",
    textDecoration: "none",
  },

  logo: {
    height: "90%"
  },

  categorias: {
    margin: 20,
  }
}