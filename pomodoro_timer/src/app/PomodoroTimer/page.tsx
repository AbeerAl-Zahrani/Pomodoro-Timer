'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import styles from './_PomodoroTimerPage.module.css'
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
    const [activeList, setActiveList] = useState<string>('')
    const [pomodoroStatus, setPomodoroStatus] = useState<string>('START')
    const pomodoroTabs = [{ label: 'Pomodoro', value: 20 }, { label: 'Short Break', value: 5 }, { label: 'Long Break', value: 10 }]
    const lists: string[] = [
        'Profile',
        'Customize',
        'Add task',
        'Finished tasks'
    ]
    const getInitialMinutes = (activeTab: string): number => {
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

    //start timer 
    const start = useCallback(() => {
        // console.log('in start fun');
        if (pomodoroStatus === 'RUNNING') return; // Prevent duplicate intervals
        console.log('Starting timer...');
        setPomodoroStatus('RUNNING');
        let _seconds = seconds || 59
        console.log(workTime);

        let _minutes: number = minutes || getInitialMinutes(activeTab);


        const timerFunction = () => {
            // console.log('in countdown fun');
            _seconds = _seconds - 1

            if (_seconds === 0) {
                _minutes = _minutes - 1
                if (_minutes === -1) {
                    clearInterval(timerRef.current!);
                    setPomodoroStatus('STOPPED');
                    return;


                }
                _seconds = 59
            }

            setMinutes(_minutes)
            setSeconds(_seconds)
        }

        timerRef.current = setInterval(timerFunction, 1000);



    }, [pomodoroStatus, minutes, seconds, activeTab, workTime]);
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
    }, [activeTab, workTime, longBreakTime, shortBreakTime]);

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
                        }}>{tab.label}</div>
                    ))}

                </div>
            </div>
            {activeTab === 'Pomodoro' ? (
                <WorkTime seconds={seconds} workTime={minutes || workTime} activeList={activeList} setWorkTime={setWorkTime} />
            ) : activeTab === 'Short Break' ? (
                <ShortBreakTime seconds={seconds} shortBreakTime={minutes || shortBreakTime} activeList={activeList} setShortBreakTime={setShortBreakTime} />
            ) : activeTab === 'Long Break' ? (
                <LongBreakTime seconds={seconds} longBreakTime={minutes || longBreakTime} activeList={activeList} setLongBreakTime={setLongBreakTime} />
            ) : <></>}
            {activeList !== 'Customize' ? (
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
            ) : <></>}

        </div>
    </div>

}