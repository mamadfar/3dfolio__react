import {useState, useEffect} from 'react';
import {styles} from "../styles";
import {Link} from "react-router-dom";
import {close, menu, mLogo} from "../assets";
import {Menu} from "./index";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleScroll = () => {
        setActive("");
        window.scroll(0, 0);
    }

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2" onClick={handleScroll}>
                    <img src={mLogo} alt="logo" className="w-11 h-11 object-contain"/>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">Mohammad&nbsp;
                        <span className="sm:block hidden">| Farhadi</span>
                    </p>
                </Link>
                <Menu active={active} setActive={setActive}/>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt={toggle ? "close" : "menu"}
                         className="w-[28px] h-[28px] object-contain cursor-pointer"
                         onClick={() => setToggle(!toggle)}/>
                    {toggle && (
                        <div
                            className={`p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ${!toggle ? "hidden" : "flex"}`}>
                            <Menu active={active} setActive={setActive} isMobile setToggle={setToggle} toggle={toggle}/>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
