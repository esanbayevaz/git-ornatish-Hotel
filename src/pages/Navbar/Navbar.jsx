import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"

function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <div className={styles.Navbar}>
                <NavLink to={"/"}>
                    Home
                </NavLink>
                <NavLink to={"/sidebar"}>
                    Sidebar
                </NavLink><NavLink to={"/header"}>
                    Header
                </NavLink>
            </div>
            <div className="">
                <Sidebar />
            </div>

        </div>
    )
}

export default Navbar