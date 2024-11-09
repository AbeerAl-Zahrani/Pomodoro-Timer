import { useState } from "react"
interface WorkTimeProps {
    seconds: string
}
// type FormEvent = React.FormEvent<HTMLFormElement>
// type MouseEvent = React.MouseEvent<HTMLButtonElement>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>
export default function WorkTime({ seconds }: WorkTimeProps) {
    const [workTime, setWorkTime] = useState<number>(24)
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 style={{ fontSize: '5rem' }}> <input type="text" value={workTime} onChange={(e: ChangeEvent) => {

            setWorkTime(Number(e.target.value))
        }} /> {seconds}</h3>
    </div>
}