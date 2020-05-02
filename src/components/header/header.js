import React from 'react'
import Logo from '../../assests/images/logo.png'
import './style.css'

export default () => {
    return (
        <div className="container-fluid">
            <div className="header-main-div d-flex justify-content-between">
                {/* logo */}
                <div>
                    <img src={Logo} alt="" width="400px" height="90px" />
                </div>
                <div className="d-flex justify-content-around info-and-input-main-div">
                    {/* information */}
                    <div className="info-div">
                        <p>NEXT TOURNAMENT STARTS IN <span className="number">126</span><span className="text">DAYS</span></p>
                    </div>
                    {/* input and button */}
                    <div className="input-btn-div">
                        <div className="d-flex">
                            <input placeholder="Search" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}