// import { Dispatch, SetStateAction } from "react"

interface LongBreakTimeProps {
    seconds: number,
    longBreakTime: number,
    // setLongBreakTime:Dispatch<SetStateAction<number>>
}
export default function LongBreakTime({ seconds, longBreakTime }: LongBreakTimeProps) {

    return <span style={{ fontSize: '10rem', color: '#ded7d3' }}>
        {/* <input type="text" value={longBreakTime} onChange={(e) => setLongBreakTime(Number(e.target.value))}/> */}
        {longBreakTime < 10 ? `0${longBreakTime}` : longBreakTime}:{seconds < 10 ? `0${seconds}` : seconds}
    </span>
}