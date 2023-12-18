import Navbar from "../../pages/Navbar/Navbar"
    import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.Header}>
        <Navbar/>
        
    </div>
  )
}

export default Header