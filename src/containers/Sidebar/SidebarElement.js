import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Sidebar.module.sass";
import { connect } from "react-redux";

const SidebarElement = (props) => {
    const { name, items, link } = props.element;
    const { opened, openProject } = props;
    const [ isItemShowing, toggleItem ] = useState(false);

    const toggleElement = () => {
        toggleItem(!isItemShowing);
        if (link === "/close" || link === "/open") openProject(!opened);
    };

    return <div>
        <Link to={ link } style={{ textDecoration: 'none' }}>
            <div className={ styles.sidebarItem } onClick={ toggleElement }>
                {name}
            </div>
        </Link>
        {isItemShowing &&
            items.map((it, index) => <div key={index} className={ styles.sidebarChildItem } children={ it.name } />)
        }
    </div>
};

const mapStateToProps = state => ({ opened: state.opened });

export default connect(mapStateToProps)(SidebarElement);
