import React from 'react';
import styles from './Sidebar.module.sass';
import { connect } from "react-redux";
import SidebarElement from "./SidebarElement";
import { sidebarMenu, projectMenu } from "../../constants/SidebarData";
import {openProject} from "../../actions";

const SideBar = ({ opened, openProject }) => {
    return (
        <div className={styles.sidebar}>
            {opened
                ? sidebarMenu.map(it => <SidebarElement element={it}/>)
                : projectMenu.map(it => <SidebarElement element={it} openProject={openProject}/>)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    opened: state.opened
});

const mapDispatchToProps = dispatch => ({
    openProject: opened => dispatch(openProject(opened))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
