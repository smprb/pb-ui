import React from 'react';
import styles from './Sidebar.module.sass';
import { connect } from "react-redux";
import SidebarElement from "./SidebarElement";
import { sidebar } from "../../constants/SidebarData";
import { openProject } from "../../actions";

const SideBar = ({ opened, openProject }) => {
    return (
        <div className={ styles.sidebar }>
            {opened
                ? sidebar.sidebarMenu.map((it, index) =>
                    <SidebarElement key={index} element={ it } openProject={ openProject } />)
                : sidebar.projectMenu.map((it, index) =>
                    <SidebarElement key={index} element={ it } openProject={ openProject } />)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    opened: state.projectReducer
});

const mapDispatchToProps = dispatch => ({
    openProject: opened => dispatch(openProject(opened))
});


export default  connect(mapStateToProps, mapDispatchToProps)(SideBar);
