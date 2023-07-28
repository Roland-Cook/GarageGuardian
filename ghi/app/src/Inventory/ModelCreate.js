import { useState, useEffect } from "react";

function CreateModelForm(){
    const [modelName, setModelName] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [manufacturer, setManufacturer] = useState("")
    const [manufacturers, setManufacturers] = useState([])

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)
        } else {
            console.error('Error retrieving location data')
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModelName(value)
    }

    const handlePictureChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value)
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = modelName;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer

        const modelsUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(modelsUrl, fetchConfig);
        if (response.ok) {
            setModelName('');
            setPictureUrl('');
            setManufacturer('');

        } else {
            console.error('Error sending form')
        }
    }


    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1 className="card-title">Create a Model</h1>
                <form onSubmit={handleSubmit} id="create-hat-form">

                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleModelChange} value={modelName} placeholder="Model Name" type="text"  name="model_name" className="form-control" />
                    <label htmlFor="color">Model Name</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handlePictureChange} value={pictureUrl} placeholder="Color" type="url" id="picture_url" name="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture URL</label>
                    </div>
                </div>
                <div className="mb-3">
                    <select onChange={handleManufacturerChange} value={manufacturer} name="manufacturer_id" className="form-select" required>
                        <option value="">What Manufacturer?</option>
                        {manufacturers.map(manu=>{
                        return(
                            <option value={manu.id} key={manu.id}>{manu.name}</option>
                        )
                        })
                        }
                    </select>
                </div>
                <button className="btn btn-primary">Add Model</button>
                </form>
            </div>
        </div>
        </div>
    )

}

export default CreateModelForm;
