import styles from './Header.module.css'

import todoListLogo from '../assets/todoListLogo.svg'


export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoListLogo} alt="Logotipo do App todo list" />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  )
}