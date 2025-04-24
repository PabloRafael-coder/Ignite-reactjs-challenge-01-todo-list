import clipboard from './../assets/Clipboard.svg'
import styles from './EmptyTask.module.css'

export function EmptyTask() {
  return (
    <div className={styles.emptyTaskContainer}>
      <img className={styles.image} src={clipboard} alt="" />
      <div className={styles.textContainer}>
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
