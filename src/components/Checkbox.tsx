import styles from './Checkbox.module.css'

import checkmark from '../assets/checkmark.svg'

interface ICheckbox {
  value?: boolean
  onClick: () => void
}

export function Checkbox({ value = false, onClick }: ICheckbox) {
  
  return (
    <div className={`${styles.checkbox} ${ value && styles.checked}`} onClick={onClick}>
      {
        value && <img src={checkmark} alt="" />
      }
    </div>
  )
}