import React from 'react'

function Select({values, title}) {

  const handleSelect = () => {
    console.log('on select')
  }

  return values.length !== 0 
  ? (
    <>
      <input className="form-control mb-3 mt-3" list={`dataList${title}`} id={title} placeholder={title} onSelect={handleSelect}/>
      <datalist id={`dataList${title}`}>
        {values.map((item, index) => {return <option key={index} value={item} />})}
      </datalist>
    </>
  )
  : (
    <>
      <input className="form-control mb-3 mt-3" list={`dataList${title}`} id={title} placeholder={title} onSelect={handleSelect} disabled/>
      <datalist id={`dataList${title}`}>
      </datalist>
    </>
  )
}

export default Select