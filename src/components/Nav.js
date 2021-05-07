import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Nav = (props) => {
    return(

        <div className="nav">
            <Link to ="/">
                <div className="home">Home/Casa</div>
            </Link>
            <Link to ="/restaurants">
                <div className="about">The Restaurants</div>
            </Link>
         </div>
    );
};

export default Nav 