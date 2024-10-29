
import styles from "./Navigation.module.css";

function Navigation() {
  
  return (

    <nav className={`${styles.navigation} container `}>
      <div className='logo'>
      <img src="Images/github.png"height="50px" width="60px" alt="" />
      </div>
      <ul className=''>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
