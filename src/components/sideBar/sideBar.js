import React from 'react'
import './style.css'
import ManImg from '../../assests/images/place.jpg'

export default () => {
    return (
        <div className="container-fluid">
            <div className="side-bar-main-div">
                {/* player rating info */}
                <div className="player-section">
                    <h3># 1 PLAYER</h3>
                    <div className="d-flex justify-content-around">
                        <div>
                            <span className="number">1</span>
                            <img src={ManImg} alt="" width="50px" height="37px" />
                        </div>
                        <div className="winner-name">
                            <h6>WINNER</h6>
                            <h4>STEVE</h4>
                        </div>
                        <div className="price">
                            <p>Price</p>
                            <span className="total-price-winner">$ 21231,123</span>
                        </div>
                    </div>
                </div>
                {/* 20th player */}
                <div className="player-section">
                    <h3># 20 PLAYER</h3>
                    <div className="d-flex justify-content-around">
                        <div>
                            <span className="number-20">20</span>
                            <img src={ManImg} alt="" width="50px" height="37px" />
                        </div>
                        <div className="runner-name">
                            {/* <h6>WINNER</h6> */}
                            <h4>STEVE</h4>
                        </div>
                        <div className="price">
                            <p>Price</p>
                            <span className="total-price-winner">$ 21231,123</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* lists of player */}
            <div className="lists-of-players-main-div">
                <div className="number-inside-circle-div d-flex justify-content-center">
                    <span className="circle-number">5</span>
                </div>
                {/* heading */}
                <h3>PLAYERS</h3>
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
                {/* 2nd player */}
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
                {/* 3rd player */}
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
                {/* 4th player */}
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
                {/* players behind you data */}
                <div className="behing-you-players d-flex justify-content-center">
                    <span className="behing-players-number">5</span>
                </div>
                <div className="players-behind-you-heading">
                    <h3>PLAYERS BEHIND YOU</h3>
                </div>
                {/* 1st player */}
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
                {/* 2nd player */}
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
                {/* 3rd player*/}
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
                {/* 4th player*/}
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
                {/* 5th player*/}
                <div className="img-and-data-player d-flex justify-content-around">
                    <img src={ManImg} alt="" width="50px" height="40px" />
                    <div className="d-flex name-and-number-div">
                        <p className="name">STEVE BARKER</p>
                        <p className="number">$ 212.12,12</p>
                    </div>
                </div>
            </div>
            {/* list of markets */}
            <div className="markets-table-main-div">
                <h4>MARKETS</h4>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>PRICE</th>
                                <th>CHG</th>
                                <th>%CHG</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="first-column">Dow</td>
                                <td>15.248</td>
                                <td>+ 207</td>
                                <td>1.34%</td>
                            </tr>
                            <tr>
                                <td className="first-column">Dow</td>
                                <td>15.248</td>
                                <td>+ 207</td>
                                <td>1.34%</td>
                            </tr>
                            <tr>
                                <td className="first-column">Dow</td>
                                <td>15.248</td>
                                <td>+ 207</td>
                                <td>1.34%</td>
                            </tr>
                            <tr>
                                <td className="first-column">Dow</td>
                                <td>15.248</td>
                                <td>+ 207</td>
                                <td>1.34%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}