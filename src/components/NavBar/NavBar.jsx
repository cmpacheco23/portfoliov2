import { useState } from "react";
import { NavLink } from "react-router-dom";
import {IoMdMenu, IoMdClose} from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return ( 
    <header>
      <div>
        <div>
          <NavLink to="/#projects"> Projects</NavLink>
          <NavLink to="/#experience"> Projects</NavLink>
          <NavLink to="/#skills"> Projects</NavLink>
          <NavLink to="/#contact"> Projects</NavLink>
        </div>
        <div onClick={() => setOpen(true)}>
          <IoMdMenu/>
        </div>
      <AnimatePresence>
        {open && <SideBarMenu setOpen={setOpen}/>}
      </AnimatePresence>
      </div>
    </header>
  );
}

export default NavBar

const SideBarMenu = ({setOpen}) => {
  return ( 
    <>
    </>
  );
}

