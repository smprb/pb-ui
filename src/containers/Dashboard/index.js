import React from "react";
import styles from "./Dashboard.module.sass";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import { Route } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className={styles.dashboardContent}>
            Dashboard
            <Breadcrumb/>
            <Route path="/project">project</Route>
            <Route path="/company">company</Route>
            <Route path="/environment">environment</Route>
            <Route path="/invest">invest</Route>
            <Route path="/operation">operation</Route>
            <Route path="/finance">finance</Route>
            <Route path="/results">results</Route>
            <Route path="/analysis">analysis</Route>
            <Route path="/actualizing">actualizing</Route>
            <Footer/>
        </div>
    )
}

export default Dashboard;