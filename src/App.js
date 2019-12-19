import React, { useState } from 'react';
import styles from './App.module.sass';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {

    const [isSidebarShow, setSidebarShow] = useState(true);

    return (
        <Router>
            <div>
                <Header toggleSidebar={setSidebarShow} isSidebarShowing={isSidebarShow}/>
                <div className={styles.app_content}>
                    {isSidebarShow && <Sidebar/>}
                    <Dashboard/>
                </div>
            </div>
        </Router>
    )
}

export default App
