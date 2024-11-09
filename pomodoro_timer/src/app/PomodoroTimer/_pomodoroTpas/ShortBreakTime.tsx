import { useState } from "react"
interface ShortBreakTimeProps {
    seconds: string
}
export default function ShortBreakTime({seconds}:ShortBreakTimeProps){
    const [shortBreakTime,setShortBreakTime] = useState<number>(5)

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h3 style={{ fontSize: '5rem' }}> <input type="text" value={shortBreakTime} onChange={(e) => setShortBreakTime(Number(e.target.value))}/>{seconds} </h3>
    </div>
}