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
    const pomodoroTabs = ['Pomodoro', 'Short Break', 'Long Break']
    const seconds: string = '00'




    return <div className={styles.parent}>
        <div className={styles.div}>
            <div className={styles.pomodoroBtns}>
                <div>

                    <CustomTimerButton />
                </div>
                <div className={styles.tabs}>
                    {pomodoroTabs.map((tab, i) => (
                        <div key={i} className={activeTab === tab ? styles.active : undefined} onClick={() => setActiveTab(tab)}>{tab}</div>
                    ))}

                </div>
            </div>
            {activeTab === 'Pomodoro' ? (
                <WorkTime seconds={seconds} />
            ) : activeTab === 'Short Break' ? (
                <ShortBreakTime seconds={seconds} />
            ) : activeTab === 'Long Break' ? (
                <LongBreakTime seconds={seconds} />
            ) : <></>}
            <div className={styles.timer}>
                <div style={{ borderRadius: '50px', cursor: 'pointer', backgroundColor: '#f4f4f4', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlayArrowIcon fontSize="large" /></div>
                <div style={{ borderRadius: '50px', cursor: 'pointer', backgroundColor: '#f4f4f4', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseIcon fontSize="large" /></div>
            </div>
        </div>
    </div>
}