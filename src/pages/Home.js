import React, {useState} from "react"
import Header from "../components/Header"
import DataSettings from "../components/DataSettings"
import DataList from "../components/DataList"

import { regions, provinces, cities } from "../initialData"

const Home = () => {

  const [streets, setStreets] = useState([])

  return(
    <>
      <Header />
      <DataSettings regions={regions} provinces={provinces} cities={cities} setStreets={setStreets}/>
      <DataList list={streets}/>
    </>
  )
}

export default Home