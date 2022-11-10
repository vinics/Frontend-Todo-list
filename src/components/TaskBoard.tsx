import styles from './TaskBoard.module.css'
import clipboardIcon from '../assets/clipboard_icon.svg'
import { ReactNode } from 'react'

interface ITaskBoardProps {
  children?: ReactNode
  createdTasksCount: number
  completedTasksCount: number
}

export function TaskBoard({ createdTasksCount, completedTasksCount, children }: ITaskBoardProps) {
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span data-type="created" className={styles.label}>Tarefas criadas</span>
          <span className={styles.labelNumber}>{createdTasksCount}</span>
        </div>
        <div>
          <span data-type="finished" className={styles.label}>Concluídas</span>
          <span className={styles.labelNumber}>{completedTasksCount > 0 ? `${completedTasksCount} de ${createdTasksCount}` : 0}</span>
        </div>
      </header>
      <main className={styles.taskListContainer}>
        {!children && <div className={styles.taskListEmpty}>
          <img src={clipboardIcon} alt="Ícone de prancheta sem tarefas" />
          <div>
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>}

        { children }

      </main>
    </div>
  )
}