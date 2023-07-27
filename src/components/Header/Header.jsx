import logo_white from '../img/logo_white.png'
import styles from './Header.module.css' 

function Header() {
  return (
    <header className={styles.header}>  
      <div className={styles.logo}>
        <img src={logo_white} alt="Logo Busca CEP"/>
        <span>Busca CEP</span>
      </div>
    </header>
  )
}

export default Header