import { useState, useEffect } from "react";

function CreateSalespersonForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [employeeId, setEmployeeId] = useState("");


    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const spUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(spUrl, fetchConfig);
        if (response.ok) {
            setFirstName('');
            setLastName('');
            setEmployeeId('');
        } else {
            console.error('Error sending form')
        }
    }
    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1 className="card-title">Add a salesperson</h1>
                <form onSubmit={handleSubmit} id="create-salesperson-form">
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleFirstNameChange} value={firstName} placeholder="First name" type="text" id="first_name" name="first_name" className="form-control" />
                    <label htmlFor="first_name">First name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleLastNameChange} value={lastName} placeholder="example Wool" type="text" id="last_name" name="last_name" className="form-control" />
                    <label htmlFor="last_name">Last name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleEmployeeIdChange} value={employeeId} placeholder="ST<Number>" type="text" id="employee_id" name="employee_id" className="form-control" />
                    <label htmlFor="employee_id">Employee ID</label>
                    </div>
                </div>
                <button className="btn btn-primary">Add Salesperson</button>
                </form>
            </div>
        </div>
        </div>
    )

}

export default CreateSalespersonForm;
