import { useEffect, useState } from "react";

function TechnicianList() {

    const [technician,setTechnician] = useState([])

    async function loadTechnicians() {
        const response = await fetch('http://localhost:8080/api/technicians/');

        if (response.ok) {
          const data = await response.json();
          setTechnician(data.technician)
        }
    }

    useEffect(() => {
        loadTechnicians();
    }, []);
  
    return (
      <>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
            {technician.map(tech  => {
              return (
                <>
                  <tr>
                    <td>{tech.employee_id}</td>
                    <td>{tech.first_name}</td>
                    <td>{tech.last_name}</td>
                  </tr>
  
                </>
                );
    })}
            </tbody>
          </table>
          </>
    )
    }
    
    export default TechnicianList
  