import React from 'react';
const Table = (props) => {
    const renderHeader = () => {
        let headerElement = [...props.header]
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    return (
        <>
            <h1 id='title'>{props.title}</h1>
            <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {props.body}
                </tbody>
            </table>
        </>
    )
}

export default Table;