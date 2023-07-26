import React, {useEffect, useState } from 'react';

function CustomerList() {
    const [customers, setCustomer] = useState([]);
    
    async function loadCustomer() {
        const response = await fetch('http://localhost:8090/api/customers/');

        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customers)
        }
    }

    useEffect(() => {
        loadCustomer();
    }, []);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(person => {
                    return (
                        <tr key={person.id}>
                            <td>{ person.first_name } { person.last_name }</td>
                            <td>{ person.address }</td>
                            <td>{ person.phone_number }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CustomerList