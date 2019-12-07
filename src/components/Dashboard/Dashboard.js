import React from "react";

const dashboardStyle = {
    'flex': '3 0px',
    'order': '2',
    'background-color': 'white',
    'border-bottom': '2px solid rgba(0,0,0,0.15)'

};

const ToDoList = () => {
    return (
        <div>
            ToDoList
        </div>
    )
}

const Dashboard = () => {
    return (
        <div style={dashboardStyle}>
            <ToDoList />
        </div>
    )
}

export default Dashboard;