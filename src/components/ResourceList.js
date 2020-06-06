import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({resource}) => {
    const [resources, setresources] = useState([])

    const fetchResource = (resource) =>{
        axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(res =>{
            setresources(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchResource(resource)        
    }, [resource])
    
    return (
        <ul>
            {resources.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    )
}

export default ResourceList
