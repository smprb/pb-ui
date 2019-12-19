import React, {useState} from 'react';
import styles from './Sidebar.module.sass';
import {Link} from "react-router-dom";

const Item = (props) => {
    const { name, items, link } = props.item;
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
    return (
        <div className={styles.sidebar}>
            { sidebarMenu.map(it => <Item item={it}/>) }
        </div>
    )
}

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
    {name: "Актуализация", items: [ {name: "Заголовок"} ], link: "/actualizing"}
]

export default SideBar;