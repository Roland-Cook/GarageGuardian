import React, {useEffect, useState } from 'react';

function SalespersonList() {
    const [salesperson, setSalesperson] = useState([]);
    
    async function loadSalesperson() {
        const response = await fetch('http://localhost:8090/api/salespeople/');

        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson)
        }
    }

    useEffect(() => {
        loadSalesperson();
    }, []);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>
                {salesperson.map(sperson => {
                    return (
                        <tr key={sperson.id}>
                            <td>{ sperson.first_name } {sperson.last_name}</td>
                            <td>{ sperson.employee_id }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SalespersonList