import { Dispatch, SetStateAction } from "react"
import CustomizeTimer from "../_CustomizeTimer/CustomizeTimer"

interface LongBreakTimeProps {
    seconds: number,
    longBreakTime: number,
    activeList: string
    setLongBreakTime: Dispatch<SetStateAction<number>>
}
export default function LongBreakTime({ seconds, longBreakTime, activeList, setLongBreakTime }: LongBreakTimeProps) {

    return <span style={{ fontSize: '10rem', color: '#ded7d3' }}>
        {activeList === 'Customize' ? (
            <CustomizeTimer setTimer={setLongBreakTime} timer={longBreakTime}/>
        ) : (

            <>{longBreakTime < 10 ? `0${longBreakTime}` : longBreakTime}:{seconds < 10 ? `0${seconds}` : seconds}</>
        )}
    </span>
}