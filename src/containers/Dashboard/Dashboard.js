import React from "react";
import { Route } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Route path="/project">project</Route>
            <Route path="/company">company</Route>
            <Route path="/environment">environment</Route>
            <Route path="/invest">invest</Route>
            <Route path="/operation">operation</Route>
            <Route path="/finance">finance</Route>
            <Route path="/results">results</Route>
            <Route path="/analysis">analysis</Route>
            <Route path="/actualizing">actualizing</Route>
        </div>
    )
}

export default Dashboard;