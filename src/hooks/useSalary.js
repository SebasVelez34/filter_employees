const useSalary = () =>{
    const salary = (employee)=>{
        const { contract_type,hourly_salary,monthly_salary } = employee
        if(contract_type === 'hourly'){
            return Math.round(120 * hourly_salary * 12)
            
        }else if(contract_type === 'monthly'){
            return Math.round(monthly_salary * 12)
        }
    }

    return { salary }
}

export default useSalary