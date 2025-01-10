import CustomizeTimer from "../_CustomizeTimer/CustomizeTimer"

import { Dispatch, SetStateAction } from "react"
interface WorkTimeProps {
    seconds: number
    workTime: number
    activeList: string
    setWorkTime: Dispatch<SetStateAction<number>>
}

export default function WorkTime({ seconds, workTime, activeList, setWorkTime }: WorkTimeProps) {

    return <span style={{ fontSize: '10rem', color: '#ded7d3' }}>
        {activeList === 'Customize' ? (
            <CustomizeTimer setTimer={setWorkTime} timer={workTime}/>
        ) : (

            <>  {workTime}:{seconds < 10 ? `0${seconds}` : seconds}</>
        )}
    </span>

}