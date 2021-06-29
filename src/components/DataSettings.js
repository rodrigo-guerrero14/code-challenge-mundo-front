import React, { useState } from "react"
import Select from "./Select"
import SelectCity from "./SelectCity"
import {streetsByCities} from "../initialData"

const DataSettings = ({regions, provinces, cities, setStreets}) => {
  const [city, setCity]= useState({})

  const handleClick = () => { 
    const cityFinded = cities.find(item => item.name === city)
    const streetsByCity = streetsByCities.find(item => item.idCity === cityFinded.id)  
    setStreets(streetsByCity.streets)
  }

  return (
    <section className="mb-3 col-xl-6 mx-auto">
      <div className="container">
        <Select values={regions} title={'Regiones'}/>
        <Select values={provinces} title={'Provincias'}/>
        <SelectCity values={cities} title={'Ciudades'} setCity={setCity}/>
        <button className="btn btn-primary btn-lg mx-auto" onClick={handleClick}>Buscar</button>
      </div>
    </section>
  )
}

export default DataSettings