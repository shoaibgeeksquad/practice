import React from 'react'
import './style.css'

export default () => {
    return (
        <div className="container-fluid">
            <div className="footer-main-div">
                {/* heading */}
                <h3>EXCHANGE BRACKETS</h3>
                {/* list */}
                <div className="lists-of-footer">
                    <ul className="d-flex">
                        <li>Site Map</li>
                        <li className="vertical-line"></li>
                        <li>Advetise</li>
                        <li className="vertical-line"></li>
                        <li>Carrers</li>
                        <li className="vertical-line"></li>
                        <li>Help</li>
                        <li className="vertical-line"></li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* 2nd list */}
                <div className="lists-of-footer">
                    <ul className="d-flex">
                        <li>Privacy Policy</li>
                        <li className="vertical-line"></li>
                        <li>AdChoices</li>
                        <li className="vertical-line"></li>
                        <li>Terms Of Services</li>
                        <li className="vertical-line"></li>
                        <li>Latest News Releases</li>
                        <li className="vertical-line"></li>
                        <li>Rss</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}