import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from "./components/Dashboard/Dashboard";

const App = (props) => {

    const state = props.store.getState();

    return (
        <div className='app_wrapper'>

            <Header state={state}/>
            <Sidebar state={state}/>
            <Dashboard state={state}/>

        </div>


    )
}

export default App;
