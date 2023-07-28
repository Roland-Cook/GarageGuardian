import { useEffect, useState } from "react";

function AppointmentList() {

    const [appointments,setAppointments] = useState([])
    const [automobiles,setAutomobiles] = useState([])


    async function loadAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/');
        const response2 = await fetch('http://localhost:8100/api/automobiles/')


        if (response.ok) {
          const data = await response.json();
          const data2 = await response2.json();
          setAppointments(data.appointments)
          setAutomobiles(data2.autos)
    }
  }


    useEffect(() => {
        loadAppointments();
    }, []);

    const inventory = automobiles.map(car => car.vin)


    const handleFinish = async (appID) => {
      const appUrl = `http://localhost:8080/api/appointments/${appID}/finish`

      const fetchConfig = {
          method: "PUT",
      }
      const response = await fetch(appUrl, fetchConfig);
      if (response.ok) {
      } 
      else {
      }
  }

  const handleCancel = async (appID) => {
    const appUrl = `http://localhost:8080/api/appointments/${appID}/cancel`
    const fetchConfig = {
        method: "PUT",
    }
    const response = await fetch(appUrl, fetchConfig);
    if (response.ok) {

    } else {

    }
}


    return (
      <>
          <h1>Appointments</h1>
          <table className='table table-dark table-striped table-hover border border-success border-3'>
            <thead>
              <tr>
                <th>Vin Number</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Reason</th>
                <th>Technician</th>
                <th>is VIP?</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {appointments.map(app  => {
              return (
                <>
                  <tr>
                    <td>{app.vin}</td>
                    <td>{app.customer}</td>
                    <td>{app.date}</td>
                    <td>{app.time}</td>
                    <td>{app.reason}</td>
                    <td>{app.technician}</td>
                    <td className="vip">{inventory.includes(app.vin) ?  "yes" : "no"}</td>
                    <div>
                    <td>
                    <button className="btn btn-success" onClick={() => handleFinish(app.id)} >Finish</button>
                    </td>
                    <td><button className="btn btn-danger" onClick={() => handleCancel(app.id)}>Cancel</button>
                    </td>
                    </div>
                  </tr>
                  
  
                </>
                );
    })}
            </tbody>
          </table>
          </>
    )
    }
    
    export default AppointmentList
  