import React from 'react'
import Header from '../../components/header/header'
import Navbar from '../../components/navigationBar/navigation'
import WatchList from '../../components/watchList/watchList'
import PortFolio from '../../components/portfolio/portfolio'
import Footer from '../../components/footer/footer'
import Sidebar from '../../components/sideBar/sideBar'

export default () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="d-flex">
                <div style={{width:"100%"}}>
                    <WatchList />
                    <PortFolio />
                </div>
                <div style={{width:"100%"}}>
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </>
    );
}