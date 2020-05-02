import React from 'react'
import './style.css'

export default()=>{
    return(
        <div className="container-fluid background-img">
            <div className="navbar-main-div">
                {/* links */}
                <ul className="d-flex">
                    <li>HOME</li>
                    <li>WARRIORS POINT</li>
                    <li>RESEARCH</li>
                    <li>PORTFOLIO MANAGEMENT</li>
                    <li>BRACKET MATCHUPS</li>
                </ul>
            </div>
        </div>
    );
}