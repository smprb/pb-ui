import React from "react";

const dashboardStyle = {
    'flex': '3 0px',
    'order': '2'
};

const item = {
    'background-color': 'white',
    'margin-bottom': '10px',
    'border-bottom': '2px solid rgba(0,0,0,0.15)'
}

const ToDoList = () => {
    return (
        <div style={item}>
            ToDoList
        </div>
    )
}

const Suggestion = () => {
    return(
        <div style={item}>
            Suggestion
        </div>
    )
}

const Plans = () => {
    return(
        <div style={item}>
            Plans
        </div>
    )
}

const Posts = () => {
    return(
        <div style={item}>
            Posts
        </div>
    )
}

const Dashboard = () => {
    return (
        <div style={dashboardStyle}>
            <ToDoList />
            <Suggestion />
            <Plans />
            <Posts />
        </div>
    )
}

export default Dashboard;