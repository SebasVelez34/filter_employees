import React from 'react';
const Table = (props) => {
    const [employees, setEmployees] = React.useState(props.data)

    const renderHeader = () => {
        let headerElement = [...props.header]
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({id,employee_name,contract_type,hourly_salary,monthly_salary}) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{employee_name}</td>
                    <td>{contract_type}</td>
                    <td>${hourly_salary}</td>
                    <td>${monthly_salary}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>React Table</h1>
            <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}

export default Table;