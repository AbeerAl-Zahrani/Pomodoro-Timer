'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CustomTimerButton from "./_components/CustomTimerButton";
import styles from './_PomodoroTimerPage.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import WorkTime from "./_pomodoroTpas/WorkTime";
import ShortBreakTime from "./_pomodoroTpas/ShortBreakTime";
import LongBreakTime from "./_pomodoroTpas/LongBreakTime";
export default function PomodoroTimerPage() {
    const [activeTab, setActiveTab] = useState<string>('Pomodoro')
    const timerRef = useRef<NodeJS.Timeout | null>(null); // To store the interval ID
    const [shortBreakTime, setShortBreakTime] = useState<number>(5)
    const [longBreakTime, setLongBreakTime] = useState<number>(10)
    const [workTime, setWorkTime] = useState<number>(20)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)
    const [activeList, setActiveList] = useState<string>()
    const [pomodoroStatus, setPomodoroStatus] = useState<string>('START')
    const pomodoroTabs = [{ label: 'Pomodoro', value: 20 }, { label: 'Short Break', value: 5 }, { label: 'Long Break', value: 10 }]
    const lists: string[] = [
        'Profile',
        'Customize',
        'Add task',
        'Finished tasks'
    ]
    const getInitialMinutes = (activeTab: string, workTime: number, shortBreakTime: number, longBreakTime: number): number => {
        switch (activeTab) {
            case 'Pomodoro':
                return workTime - 1;
            case 'Short Break':
                return shortBreakTime - 1;
            case 'Long Break':
                return longBreakTime - 1;
            default:
                return workTime - 1; // Default to work time
        }
    };
    console.log(minutes);

    //start timer 
    const start = useCallback(() => {
        // console.log('in start fun');
        if (pomodoroStatus === 'RUNNING') return; // Prevent duplicate intervals
        console.log('Starting timer...');
        setPomodoroStatus('RUNNING');
        let _seconds = seconds || 59
        console.log(minutes);

        let _minutes: number = minutes || getInitialMinutes(activeTab, workTime, shortBreakTime, longBreakTime);
        // const breakMinutes: number = shortBreakTime - 1
        // let breakCount = 0
        console.log(_minutes);

        const timerFunction = () => {
            // console.log('in countdown fun');
            _seconds = _seconds - 1

            if (_seconds === 0) {
                _minutes = _minutes - 1
                if (_minutes === -1) {
                    // if (breakCount % 2 === 0) {
                    //     _minutes = breakMinutes
                    //     breakCount++
                    // } else {
                    _minutes = 0
                    // breakCount++
                    // }
                }
                _seconds = 59
            }
            // console.log('minutes', minutes);
            // console.log('_seconds', _seconds);
            setMinutes(_minutes)
            setSeconds(_seconds)
        }

        timerRef.current = setInterval(timerFunction, 1000);



    }, [pomodoroStatus, minutes, seconds, activeTab, workTime, shortBreakTime, longBreakTime]);
    // Pause the timer
    const pause = useCallback(() => {
        console.log('Pausing timer...');
        setPomodoroStatus('PAUSED');
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    // Stop the timer
    const stop = useCallback(() => {
        console.log('Stopping timer...');
        setPomodoroStatus('STOPPED');
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setMinutes(activeTab === 'Pomodoro' ? workTime : activeTab === 'Short Break' ? shortBreakTime : longBreakTime); // Reset to default work time
        setSeconds(0);
        setPomodoroStatus('START')
    }, [activeTab]);

    // Resume the timer
    const resume = useCallback(() => {
        if (pomodoroStatus !== 'PAUSED') return; // Only resume if the timer is paused
        console.log('Resuming timer...');
        start(); // Simply call start to continue
    }, [pomodoroStatus, start]);
    useEffect(() => {
        setMinutes(0);
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setSeconds(0)
    }, [activeTab])
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
                            // setMinutes(tab.value)
                        }}>{tab.label}</div>
                    ))}

                </div>
            </div>
            {activeTab === 'Pomodoro' ? (
                <WorkTime seconds={seconds} workTime={minutes || workTime} />
            ) : activeTab === 'Short Break' ? (
                <ShortBreakTime seconds={seconds} shortBreakTime={minutes || shortBreakTime} />
            ) : activeTab === 'Long Break' ? (
                <LongBreakTime seconds={seconds} longBreakTime={minutes || longBreakTime} />
            ) : <></>}
            <div className={styles.timer}>
                {pomodoroStatus === 'START' && <button className={styles.button} onClick={start}>Start</button>}
                {pomodoroStatus === 'RUNNING' &&
                    <>
                        <button className={styles.button} onClick={pause}>Pause</button>
                        <button className={styles.button} onClick={stop}>Stop</button>
                    </>

                }
                {pomodoroStatus === 'PAUSED' && <button className={styles.button} onClick={resume}>Resume</button>}


            </div>
        </div>
    </div>

}