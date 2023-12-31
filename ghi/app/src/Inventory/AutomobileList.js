import React, {useEffect, useState} from "react";

function AutomobileList() {
    const [autos, setAutos] = useState([])

    async function loadAutos() {
        const response = await fetch('http://localhost:8100/api/automobiles/')

        if (response.ok) {
            const data = await response.json();
            setAutos(data.autos)
        }
    }

    useEffect(() => {
        loadAutos();
    }, []);

    return (
        <>
        <h1>Inventory</h1>
        <table className="table table-dark table-striped table-hover border border-success border-3">
            <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Vin #</th>
                </tr>
            </thead>
            <tbody>
                {autos.filter(obj => !obj.sold).map(auto => {
                    return (
                        <tr key={auto.id}>
                            <td>{ auto.model.manufacturer.name }</td>
                            <td>{ auto.model.name }</td>
                            <td>{ auto.year }</td>
                            <td>{ auto.color }</td>
                            <td>{ auto.vin }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default AutomobileList