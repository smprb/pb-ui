import React from "react";
import styles from './ProjectTab.module.sass'

const data = [
    {id: 1, active: false},
    {id: 2, active: true}
];

const NavItem = ({ children, className }) => {
    return <div className={ className } onClick={() => {console.log("sad")}}>
        { children }
    </div>
};

const ProjectTab = () => {
    return <div className={styles.container}>
        <div className={styles.container_element__header}>
            {data.map((it, index) => it.active
                ? <NavItem key={index} className={styles.variant_item__active}>Var {it.id}</NavItem>
                : <NavItem key={index} className={styles.variant_item__inactive}>Var {it.id}</NavItem>
            )}
            <NavItem className={styles.variant_item__add} children={"+"}/>
        </div>
        <div className={styles.container_element}>
            <div>Name</div>
            <div>Time</div>
        </div>
        <div className={styles.container_element}>

        </div>
    </div>
};

export default ProjectTab;
