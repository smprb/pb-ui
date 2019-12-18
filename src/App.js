import React, { useState } from 'react';
import styles from './App.module.sass';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";

const App = () => {

    const [isSidebarShow, setSidebarShow] = useState(true);

    return (
        <div>
            <Header toggleSidebar={setSidebarShow} isSidebarShowing={isSidebarShow}/>
            <div className={styles.app_content}>
                {isSidebarShow && <Sidebar/>}
                <Dashboard/>
            </div>
        </div>
    )
}

export default App
