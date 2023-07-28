import React, {useEffect, useState } from 'react';

function CustomerList() {
    const [customer, setCustomer] = useState([]);
    
    async function loadCustomer() {
        const response = await fetch('http://localhost:8090/api/customers/');

        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customer)
        }
    }

    useEffect(() => {
        loadCustomer();
    }, []);

    return (
        <>
        <h1>Customers</h1>
        <table className="table table-dark table-striped table-hover border border-success border-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {customer.map(person => {
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
        </>
    )
}

export default CustomerList