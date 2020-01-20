import React, {useState} from "react";
import styles from "./Table.module.sass"

const TableHeader = ({ columns }) => {
    return <thead className={styles.table_header}>
        <tr>
            {columns.map((it, index) => <th key={ index }>{ it }</th>)}
        </tr>
    </thead>
};

const TableContent = ({ rows }) => {
    return (rows.map((it, index) =>
        <tr key={index}>
            {Object.values(it).map(column => <td>{column}</td>)}
        </tr>)
    )
};

const Table = ({ tableContent }) => {
    const [content, append] = useState(tableContent.rows);
    const columns = tableContent.columns;

    const appendRow = (item) => {
        let content = tableContent.rows;
        let row = {...tableContent.columns};
        Object.keys(row).map((key) => key === "name" ? row[key] = item : row[key] = "" );
        content.push(row);
        append(content);
    };

    return <div>
        <div className={styles.container_header}>
            { tableContent.header }
        </div>
        <table className={styles.table_content}>
            <TableHeader columns={Object.values(columns)}/>
            <tbody>
                <TableContent rows={ content }/>
                <td><input type="text" value="Добавить продукт" onChange={(event)=>appendRow(event.target.value)}/></td>
            </tbody>
        </table>
    </div>

};

export default Table;