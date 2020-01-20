import React, {useState} from "react";
import Header from "../../containers/Header";
import styles from "./App.module.sass";
import Sidebar from "../../containers/Sidebar";
import Content from "../../containers/Dashboard";

const ApplicationContent = () => {
    const [isSidebarShow, setSidebarShow] = useState(true);

    return <div>
        <Header toggleSidebar={setSidebarShow} isSidebarShowing={isSidebarShow}/>
        <div className={styles.app_content}>
            {isSidebarShow && <Sidebar/>}
            <Content/>
        </div>
    </div>
};

export default ApplicationContent;
