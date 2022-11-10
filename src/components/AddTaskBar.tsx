import { v4 as uuidv4 } from 'uuid'

import { Input } from "./Input";

import styles from './AddTaskBar.module.css'
import { CreateTaskButton } from "./CreateTaskButton";
import { ChangeEvent, FormEvent, FormEventHandler, useRef, useState } from "react";

interface IAddTasksBarProps {
  onCreateNewTask: (id: string, description: string) => void
}

export function AddTaskBar({ onCreateNewTask }: IAddTasksBarProps) {
  const [newTaskDescription, SetNewTaskDescription] = useState('')

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(uuidv4(), newTaskDescription)
    SetNewTaskDescription('')
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    SetNewTaskDescription(event.target.value)
  }

  return (
    <form 
      className={styles.form}
      onSubmit={handleFormSubmit}
    >
      <Input 
        name="username"
        onChange={handleInputChange}
        value={newTaskDescription}
      />
      <CreateTaskButton />
    </form>
  )
}