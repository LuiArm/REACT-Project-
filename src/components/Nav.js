import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <div className="nav">
            <Link to ="/">
                <div>Home</div>
            </Link>
            <Link to ="/restaurants">
                <div>About the Restaurants</div>
            </Link>
        </div>
    );
};

export default Nav 