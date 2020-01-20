import React from "react";
import styles from './ProjectTab.module.sass'
import Table from "../../../components/table";
import {tableContent} from "../../../constants/data";

const data = [
    {id: 1, active: true},
    {id: 2, active: false}
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
                ? <NavItem key={index} className={styles.variant_item__active}>Вариант {it.id}</NavItem>
                : <NavItem key={index} className={styles.variant_item__inactive}>Вариант {it.id}</NavItem>
            )}
            <NavItem className={styles.variant_item__add} children={"+"}/>
        </div>
        <div className={styles.container_element}>
            <div className="form-group">
                <input id="name" placeholder="Enter your name" required="" type="text" className="form-control"/>
            </div>
            <div>
                <label htmlFor="name" className="">Дата начала</label>
                <input id="date-input" name="date-input" placeholder="date" type="date" className="form-control"/>
            </div>
            <div>
                <label htmlFor="name" className="">Длительность</label>
                <input placeholder="1 год" type="text"/>
            </div>
        </div>

        <div className={styles.container_element}>
            <Table tableContent={ tableContent }/>
        </div>
    </div>
};

export default ProjectTab;
