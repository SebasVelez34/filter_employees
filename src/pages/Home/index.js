import React, { useState } from 'react';
import Table from '../../components/Table';
import './style.scss';
import data from '../../data.json';
import useSalary from '../../hooks/useSalary';

function Home() {
    const { salary }  = useSalary()
    const [ search, setSearch ] = useState('')
    const [ dataEmployee, setDataEmployee ] = useState(data)
    const header = ['ID','Name','Contract type','Hourly salary','Monthly salary','Anual Salary']
    const body  = ()=>{
        return dataEmployee.map(employee =>{
            const pay = salary(employee)
            return (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.employee_name}</td>
                    <td>{employee.contract_type}</td>
                    <td>${employee.hourly_salary}</td>
                    <td>${employee.monthly_salary}</td>
                    <td>{pay}</td>
                </tr>
            )
        })
    }


    const handleSubmit = (event)=>{
        event.preventDefault()
        if(search === '')
            setDataEmployee(data)
        else
            setDataEmployee(
                data.filter(employee => employee.employee_name.includes(search) || employee.id === parseInt(search))
            )
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="wrap">
                    <div className="search">
                        <input type="text"
                               className="searchTerm"
                               placeholder="Filter employees"
                               onChange={ (e)=>{ setSearch(e.target.value) }}
                        />
                        <button type="submit" className="searchButton">
                            🔍
                        </button>
                    </div>
                </div>
            </form>
            <Table header={header}
                body  ={body()}
                title ={'Employees table'}
                handleSalary={useSalary}
            />
        </>
    );
}

export default Home;