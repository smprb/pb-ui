import React from "react";
import styles from "./Dashboard.module.sass";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import { Route } from "react-router-dom";
import Profile from "../admin/Profile";
import Dashboard from "./Dashboard";
import Settings from "../Settings";

const Content = () => {
    //api.getSomeStuff({}).then((it) => console.log(it));

    return (
        <div className={styles.dashboardContent}>
            <Breadcrumb />
            <Dashboard />
            <Route path="/profile"><Profile/></Route>
            <Route path="/settings"><Settings/></Route>
            <Footer />
        </div>
    )
};

export default Content;