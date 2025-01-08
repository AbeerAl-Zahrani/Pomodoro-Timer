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

    return <span style={{ fontSize: '10rem', color: '#ded7d3' }}>
        {/* <input type="text" value={workTime} onChange={(e: ChangeEvent) => {

            setWorkTime(Number(e.target.value))
        }} />  */}
        {workTime}:{seconds < 10 ? `0${seconds}` : seconds}</span>

}