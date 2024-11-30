// import { Dispatch, SetStateAction } from "react"
interface WorkTimeProps {
    seconds: number
    workTime: number
    // setWorkTime: Dispatch<SetStateAction<number>>
}
// type FormEvent = React.FormEvent<HTMLFormElement>
// type MouseEvent = React.MouseEvent<HTMLButtonElement>
// type ChangeEvent = React.ChangeEvent<HTMLInputElement>
export default function WorkTime({ seconds, workTime }: WorkTimeProps) {

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 style={{ fontSize: '5rem' }}>
            {/* <input type="text" value={workTime} onChange={(e: ChangeEvent) => {

            setWorkTime(Number(e.target.value))
        }} />  */}
            {workTime}:{seconds}</h3>
    </div>
}