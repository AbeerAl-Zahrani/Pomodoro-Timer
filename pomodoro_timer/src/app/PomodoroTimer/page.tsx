'use client'
import { useState } from "react";
import CustomTimerButton from "./_components/CustomTimerButton";
import styles from './_PomodoroTimerPage.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import WorkTime from "./_pomodoroTpas/WorkTime";
import ShortBreakTime from "./_pomodoroTpas/ShortBreakTime";
import LongBreakTime from "./_pomodoroTpas/LongBreakTime";
export default function PomodoroTimerPage() {
    const [activeTab, setActiveTab] = useState<string>('Pomodoro')
    const [shortBreakTime, setShortBreakTime] = useState<number>(5)
    const [longBreakTime, setLongBreakTime] = useState<number>(10)
    const [workTime, setWorkTime] = useState<number>(20)
    const [minutes, setMinutes] = useState<number>(workTime)
    const [seconds, setSeconds] = useState<number>()
    const [activeList, setActiveList] = useState<string>()
    const pomodoroTabs = [{ label: 'Pomodoro', value: 20 }, { label: 'Short Break', value: 5 }, { label: 'Long Break', value: 10 }]
    const lists :string[] = [
        'Profile',
        'Customize',
        'Add task',
        'Finished tasks'
    ]
    //start timer 
    function start() {
        // console.log('in start fun');

        let _seconds = 59
        let minutes: number = activeTab === 'Pomodoro' ? workTime - 1 : activeTab === 'Short Break' ? shortBreakTime - 1 : longBreakTime - 1
        const breakMinutes: number = shortBreakTime - 1
        let breakCount = 0
        const timerFunction = () => {
            // console.log('in countdown fun');
            _seconds = _seconds - 1
            if (_seconds === 0) {
                minutes = minutes - 1
                if (minutes === -1) {
                    if (breakCount % 2 === 0) {
                        minutes = breakMinutes
                        breakCount++
                    } else {
                        minutes = workTime
                        breakCount++
                    }
                }
                _seconds = 59
            }
            // console.log('minutes', minutes);
            // console.log('_seconds', _seconds);
            setMinutes(minutes)
            setSeconds(_seconds)
        }


        setInterval(timerFunction, 1000)


    }
    // console.log(activeTab);
    // useEffect(() => {

    // }, [activeTab])

    return <div className={styles.parent}>
        <div>

            <ul className={styles.listStyle}>
                {lists.map((list, i) => (

                     <li key={i} className={list == activeList ? styles.activeList : undefined} onClick={() => setActiveList(list)}>{list}</li>
                ))}

            </ul>
        </div>
        <div className={styles.div}>
            <div className={styles.pomodoroBtns}>

                <div className={styles.tabs}>
                    {pomodoroTabs.map((tab, i) => (
                        <div key={i} className={activeTab === tab.label ? styles.active : undefined} onClick={() => {
                            setActiveTab(tab.label)
                            setMinutes(tab.value)
                        }}>{tab.label}</div>
                    ))}

                </div>
            </div>
            {activeTab === 'Pomodoro' ? (
                <WorkTime seconds={seconds} workTime={minutes} />
            ) : activeTab === 'Short Break' ? (
                <ShortBreakTime seconds={seconds} shortBreakTime={minutes} />
            ) : activeTab === 'Long Break' ? (
                <LongBreakTime seconds={seconds} longBreakTime={minutes} />
            ) : <></>}
            <div className={styles.timer}>
                {/* <div style={{ cursor: 'pointer',  display: 'flex', justifyContent: 'center', alignItems: 'center' }} }><PlayArrowIcon fontSize="large" /></div>
                <div style={{  cursor: 'pointer',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseIcon fontSize="large" /></div> */}
                <button className={styles.button} onClick={() => start()}>
                    START
                </button>
            </div>
        </div>
    </div>

}