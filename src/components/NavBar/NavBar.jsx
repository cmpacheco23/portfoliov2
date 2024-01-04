import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {IoMdMenu, IoMdClose} from "react-icons/io"
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return ( 
    <header>
      <div>
        <div>
          <NavLink to="/#projects"> Projects</NavLink>
          <NavLink to="/#experience"> Experience</NavLink>
          <NavLink to="/#skills"> Skills</NavLink>
          <NavLink to="/#contact"> Contact</NavLink>
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
    <motion.div initial={{ x: 100 }} animate={{ x: 0 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}
    className="">
      <div onClick={(e) => e.stopPropagation()} 
      className="bg-[#FFFFFF] h-full w-[100vw] min-[430px]:w[90px] md:w[60vw] relative z-10 cursor-default px-5 py-2 flex flex-col justify-between">
        <div className="" onClick={() => setOpen(false)}>
          <div className="">
            <IoMdClose/>
          </div> 
          <div className="">
            <Link to="/#projects" className="" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link to="/#experience" className="" onClick={() => setOpen(false)}>
              Experience
            </Link>
            <Link to="/#skills" className="" onClick={() => setOpen(false)}>
              Skills
            </Link>
            <Link to="/#contact" className="" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

