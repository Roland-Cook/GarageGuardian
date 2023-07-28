import React, {useState, useEffect} from "react";


function CreateAppointmentForm () {

const [automobileVin, setAutomobileVin] = useState('');
const [customer, setCustomer] = useState('');
const [date,setDate] = useState('')
const [time,setTime] = useState('')
const [technician,setTechnician] = useState('')
const [reason, setReason] = useState('');
const [technicians,setTechnicians] = useState([]);



const handleVinChange = (event) => {
    const value = event.target.value;
    setAutomobileVin(value);
  }

  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  }

  const handleDateTimeChange = (event) => {
    const value = event.target.value;
    setDate(value);
  }
  const handleTimeChange = (event) => {
    const value = event.target.value;
    setTime(value);
  }

  const handleTechnicianChange = (event) => {
    const value = event.target.value;
    setTechnician(value);
  }

  const handleReasonChange = (event) => {
    const value = event.target.value;
    setReason(value);
  }


const handleSubmit = async (event) => {
    event.preventDefault();
  
    // create an empty JSON object
    const data = {};
    data.vin = automobileVin;
    data.customer = customer
    data.date = date
    data.time = time
    data.technician = technician
    data.reason = reason

    const Url = `http://localhost:8080/api/appointments/`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(Url, fetchConfig);

    if (response.ok) {
      setAutomobileVin('');
      setReason('')
      setDate('')
      setTime('')
      setTechnician('')
      setCustomer('')
    }
  }


const fetchData = async () => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technician)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Create an appointment</h1>
        <form onSubmit={handleSubmit} id="create-location-form">
          <div className="form-floating mb-3">
            <input onChange={handleVinChange} value={automobileVin} placeholder="Vin Number"  name={automobileVin} id="automobileVin" className="form-control"/>
            <label htmlFor="name">Automobile Vin</label>
          </div>
          
          <div className="form-floating mb-3">
            <input onChange={handleCustomerChange} value={customer} placeholder="customer" name={customer} id="customer" className="form-control"/>
            <label htmlFor="manufacturer">Customer</label>
          </div>

          <div className="form-floating mb-3">
            <input type="date" onChange={handleDateTimeChange} value={date} placeholder="date" name={date} id="datetime" className="form-control"/>
            <label htmlFor="date">Date</label>
          </div>

          <div className="form-floating mb-3">
            <input type="time" onChange={handleTimeChange} value={time} placeholder="date" name={time} id="time" className="form-control"/>
            <label htmlFor="time">Time</label>
          </div>

          <div className="form-floating mb-3">
            <input onChange={handleReasonChange} value={reason} placeholder="Reason" required name={reason} id="reason" className="form-control"/>
            <label htmlFor="picture_url">Reason </label>
          </div>

          <div className="mb-3">
            <select onChange={handleTechnicianChange} name={technician} value={technician} id="technician" className="form-select">
            <option >Choose a Technician</option>
                {technicians.map(tech => {
                  return (
                    <option key={tech.first_name} value={tech.first_name}>
                      {tech.first_name}
                    </option>
                  );
                })}
                </select>
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
);
};

export default CreateAppointmentForm
