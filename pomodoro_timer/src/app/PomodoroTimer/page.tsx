'use client'
import { useEffect, useState } from "react";
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
    const [workTime, setWorkTime] = useState<number>(2)
    const [minutes, setMinutes] = useState<number>(workTime)
    const [seconds, setSeconds] = useState<number>(0)
    const pomodoroTabs = [{ label: 'Pomodoro', value: 2 }, { label: 'Short Break', value: 5 }, { label: 'Long Break', value: 10 }]

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
        <div className={styles.div}>
            <div className={styles.pomodoroBtns}>
                <div>

                    <CustomTimerButton />
                </div>
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
                <div style={{ borderRadius: '50px', cursor: 'pointer', backgroundColor: '#f4f4f4', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => start()}><PlayArrowIcon fontSize="large" /></div>
                <div style={{ borderRadius: '50px', cursor: 'pointer', backgroundColor: '#f4f4f4', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseIcon fontSize="large" /></div>
            </div>
        </div>
    </div>
}