import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Sidebar.module.sass";

const SidebarElement = (props) => {
    const { name, items, link } = props.element;
    const openProject = props.openProject;
    const [isItemShowing, toggleItem] = useState(false);
    let click = () => toggleItem(!isItemShowing);

    if (link === "open" || link === "close") {
        click = () => openProject;
    }

    return <div>
        <Link to={ link } style={{ textDecoration: 'none' }}>
            <div className={styles.sidebarItem} onClick={ click }>
                {name}
            </div>
        </Link>
        {isItemShowing &&
            items.map(it => <div className={styles.sidebarChildItem} children={it.name} />)
        }
    </div>
}

export default SidebarElement;
