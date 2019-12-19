import React, {useState} from 'react';
import styles from './Sidebar.module.sass';

const sidebarMenu = [
    {name: "Проект",
        items: [
            {name: "Заголовок", link: ""},
            {name: "Список продуктов", link: ""},
            {name: "Текстовое описание", link: ""},
            {name: "Отображение данных", link: ""},
            {name: "Настройка расчета", link: ""},
            {name: "Защита проекта", link: ""},
        ]
    },
    {name: "Компания", items: [ {name: "Заголовок", link: ""} ]},
    {name: "Окружение", items: [ {name: "Заголовок", link: ""} ]},
    {name: "Инвестиционный план", items: [ {name: "Заголовок", link: ""} ]},
    {name: "Операционный план", items: [ {name: "Заголовок", link: ""} ]},
    {name: "Финансирование", items: [ {name: "Заголовок", link: ""} ]},
    {name: "Результаты", items: [ {name: "Заголовок", link: ""} ]},
    {name: "Анализ проекта", items: [ {name: "Заголовок", link: ""} ]},
    {name: "Актуализация", items: [ {name: "Заголовок", link: ""} ]}
]

const Item = (props) => {
    const { name, items } = props.item;
    const [isItemShowing, toggleItem] = useState(false);

    return <div>
        <div className={styles.sidebarItem} onClick={() => toggleItem(!isItemShowing)}>
            {name}
        </div>
        {isItemShowing &&
            items.map(it => <div className={styles.sidebarChildItem} children={it.name}/>)
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

export default SideBar;