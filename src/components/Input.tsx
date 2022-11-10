import { HTMLAttributes, InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: IInputProps) {
  return (
    <input
      autoComplete="off"
      className={styles.input}
      placeholder='Adicione uma nova tarefa'
      type="text"
      { ...rest }
    />
  )
}