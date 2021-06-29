import React from "react"

const Street = ({list}) => {
  
  return list.lenght !== 0 
  ? (
      list.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item}</td>
          </tr>
        )
      })
  )
  : null
}

export default Street