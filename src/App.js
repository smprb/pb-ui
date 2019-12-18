import React from 'react';
import './App.sass';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Dashboard/>
        </div>
    )
}

export default App
