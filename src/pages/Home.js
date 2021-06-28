import React from "react"
import Header from "../components/Header"
import DataSettings from "../components/DataSettings"
import DataList from "../components/DataList"

const Home = () => {

  return(
    <>
      <Header />
      <DataSettings />
      <DataList list={[]}/>
    </>
  )
}

export default Home