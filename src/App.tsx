import './styles/global.css'

import styles from './App.module.css'

import { Input } from './components/Input'
import { Header } from './components/Header'
import { AddTaskBar } from './components/AddTaskBar'
import { TaskBoard } from './components/TaskBoard'
import { Task } from './components/Task'
import { useEffect, useState } from 'react'

interface ITask {
  id: string
  description: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [createdTasksCounter, SetCreatedTasksCounter] = useState(0)
  const [completedTasksCounter, SetCompletedTasksCounter] = useState(0)

  useEffect(() => {
    SetCreatedTasksCounter(tasks.length)
    SetCompletedTasksCounter(tasks.filter(task => task.done).length)
  }, [tasks])

  function handleCreateNewTask(id: string, description: string) {
    setTasks([...tasks, { id, description, done: false }])
  }

  function handleTaskDelete(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks([...updatedTasks])
  }

  function handleTaskChange({ id, description, done }: ITask) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) return { id, description, done }

      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      
      <main className={styles.content}>
        <AddTaskBar onCreateNewTask={handleCreateNewTask} />
        <TaskBoard createdTasksCount={createdTasksCounter} completedTasksCount={completedTasksCounter} >
          {
            tasks.length > 0 && tasks.map(task => <Task 
                                                    key={task.id} 
                                                    id={task.id} 
                                                    done={task.done} 
                                                    description={task.description} 
                                                    onTaskDelete={handleTaskDelete}
                                                    onTaskChange={handleTaskChange}
                                                  />)
          }
        </TaskBoard>
      </main>
    </div>
  )
}

export default App
