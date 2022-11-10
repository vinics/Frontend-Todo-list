import { ReactNode, useEffect, useState } from 'react'
import { Checkbox } from './Checkbox'
import { DeleteButton } from './DeleteButton'

import styles from './Task.module.css'

interface ITask {
  id: string
  description: string
  done: boolean
}

interface ITaskProps {
  id: string
  description: string
  done: boolean
  onTaskDelete: (id: string) => void
  onTaskChange: (task: ITask) => void
}

export function Task({ id, done = false, description, onTaskDelete, onTaskChange }: ITaskProps) {
  function handleDeleteButton() {
    onTaskDelete(id)
  }

  function handleTaskChange() {
    onTaskChange({ id, description, done: !done })
  }

  return (
    <div className={styles.task}>
      <Checkbox value={done} onClick={handleTaskChange} />
      <label htmlFor="taskCompletion" className={done ? styles.done : ''}>{description}</label>
      <DeleteButton onClick={handleDeleteButton}/>
    </div>
  )
}