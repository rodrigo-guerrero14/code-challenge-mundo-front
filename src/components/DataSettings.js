import React, { useState, useEffect } from "react"

const DataSettings = () => {

  const [regions, setRegions] = useState(["Región de Magallanes", "Región del Maule"])
  const [provinces, setProvinces] = useState([])
  const [cities, setCities] = useState([])

  useEffect(()=>{
    //cuando carga el componente se cargan las regiones
  }, [])

  useEffect(()=>{
    //cuando cambia las regiones, se debe cambiar las provincias que tiene cada región
    fetch('')
  }, [regions, setRegions])

  useEffect(()=>{
    //cuando cambia las provincias, se deben cambiar las ciudades
  }, [provinces, setProvinces])

  return (
    <section className="mb-3 col-xl-6 mx-auto">
      <div className="container m-auto">
        
        <select className="form-select mb-3 mt-3">
          <option selected>Regiones</option>
          {regions.map(region => {return <option value={region}>{region}</option>})}
        </select>

        <select className="form-select mb-3 mt-3">
          <option selected>Provincias</option>
          {provinces.map(province => {return <option value={province}>{province}</option>})}
        </select>

        <select className="form-select mb-3 mt-3">
          <option selected>Ciudades</option>
          {cities.map(city => {return <option value={city}>{city}</option>})}
        </select>
      </div>
    </section>
  )
}

export default DataSettings