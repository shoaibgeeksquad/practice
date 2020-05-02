import React from 'react'
import './style.css'

export default () => {
    return (
        <div className="container-fluid ">
            <div className="background-color-of-watchlist">
                <div className="heading-of-watch-list">
                    <h5>Watch List</h5>
                </div>
                {/* table */}
                <div className="justify-content-center d-flex">
                    <div>
                        {/* heading 0f stock watch list */}
                        <div className="stock-watch-heading">
                            <h2>STOCK WATCHLIST</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>SYM</th>
                                    <th>COMPANY</th>
                                    <th>SALE PRICE</th>
                                    <th>GAIN/LOSS</th>
                                    <th>ACTION</th>
                                    <th>CHANGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>DTV</td>
                                    <td>DIRECT TV</td>
                                    <td>45.76</td>
                                    <td><div className="small-circle small-circle-red circle-center"></div></td>
                                    <td><button className="rounded-button">REMOVE</button></td>
                                    <td><button className="rounded-button">EDIT</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>DTV</td>
                                    <td>DIRECT TV</td>
                                    <td>45.76</td>
                                    <td><div className="small-circle small-circle-green circle-center"></div></td>
                                    <td><button className="rounded-button">REMOVE</button></td>
                                    <td><button className="rounded-button">EDIT</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>DTV</td>
                                    <td>DIRECT TV</td>
                                    <td>45.76</td>
                                    <td><div className="small-circle small-circle-red circle-center"></div></td>
                                    <td><button className="rounded-button">REMOVE</button></td>
                                    <td><button className="rounded-button">EDIT</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>DTV</td>
                                    <td>DIRECT TV</td>
                                    <td>45.76</td>
                                    <td><div className="small-circle small-circle-red circle-center"></div></td>
                                    <td><button className="rounded-button">REMOVE</button></td>
                                    <td><button className="rounded-button">EDIT</button></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>DTV</td>
                                    <td>DIRECT TV</td>
                                    <td>45.76</td>
                                    <td><div className="small-circle small-circle-red circle-center"></div></td>
                                    <td><button className="rounded-button">REMOVE</button></td>
                                    <td><button className="rounded-button">EDIT</button></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>DTV</td>
                                    <td>DIRECT TV</td>
                                    <td>45.76</td>
                                    <td><div className="small-circle small-circle-green circle-center"></div></td>
                                    <td><button className="rounded-button">REMOVE</button></td>
                                    <td><button className="rounded-button">EDIT</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex below-table-total-stocks">
                            <h4>Max of 10 Stocks</h4>
                            <div className="reset-text">
                                <h4>RESET</h4>
                                <h6>(Clear List)</h6>
                            </div>
                        </div>
                    </div>
                    {/* right portion of inputs with table */}
                    <div className="right-portion-of-table">
                        <div className="d-flex flex-column add-stock-heading-input">
                            <h3>Add Stock</h3>
                            <input placeholder="GE" />
                            <p>Find Stock Symbol</p>
                        </div>
                        <div className="d-flex flex-column Target-heading-input">
                            <h3>Target Price</h3>
                            <input placeholder="37.00" />
                        </div>
                        <div className="d-flex flex-column Target-btn">
                            <button>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}