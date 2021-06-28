import React, { useState, useEffect } from "react"
import Select from "./Select"

const DataSettings = () => {

  const [regions, setRegions] = useState(["Región del Maule"])
  const [provinces, setProvinces] = useState([])
  const [cities, setCities] = useState([])

  useEffect(()=>{
    //cuando carga el componente se cargan las regiones
  }, [])

  return (
    <section className="mb-3 col-xl-6 mx-auto">
      <div className="container">
        <Select values={regions} title={'Regiones'}/>
        <Select values={provinces} title={'Provincias'}/>
        <Select values={cities} title={'Ciudades'}/>
        <button className="btn btn-primary btn-lg mx-auto">Buscar</button>
      </div>
    </section>
  )
}

export default DataSettings