import React from 'react';
import styles from './App.module.sass';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <div>
            <Header/>
            <div className={styles.app_content}>
                <Sidebar/>
                <Dashboard/>
            </div>
        </div>
    )
}

export default App
