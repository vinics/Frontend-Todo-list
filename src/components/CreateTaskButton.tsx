import styles from './CreateTaskButton.module.css'

import plusIcon from '../assets/plusIcon.svg'

export function CreateTaskButton() {
  return(
    <button 
      className={styles.button}
      type="submit"
    >
      <span>Criar</span>
      <img src={plusIcon}/>
    </button>
  )
}