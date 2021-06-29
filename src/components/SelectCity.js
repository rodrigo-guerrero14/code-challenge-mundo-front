import React from 'react'

function SelectCity({values, title, setCity}) {

  function handleSelected(e){
    setCity(e.target.value)
  }

  return values.length !== 0 
  ? (
    <>
      <select className="form-select mb-3 mt-3" placeholder={title} onChange={handleSelected}>
        <option defaultValue>{title}</option>
        {values.map(item => {return <option key={item.id} value={item.name}>{`Ciudad de ${item.name}`}</option>})}
      </select>
    </>
  )
  : (
    <>
      <input className="form-control mb-3 mt-3" list={`dataList${title}`} id={title} placeholder={title} disabled/>
    </>
  )
}

export default SelectCity