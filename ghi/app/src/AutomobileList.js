function AutomobileList(props) {
    if (props.autos === undefined) {
        return null
    }

    console.log(props, props.autos)

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
                {props.autos.map(auto => {
                    return (
                        <tr>
                            <td>{ auto.model.manufacturer.name }</td>
                            <td>{ auto.model.name }</td>
                            <td>{ auto.year }</td>
                            <td>{ auto.color }</td>
                            <td>{ auto.vin }</td>
                        </tr>
                    )
                })}
                    
            </tbody>
        </table>
    )
}

export default AutomobileList