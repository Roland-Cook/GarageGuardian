import React, {useEffect, useState } from 'react';

function ServiceHistory() {
    const [appointments, setAppointment] = useState([]);
    const [vin, setVin] = useState("")
    // const [vip, setVip] = useState("no")

    
    async function loadAppointments() {
        const url = 'http://localhost:8080/api/appointments/'
        
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setAppointment(data.appointments)
        }
    }

    useEffect(() => {
        loadAppointments();
    }, []);

    console.log(appointments)

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }


    return (
        <>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Vin</span>
        </div>
        <input type="text" onChange={handleVinChange} value={vin} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        <button className="btn btn-primary" type="submit">Search</button>
        </div>

        <div>
            <table className="table table-striped">
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
            {appointments.filter(obj => vin ? obj.vin === vin : obj).map(appdata =>{
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
                    {/* <td className="vip" >{vip}</td> */}
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
