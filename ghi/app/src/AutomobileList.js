function AutomobileList(props) {
    if (props.automobiles === undefined) {
        return null
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Vin #</th>
                </tr>
            </thead>
            <tbody>
                {props.automobiles.map((automobile) =>{
                    console.log(automobile)
                    return (
                        <tr key={automobile.vin}>
                            <td>{ automobile.model.manufacturer.name }</td>
                            <td>{ automobile.model }</td>
                            <td>{ automobile.year }</td>
                            <td>{ automobile.color }</td>
                            <td>{ automobile.vin }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AutomobileList