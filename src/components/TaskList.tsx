import { ChangeEvent, useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'

interface TaskListProps {
    content: string
    onDeleteTask: (id: string) => void,
    isChecked: boolean,
    id: string,
    onChangeValueisCompleted: (id: string, checked: boolean) => void;
}

export function TaskList({ content, onDeleteTask, isChecked, id, onChangeValueisCompleted }: TaskListProps) {
    const [checked, setChecked] = useState(isChecked)

    function handleInputTask(event: ChangeEvent<HTMLInputElement>) {
        setChecked(event.target.checked)
        onChangeValueisCompleted(id, event.target.checked)
    }

    function handleDeleteTask() {
        onDeleteTask(id);
    }

    return (
        <>
            <div className={styles.taskElementContainer}>
                <div className={styles.inputContainer}>
                    <input type="checkbox" checked={checked} onChange={handleInputTask}></input>
                </div>
                <div className={styles.textContainer}>
                    <p className={checked ? styles.textDecorate : styles.textWithoutDecorate}>{content}</p>
                </div>
                <button onClick={handleDeleteTask} className={styles.trashContainer}>
                    <Trash size={16} className={styles.colorTrash} />
                </button>
            </div>
        </>
    )
}