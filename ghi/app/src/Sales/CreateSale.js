import { useState, useEffect } from "react";


function CreateSalesForm(){
    const [autos, setAutomobiles] = useState([]);
    const [automobile, setAutomobile] = useState("");
    const [salespersons, setSalespersons] = useState([]);
    const [salespeople, setSalesperson] = useState("");
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState("");
    const [price, setPrice] = useState("");

    


    const fetchAutoData = async () => {
        const aUrl = 'http://localhost:8100/api/automobiles/'
        const response = await fetch(aUrl);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        } else {
            console.error('Error retrieving location data')
        }
    }

    const fetchSalespersonData = async () => {
        const sUrl = 'http://localhost:8090/api/salespeople/'
        const response = await fetch(sUrl);
        if (response.ok) {
            const data = await response.json();
            setSalespersons(data.salespeople)
        } else {
            console.error('Error retrieving location data')
        }
    }

    const fetchCustomerData = async () => {
        const cUrl = 'http://localhost:8090/api/customers/'
        const response = await fetch(cUrl);
        if (response.ok) {
            const data = await response.json()
            setCustomers(data.customers);
        } else {
            console.error('Error retrieving location data')
        }
    }

    useEffect(() => {
        fetchAutoData();
        fetchSalespersonData();
        fetchCustomerData();
    }, []);

    const handleAutomobileChange = (event) => {
        setAutomobile(event.target.value)
    }

    const handleSalesPersonChange = (event) => {
        setSalesperson(event.target.value)
    }

    const handleCustomerChange = (event) => {
        setCustomer(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.automobile = automobile;
        data.salespeople = salespeople;
        data.customer = customer;
        data.price = price;
        
        const data2 = {}
        data2.sold = true
        const saleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        console.log(automobile)
        const iUrl = `http://localhost:8100/api/automobiles/${automobile}/`
        const fetchConfig2 = {
            method: "put",
            body: JSON.stringify(data2),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(saleUrl, fetchConfig);
        const response2 = await fetch(iUrl, fetchConfig2)
        if (response.ok && response2.ok) {
            setAutomobile('');
            setSalesperson('');
            setCustomer('');
            setPrice('');

            
        } else {
            console.error('Error sending form')
        }
    }


    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1 className="card-title">Add a sale</h1>
                <form onSubmit={handleSubmit} id="create-hat-form">
                <div className="mb-3">
                    <select onChange={handleAutomobileChange} value={automobile} name="automobiles" id="automobiles" className="form-select" required>
                        <option value="">Automobile VIN</option>
                        {autos.filter(obj => obj.sold === false).map(auto=>{
                        return(
                            <option value={auto.vin} key={auto.vin}>
                                {auto.vin}
                            </option>
                        )
                        })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={handleSalesPersonChange} value={salespeople} name="salespeople" id="salespeople" className="form-select" required>
                        <option value="">Salesperson</option>
                        {salespersons.map(sperson=>{
                        return(
                            <option value={sperson.id} key={sperson.id}>{sperson.first_name} {sperson.last_name}</option>
                        )
                        })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <select onChange={handleCustomerChange} value={customer} name="customers" id="customers" className="form-select" required>
                        <option value="">Customer</option>
                        {customers.map(cperson=>{
                        return(
                            <option value={cperson.id} key={cperson.id}>{cperson.first_name} { cperson.last_name}</option>
                        )
                        })
                        }
                    </select>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handlePriceChange} value={price} placeholder="Price" type="text" id="price" name="price" className="form-control" />
                    <label htmlFor="price">Price</label>
                    </div>
                </div>
                <button className="btn btn-primary">Create Sale</button>
                </form>
            </div>
        </div>
        </div>
    )

}

export default CreateSalesForm;