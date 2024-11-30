// import { Dispatch, SetStateAction } from "react"

interface ShortBreakTimeProps {
    seconds: number,
    shortBreakTime:number,
    // setShortBreakTime:Dispatch<SetStateAction<number>>
}
export default function ShortBreakTime({seconds,shortBreakTime}:ShortBreakTimeProps){

    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h3 style={{ fontSize: '5rem' }}> 
        {/* <input type="text" value={shortBreakTime} onChange={(e) => setShortBreakTime(Number(e.target.value))}/> */}
    {shortBreakTime}:{seconds}
     </h3>
    </div>
}