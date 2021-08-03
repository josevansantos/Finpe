import React from "react"
import Header from '../../components/Header';
import Transactions from '../../components/Transactions';
import Card from '../../components/Card'

const Home = () => {
    return (
        <>
        <Header />
        <Card />
        <div className="container flex js-center">
          <Transactions />
        </div>
        </>
    )
}

export default Home;
