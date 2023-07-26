import { useState, useEffect } from "react";

function CreateManufacturer() {
    const[manufacturerName, setManufacturerName] = useState("")

    const handleManufacturerNameChange = (event) => {
        setManufacturerName(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = manufacturerName;
        
        const url = "http://localhost:8090/api/manufacturers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            setManufacturerName('')
        } else {
            console.error('Error sending form')
        }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1 className="card-title">Create a manufacturer</h1>
                <form onSubmit={handleSubmit} id="create-salesperson-form">
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleManufacturerNameChange} value={manufacturerName} placeholder="Manufacturer name" type="text" id="manufacturer_name" name="manufacturer_name" className="form-control" />
                    <label htmlFor="manufacturer_name">Manufacturer Name</label>
                    </div>
                </div>
                <button className="btn btn-primary">Add Manufacturer</button>
                </form>
            </div>
        </div>
        </div>
    )

}

export default CreateManufacturer;