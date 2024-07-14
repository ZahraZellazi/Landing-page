import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { RiSoundModuleLine } from "react-icons/ri";
import "./Icons.css"

const Icons = () => {
    return (
        <div className="icons-container">
            <CiUser className="icon" />
            <CiMenuBurger className="icon" />
            <RiSoundModuleLine className="icon" />
        </div>
    );
}
export default Icons