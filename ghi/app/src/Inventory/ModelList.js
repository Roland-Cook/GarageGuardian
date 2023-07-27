import React, {useEffect, useState} from "react";

function ModelList() {
    const [models, setModels] = useState([])

    async function loadModels() {
        const response = await fetch('http://localhost:8100/api/models/')

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
        }
    }

    useEffect(() => {
        loadModels();
    }, []);

    return (
        <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {models.map(model => {
                    return (
                        <tr key={model.id}>
                            <td>{ model.name }</td>
                            <td>{ model.manufacturer.name }</td>
                            <td><img className="list-image" alt="Unavailable" src={ model.picture_url }/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ModelList