import rocket from './../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={rocket} alt="imagem de um foguete" />
        <h1 className={styles.headerTitle}>
          to<span>do</span>
        </h1>
      </div>
    </header>
  )
}
