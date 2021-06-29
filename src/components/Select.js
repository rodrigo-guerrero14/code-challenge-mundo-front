import React from 'react'

function Select({values, title}) {

  return values.length !== 0 
  ? (
    <>
      <input className="form-control mb-3 mt-3" list={`dataList${title}`} id={title} placeholder={title}/>
      <datalist id={`dataList${title}`}>
        {values.map(item => {return <option key={item.id} value={item.name} />})}
      </datalist>
    </>
  )
  : (
    <>
      <input className="form-control mb-3 mt-3" list={`dataList${title}`} id={title} placeholder={title} disabled/>
      <datalist id={`dataList${title}`}>
      </datalist>
    </>
  )
}

export default Select