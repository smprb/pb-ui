import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Sidebar.module.sass";
import { connect } from "react-redux";

const SidebarElement = (props) => {
    const { name, items, link } = props.element;
    const { opened, openProject } = props;
    const [ isItemShowing, toggleItem ] = useState(false);

    return <div>
        <Link to={ link } style={{ textDecoration: 'none' }}>
            <div className={ styles.sidebarItem } onClick={
                () => {
                    toggleItem(!isItemShowing);
                    if (link === "/close" || link === "/open") openProject(!opened);
                }
            }>
                {name}
            </div>
        </Link>
        {isItemShowing &&
            items.map(it => <div className={ styles.sidebarChildItem } children={ it.name } />)
        }
    </div>
}

const mapStateToProps = state => ({ opened: state.opened });

export default connect(mapStateToProps)(SidebarElement);
