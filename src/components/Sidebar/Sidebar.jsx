import styles from "./Sidebar.module.css"

function Sidebar() {
    const array=[
        
    ]
    return (
        <div className={styles.Sidebar}>
          

            <form className={styles.Sidebarfr}>
                <input required type="email" name="email" placeholder="email" />
                <input required type="text" name="country" placeholder="Davlat yokiy shahar nomi" />
               <select className={styles.input}>
                <option value="">11 adults · 0 children · 1 room</option>
                <option value="">11 adults · 0 children · 1 room</option>
                <option value="">                  
                </option>
               </select>
                <button type="submit">Submit</button>
                <input type="checkbox" name="name" />
            </form>

        </div>
    )
}

export default Sidebar