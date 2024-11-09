import { useState } from "react"
interface LongBreakTimeProps {
    seconds: string
}
export default function LongBreakTime({seconds}:LongBreakTimeProps){
    const [longBreakTime,setLongBreakTime] = useState<number>(10)

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h3 style={{ fontSize: '5rem' }}> <input type="text" value={longBreakTime} onChange={(e) => setLongBreakTime(Number(e.target.value))}/>{seconds} </h3>
    </div>
}