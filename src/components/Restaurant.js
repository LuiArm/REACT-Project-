import React from 'react'

const Restaurant = (props) => {

    return(
        <>
            <h1>{props.r.fields.name}</h1>
            <h2>{props.r.fields.location}</h2>
            <p>{props.r.fields.description}</p>
            <p>{props.r.fields.aboutChef}</p>
        </>
    )
}

export default Restaurant 