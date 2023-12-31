import React, {useState, useEffect} from "react";


function CreateAutomobileForm (props) {

const [year, setYear] = useState('');
const [vin, setVin] = useState('');
const [color,setColor] = useState('')
const [model, setModel] = useState('')
const [models, setModels] = useState([]);

const handleYearChange = (event) => {
    const value = event.target.value;
    setYear(value);
  }

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  }

  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  }

  const handleModelChange = (event) => {
    const value = event.target.value;
    setModel(value);
  }


const handleSubmit = async (event) => {
    event.preventDefault();
  
    // create an empty JSON object
    const data = {};
    data.year = year
    data.vin = vin
    data.color = color
    data.model_id = model

    const Url = `http://localhost:8100/api/automobiles/`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };


    const response = await fetch(Url, fetchConfig);

    if (response.ok) {

      setModel('');
      setColor('')
      setVin('')
      setYear('')

    }
  }


const fetchData = async () => {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setModels(data.models)
      
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Create an automobile</h1>
        <form onSubmit={handleSubmit} id="create-location-form">
          <div className="form-floating mb-3">
            <input onChange={handleYearChange} value={year}  placeholder="year" name={year} id="name" className="form-control"/>
            <label htmlFor="year">Year</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleVinChange} value={vin} placeholder="vin" name={vin}  className="form-control"/>
            <label htmlFor="manufacturer">Vin</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleColorChange} value={color} placeholder="color" required type="text" name={color} id="color" className="form-control"/>
            <label htmlFor="color">Color</label>
          </div>
          <div className="mb-3">
            <select onChange={handleModelChange} name={model} value={model} className="form-select">
            <option >Choose a Model</option>
                {models.map(model => {
                  return (
                    <option key={model.id} value={model.id}>
                      {model.name}
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

export default CreateAutomobileForm
