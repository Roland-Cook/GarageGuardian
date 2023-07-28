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
          <h1>Technicians</h1>
          <table className='table table-dark table-striped table-hover border border-success border-3'>
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
                  <tr key={tech.id}>
                    <td key={tech.employee_id}>{tech.employee_id}</td>
                    <td key={tech.first_name}>{tech.first_name}</td>
                    <td key={tech.last_name} >{tech.last_name}</td>
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
  