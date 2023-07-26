import { useEffect, useState } from "react";

function AppointmentList() {

    const [appointments,setAppointments] = useState([])

    async function loadAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/');
        const respons2 = await fetch('http://localhost:8100/api/automobiles/')
        console.log(respons2)

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setAppointments(data.appointments)
        }
    }

    useEffect(() => {
        loadAppointments();
    }, []);
  
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
  