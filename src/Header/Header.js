import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const ulStyle = {padding:"0", display: "flex",listStyle:"none" }
    const liStyle = {padding:"5px" ,flex: "1 ",justifyContent:"fexStart",border:"1px solid black"  }
    return (
        <nav>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link to="/">Home</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/signin">Sign In</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;