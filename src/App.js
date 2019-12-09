import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <div className='app_wrapper'>

            <Header/>
            <Sidebar/>
            <Dashboard/>

        </div>
    )
}

export default App
