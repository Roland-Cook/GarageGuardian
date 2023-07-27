import React, {useEffect, useState } from 'react';

function ServiceHistory() {
    const [appointments, setAppointment] = useState([]);
    const [vin, setVin] = useState("")
    const [automobiles,setAutomobiles] = useState([])

    
    async function loadAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/')
        const response2 = await fetch('http://localhost:8100/api/automobiles/')
        
        if (response.ok) {
            const data = await response.json();
            const data2 = await response2.json()

            setAppointment(data.appointments)
            setAutomobiles(data2.autos)
        }
    }

    useEffect(() => {
        loadAppointments();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setVin(value)
    }

    const inventory = automobiles.map(car => car.vin)

    return (
        <>
        <form onSubmit={handleSubmit} >
        <div className="input-group mb-3">
        <div className="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Vin #</span>
        </div>
        <input type="text" class="form-control" onChange={handleSubmit}aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        <button className="btn btn-primary" onClick={handleSubmit} >Show All</button>
        </div>
        </form>

        <div>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                    <th>Vin Number</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Reason</th>
                    <th>Technician</th>
                    <th>Status</th>
                    <th>is VIP?</th>
                    </tr>
                </thead>
                <tbody>
            {appointments.filter(filter => vin ? filter.vin === vin : filter).map(appdata =>{
              return (
                <>
                  <tr>
                    <td>{appdata.vin}</td>
                    <td>{appdata.customer}</td>
                    <td>{appdata.date}</td>
                    <td>{appdata.time}</td>
                    <td>{appdata.reason}</td>
                    <td>{appdata.technician}</td>
                    <td>{appdata.status}</td>
                    <td className="vip">{inventory.includes(appdata.vin) ?  "yes" : "no"}</td>                  
                    </tr>
                </>
                );
    })}
            </tbody>
            </table>
        </div>
        </>
    )
}


export default ServiceHistory
