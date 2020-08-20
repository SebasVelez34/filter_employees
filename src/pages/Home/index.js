import React from 'react';
import Table from '../../components/Table';
import './style.scss';
import data from '../../data.json';
import useSalary from '../../hooks/useSalary';

const Home = ()=>{
    const { salary }  = useSalary()
    const header = data ? [...Object.keys(data[0]),'Anual Salary'] : []
    const body   = data.map(employee =>{
        const pay = salary(employee)
        return (
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.contract_type}</td>
                <td>{employee.hourly_salary}</td>
                <td>{employee.monthly_salary}</td>
                <td>{pay}</td>
            </tr>
        )   
        
    });
    
    return (
        <Table header={header}
               body  ={body}
               title ={'Employees table'}
               handleSalary={useSalary}
        />
    );
}

export default Home;