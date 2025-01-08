// import { Dispatch, SetStateAction } from "react"

interface ShortBreakTimeProps {
    seconds: number,
    shortBreakTime: number,
    // setShortBreakTime:Dispatch<SetStateAction<number>>
}
export default function ShortBreakTime({ seconds, shortBreakTime }: ShortBreakTimeProps) {

    return <span style={{ fontSize: '10rem', color: '#ded7d3' }}>
        {/* <input type="text" value={shortBreakTime} onChange={(e) => setShortBreakTime(Number(e.target.value))}/> */}
        {shortBreakTime < 10 ? `0${shortBreakTime}` : shortBreakTime}:{seconds < 10 ? `0${seconds}` : seconds}
    </span>

}