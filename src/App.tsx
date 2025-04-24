import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskList } from './components/TaskList'
import { v4 as uuid4 } from 'uuid'

import plus from './assets/plus.svg'

import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { EmptyTask } from './components/EmptyTask'

interface Tasks {
  id: string
  title: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    const newTask = {
      id: uuid4(),
      title: newTaskText,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])

    setNewTaskText('')
  }

  function handleNewValueTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function deleteTask(id: string) {
    const taskWithoutDeleted = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(taskWithoutDeleted)
  }

  function toggleTaskCompletion(taskId: string, checked: boolean) {
    const newValueIsCompleted = tasks.map(({ id, ...rest }) => {
      return id === taskId
        ? { ...rest, id, isCompleted: checked }
        : { id, ...rest }
    })

    setTasks(newValueIsCompleted)
  }

  const taskCount = tasks.reduce((acc, cur) => {
    return cur.isCompleted ? acc + 1 : acc
  }, 0)

  return (
    <>
      <Header />
      <main>
        <section>
          <form
            onSubmit={handleCreateNewTask}
            className={styles.taskInputContainer}
          >
            <input
              onChange={handleNewValueTask}
              className={styles.taskInput}
              name="task"
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={newTaskText}
            />
            <button className={styles.taskInputButton}>
              Criar <img src={plus} alt="Adicionar tarefa" />
            </button>
          </form>
          <div className={styles.taskListContainer}>
            <header className={styles.taskListHeader}>
              <p className={styles.headerTextCreated}>
                Tarefas criadas<span>{tasks.length}</span>
              </p>
              <p className={styles.headerTextCompleted}>
                Concluídas
                <span>
                  {' '}
                  {taskCount} de {tasks.length}
                </span>
              </p>
            </header>
            <div className={styles.taskListCreate}>
              {tasks.length > 0 ? (
                tasks.map((task) => {
                  return (
                    <TaskList
                      key={task.id}
                      id={task.id}
                      content={task.title}
                      onDeleteTask={deleteTask}
                      isChecked={task.isCompleted}
                      onToggleTaskCompletion={toggleTaskCompletion}
                    />
                  )
                })
              ) : (
                <EmptyTask />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
