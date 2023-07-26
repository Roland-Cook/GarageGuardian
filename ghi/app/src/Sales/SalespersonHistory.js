import React, {useEffect, useState } from 'react';

function SalespersonHistory() {
    const [sale, setSales] = useState([]);
    const [selectSalesperson, setSelectSalesperson] = useState("")
    const [salesperson, setSalesTeam] = useState([])
    
    async function loadSales() {
        const url = 'http://localhost:8090/api/sales/'
        
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setSales(data.sale);
            for (let sp of data) {
                if (sp === salesperson && sp.id !== salesperson.id ) {
                    salesperson.push(sp)
                    console.log(salesperson)
                }
            }
            
        }
    }

    // let salesTeam = []

    useEffect(() => {
        loadSales();
    }, []);

    const handleSalesPersonChange = (event) => {
        setSelectSalesperson(event.target.value)
    }

    const handleSelect = async (event) => {
        event.preventDefault();
    }


    
    
    return (
        <>
        <div>
            <h1>Salesperson History</h1>
            <form onSelect={handleSelect} id="select-salesperson-form">
                <div className="mb-3">
                    <select onChange={handleSalesPersonChange} name="sale" id="sale" className="form-select" required>
                        <option value="">All sales</option>
                        {sale.map(sdata=>{
                        return(
                            <option value={sdata.salesperson.id} key={sdata.salesperson.id}>{sdata.salesperson.first_name} {sdata.salesperson.last_name}</option>
                        )
                        })}
                    </select>
                </div>
            </form>
        </div>
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sale.filter(obj => selectSalesperson ? obj.salesperson.id.toString() === selectSalesperson : obj).map(sdata => {
                        return (
                            <tr key={sdata.id}>
                                <td>{ sdata.salesperson.first_name } { sdata.salesperson.last_name }</td>
                                <td>{ sdata.customer.first_name } { sdata.customer.last_name }</td>
                                <td>{ sdata.automobile.vin }</td>
                                <td>{ sdata.price }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}


export default SalespersonHistory
