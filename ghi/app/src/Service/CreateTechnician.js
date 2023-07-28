import { useState} from "react";

function CreateTechnicianForm(){
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [employee_id, setEmployee_id] = useState("");



    const handleFirstNameChange = (event) => {
        setFirst_name(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLast_Name(event.target.value)
    }

    const handleEmployeeChange = (event) => {
        setEmployee_id(event.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.first_name = first_name;
        data.last_name = last_name
        data.employee_id = employee_id

        const TechUrl = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(TechUrl, fetchConfig);

        if (response.ok) {
            setFirst_name('');
            setLast_Name('');
            setEmployee_id('');
        } else {
        }
    }


    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1 className="card-title">Add Technician</h1>
                <form onSubmit={handleSubmit} id="create-technician-form">
                    
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleFirstNameChange} value={first_name} placeholder="First Name" type="text" id="first_name" name="first_name" className="form-control" />
                    <label htmlFor="hat_style">First Name</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleLastNameChange} value={last_name} placeholder="Last Name" type="text" id="last_name" name="last_name" className="form-control" />
                    <label htmlFor="fabric">Last Name</label>
                    </div>
                </div>

                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleEmployeeChange} value={employee_id} placeholder="Employee ID" type="text" id="employee_id" name="employee_id" className="form-control" />
                    <label htmlFor="color">Employee ID</label>
                    </div>
                </div>
                <button className="btn btn-primary">Add Technician</button>
                </form>
                
            </div>
        </div>
        </div>
    )
}

export default CreateTechnicianForm;
