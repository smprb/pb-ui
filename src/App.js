import React from 'react';
import './App.sass';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";

const contentStyle = {
    display: "flex",
    flexDirection: "column"
}

const App = () => {
    return (
        <div>
            <Header/>
            <div className={contentStyle}>
                <Sidebar/>
                <Dashboard/>
            </div>
        </div>
    )
}

export default App
