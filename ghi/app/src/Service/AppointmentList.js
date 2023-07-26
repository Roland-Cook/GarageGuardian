import { useEffect, useState } from "react";

function AppointmentList() {

    const [appointments,setAppointments] = useState([])

    async function loadAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/');
        const response2 = await fetch('http://localhost:8100/api/automobiles/')


        if (response.ok) {
          const data = await response.json();
          const data2 = await response2.json();
          console.log(data2)
          setAppointments(data.appointments)
        }
    }

    useEffect(() => {
        loadAppointments();
    }, []);


    const handleFinish = async (appID) => {
      const appUrl = `http://localhost:8080/api/appointments/${appID}/finish`
      console.log(appUrl, appID)
      const fetchConfig = {
          method: "PUT",
      }
      const response = await fetch(appUrl, fetchConfig);
      if (response.ok) {
        console.log("Status changed")
      } else {
          console.error('Failed to update')
      }
  }

  const handleCancel = async (appID) => {
    const appUrl = `http://localhost:8080/api/appointments/${appID}/cancel`
    console.log(appUrl, appID)
    const fetchConfig = {
        method: "PUT",
    }
    const response = await fetch(appUrl, fetchConfig);
    if (response.ok) {
      console.log("Status changed")
    } else {
        console.error('Failed to update')
    }
}

  
    return (
      <>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Vin Number</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Reason</th>
                <th>Technician</th>
                <th>is VIP?</th>
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
                    <td>
                    <button className="btn btn-success" onClick={() => handleFinish(app.id)} >Finish</button>
                    </td>
                    <td><button className="btn btn-danger" onClick={() => handleCancel(app.id)}>Cancel</button></td>
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
  