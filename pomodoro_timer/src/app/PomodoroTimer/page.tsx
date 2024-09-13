'use client'
import { useState } from "react";
import CustomTimerButton from "./_components/CustomTimerButton";
import styles from './_PomodoroTimerPage.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
export default function PomodoroTimerPage() {
    const [activeTab, setActiveTab] = useState<string>()
    const pomodoroTabs = ['Pomodoro', 'Short Break', 'Long Break']
    const timer: string = '24:00'
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ fontSize: '5rem' }}>{timer}</h3>
            </div>
            <div className={styles.timer}>
                <div style={{ borderRadius: '50px', backgroundColor: '#f4f4f4', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PlayArrowIcon fontSize="large" /></div>
                <div style={{ borderRadius: '50px', backgroundColor: '#f4f4f4', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PauseIcon fontSize="large" /></div>
            </div>
        </div>
    </div>
}