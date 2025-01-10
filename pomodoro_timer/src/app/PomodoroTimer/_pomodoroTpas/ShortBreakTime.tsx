import { Dispatch, SetStateAction } from "react"
import CustomizeTimer from "../_CustomizeTimer/CustomizeTimer"

interface ShortBreakTimeProps {
    seconds: number,
    shortBreakTime: number,
    activeList: string
    setShortBreakTime: Dispatch<SetStateAction<number>>
}
export default function ShortBreakTime({ seconds, shortBreakTime, setShortBreakTime, activeList }: ShortBreakTimeProps) {

    return <span style={{ fontSize: '10rem', color: '#ded7d3' }}>
        {activeList === 'Customize' ? (
            <CustomizeTimer setTimer={setShortBreakTime} timer={shortBreakTime}/>
        ) : (

            <>{shortBreakTime < 10 ? `0${shortBreakTime}` : shortBreakTime}:{seconds < 10 ? `0${seconds}` : seconds}</>
        )}
    </span>

}