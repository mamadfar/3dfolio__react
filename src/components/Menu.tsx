import {FC} from "react";
import {navLinks} from "../constants";

interface IMenuProps {
    active: string;
    setActive: (active: string) => void;
    isMobile?: boolean;
    setToggle?: (toggle: boolean) => void;
    toggle?: boolean;
}

const Menu: FC<IMenuProps> = ({active, setActive, isMobile = false, setToggle, toggle}) => {

    const handleActive = (title: string) => {
        setActive(title)
        if (setToggle) {
            setToggle(!toggle);
        }
    }

    return (
        <ul className={`list-none ${isMobile ? "flex justify-end items-start flex-col gap-4" : "hidden sm:flex flex-row gap-10"}`}>
            {navLinks.map(link => (
                <li key={link.id}
                    className={`${isMobile ? "font-poppins font-medium cursor-pointer text-[16px]" : "hover:text-white text-[18px] font-medium cursor-pointer"} ${active === link.title ? "text-white" : "text-secondary"}`}
                    onClick={() => handleActive(link.title)}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
        </ul>
    )
};

export default Menu;
