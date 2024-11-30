// import { Dispatch, SetStateAction } from "react"

interface LongBreakTimeProps {
    seconds: number,
    longBreakTime:number,
    // setLongBreakTime:Dispatch<SetStateAction<number>>
}
export default function LongBreakTime({seconds,longBreakTime}:LongBreakTimeProps){

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h3 style={{ fontSize: '5rem' }}> 
        {/* <input type="text" value={longBreakTime} onChange={(e) => setLongBreakTime(Number(e.target.value))}/> */}
       {longBreakTime}:{seconds} 
        </h3>
    </div>
}