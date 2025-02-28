const useSalary = () =>{
    let formatter = new Intl.NumberFormat('en-US', {
        style   : 'currency',
        currency: 'USD',
    });
    const salary = (employee)=>{
        const { contract_type,hourly_salary,monthly_salary } = employee
        if(contract_type === 'hourly'){
            return formatter.format(Math.round(120 * hourly_salary * 12))
        }else if(contract_type === 'monthly'){
            return formatter.format(Math.round(monthly_salary * 12))
        }
    }

    return { salary }
}

export default useSalary