import React from 'react';
import { Link } from "react-router-dom";
import Restaurants from './Restaurants';

const Main = (props) => {

    const restaurants = [
        {name: "Pujol", location: "Mexico City, Mexico"},
        {name: "Rosetta", location: "Mexico City, Mexico"},
        {name: "Quintonil", location: "Mexico City, Mexico"},
        {name: "Pangea", location: "Monterrey, Mexico"},
        {name: "Alcalde", location: "Guadalajara, Mexico"},
        {name: "Sud 777", location: "Mexico City, Mexico"},
        {name: "Le Chique", location: "Cancun, Mexico"},
        {name: "Nicos", location: "Mexico City, Mexico"},
        {name: "Maximo Bistro", location: "Mexico City, Mexico"},
        {name: "Contramar", location: "Mexico City, Mexico"},
        
    ];

    return <div className="restaurants">
        {restaurants.map((restaurant) =>{
            const {name, location} = restaurant

            return (<Link to={`/restaurants/${name}`}>
             <div>
                <p>{name}</p>
                <p>{location}</p>
             </div>   
            </Link>)
        })
        }
    </div>
}

export default Main