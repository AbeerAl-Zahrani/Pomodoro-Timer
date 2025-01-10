import { Dispatch, SetStateAction } from "react"
import styles from './_CustomizeTimer.module.css'
interface UpdateTimer {
    timer: number,
    setTimer: Dispatch<SetStateAction<number>>
}
type ChangeEvent = React.ChangeEvent<HTMLInputElement>
// type FormEvent = React.FormEvent<HTMLFormElement>
// type MouseEvent = React.MouseEvent<HTMLButtonElement>
export default function CustomizeTimer({ setTimer, timer }: UpdateTimer) {
    return <>
        <input className={styles.input} type="number" defaultValue={timer} value={timer} onChange={(e: ChangeEvent) => {

            setTimer(Number(e.target.value))
        }} />
    </>
}