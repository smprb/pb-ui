import React from "react";
import styles from "./Dashboard.module.sass";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

const Dashboard = () => {
    return (
        <div className={styles.dashboardContent}>
            Dashboard
            <Breadcrumb/>
            <Footer/>
        </div>
    )
}

export default Dashboard;