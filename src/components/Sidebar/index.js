import React, {useState} from 'react';
import styles from './Sidebar.module.sass';
import {Link} from "react-router-dom";

const SidebarElement = (props) => {
    const { name, items, link } = props.element;
    const [isItemShowing, toggleItem] = useState(false);

    return <div>
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div className={styles.sidebarItem} onClick={() => toggleItem(!isItemShowing)}>
                {name}
            </div>
        </Link>
        {isItemShowing &&
            items.map(it => <div className={styles.sidebarChildItem} children={it.name} />)
        }
    </div>
}

const SideBar = () => {
    const isProjectOpened = true; // todo here needs global store

    return (
        <div className={styles.sidebar}>
            {isProjectOpened
                ? sidebarMenu.map(it => <SidebarElement element={it}/>)
                : projectMenu.map(it => <SidebarElement element={it}/>)
            }
        </div>
    )
}

const projectMenu = [
    { name: "Создать проект", items: [], link: "/create" },
    { name: "Открыть проект", items: [], link: "/open" }
]

const sidebarMenu = [
    {
        name: "Проект",
        items: [
            {name: "Заголовок"},
            {name: "Список продуктов"},
            {name: "Текстовое описание"},
            {name: "Отображение данных"},
            {name: "Настройка расчета"},
            {name: "Защита проекта"},
        ],
        link: "/project"
    },
    {name: "Компания", items: [ {name: "Заголовок"} ], link: "/company"},
    {name: "Окружение", items: [ {name: "Заголовок"} ], link: "/environment"},
    {name: "Инвестиционный план", items: [ {name: "Заголовок"} ], link: "/invest"},
    {name: "Операционный план", items: [ {name: "Заголовок"} ], link: "/operation"},
    {name: "Финансирование", items: [ {name: "Заголовок"} ], link: "/finance"},
    {name: "Результаты", items: [ {name: "Заголовок"} ], link: "/results"},
    {name: "Анализ проекта", items: [ {name: "Заголовок"} ], link: "/analysis"},
    {name: "Актуализация", items: [ {name: "Заголовок"} ], link: "/actualizing"},
    {name: "Закрыть проект", items: [], link: "/close"}

]

export default SideBar;