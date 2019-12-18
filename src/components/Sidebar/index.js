import React from 'react';
import styles from './Sidebar.module.sass';

const Item = (props) => {
    return <div className={styles.sidebarItem}>
        {props.name}
    </div>
}

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <Item name="Проект"/>
            <Item name="Компания"/>
            <Item name="Окружение"/>
            <Item name="Инвестиционный план"/>
            <Item name="Операционный план"/>
            <Item name="Финансирование"/>
            <Item name="Результаты"/>
            <Item name="Анализ проекта"/>
            <Item name="Актуализация"/>
        </div>
    )
}

export default SideBar;