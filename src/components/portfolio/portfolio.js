import React from 'react'
import './style.css'
import Plus from '../../assests/images/plus.png'
import Minus from '../../assests/images/minus.png'

export default () => {
    return (
        <div className="container-fluid main-div-of-portfolio-component">
            <div className="portfolio-background-color d-flex justify-content-between">
                {/* portfolio headings */}
                <div className="portfolio-heading-div">
                    <h5>PORTFOLIO TRANSACTION</h5>
                </div>
                <div className="portfolio-heading-div mrg-right">
                    <h5>PLAYER PORTFOLIO</h5>
                </div>
            </div>
            {/* list of data */}
            <div className="list-of-data d-flex justify-content-around">
                <div>
                    <h4>MAKE A MARKET</h4>
                    <h4>SWAP TRADE</h4>
                </div>
                <div>
                    <h4>MULTI-PARTY TRADE</h4>
                    <h4>SHORT SALE</h4>
                </div>
                <div>
                    <h4>ASSETS LISTS</h4>
                    <h4>REVIEW THE MARKET</h4>
                    <h4>ASSET MARKET CURRENT VALUES</h4>
                </div>
                <h4>ASSETS BASIS</h4>
            </div>
            {/* quick reference heading adn their tables */}
            <div className="portfolio-background-color d-flex justify-content-between mrg-top">
                {/* portfolio headings */}
                <div className="portfolio-heading-div">
                    <h5>QUICK REFERENCE</h5>
                </div>
            </div>
            {/* tables */}
            <div className="d-flex justify-content-center">
                <div className="mrg-btw-tables">
                    <div className="heading-of-portfolio-tables">
                        <h2>PORTFOLIO HOLDINGS</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>SYM</th>
                                <th>COMPANY</th>
                                <th>SHARES</th>
                                <th>VALUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td>$ 124,000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td>$ 124,000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td>$ 124,000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td>$ 124,000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td>$ 124,000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td>$ 124,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* 2nd table */}
                <div>
                    <div className="heading-of-portfolio-tables">
                        <h2>STOCK WATCHLIST</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>SYM</th>
                                <th>COMPANY</th>
                                <th>SHARES</th>
                                <th>GAIN/LOSS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td><div className="small-circle small-circle-red circle-mrg"></div></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td><div className="small-circle small-circle-red circle-mrg"></div></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td><div className="small-circle small-circle-red circle-mrg"></div></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td><div className="small-circle small-circle-red circle-mrg"></div></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td><div className="small-circle small-circle-red circle-mrg"></div></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>APPL</td>
                                <td>Apple Inc</td>
                                <td>500</td>
                                <td><div className="small-circle small-circle-red circle-mrg"></div></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center below-table">
                        <img className="plus" src={Plus} alt="" width="20" height="20"/>
                        <img className="minus" src={Minus} alt="" width="20" height="20"/>
                        <h3>RESET</h3>
                    </div>
                </div>
            </div>
            {/* traders information */}
            <div className="main-div-of-traders">
                {/* heading */}
                <h2>OVERALL TRADERS</h2>
                {/* traders information */}
                <div>
                    <ul className="d-flex justify-content-around">
                        <li>MSFT</li>
                        <li className="li-down">5K @</li>
                        <li>61.25</li>
                        <li className="red-color"><span className="red-arrow"></span>1.35</li>
                        <li>APPL</li>
                        <li className="li-down">9K @</li>
                        <li>276.25</li>
                        <li className="green-color"><span className="green-arrow"></span>1.35</li>
                        <li>MSFT</li>
                        <li className="li-down">5K @</li>
                        <li>61.25</li>
                        <li className="red-color"><span className="red-arrow"></span>1.35</li>
                        <li>APPL</li>
                        <li className="li-down">9K @</li>
                        <li>276.25</li>
                        <li className="green-color"><span className="green-arrow"></span>1.35</li>
                        <li>MSFT</li>
                        <li className="li-down">5K @</li>
                        <li>61.25</li>
                        <li className="red-color"><span className="red-arrow"></span>1.35</li>
                    </ul>
                </div>
            </div>
            {/* special traders heading and their info */}
            <div className="special-traders-main-div">
                <h2>SPECIAL TRADERS</h2>
                <div>
                    <ul className="d-flex">
                        <li className="light-color">SWAPS...</li>
                        <li className="white-color">500</li>
                        <li>KO 40 - 400 IBM</li>
                        <li>50</li>
                    </ul>
                </div>
            </div>
        </div >
    );
}