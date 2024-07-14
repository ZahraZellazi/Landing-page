import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { RiSoundModuleLine } from "react-icons/ri";
import "./Icons.css"

const Icons = () => {
    return (
        <div className="icons-container">
            <CiUser className="iconU" />
            <CiMenuBurger className="iconM" />
            <RiSoundModuleLine className="iconS" />
        </div>
    );
}
export default Icons