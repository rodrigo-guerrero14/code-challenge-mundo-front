import React from "react"
import Street from "./Street"

const DataList = (props) => {

  return (
    <section className="col-6 mt-4 mx-auto">
      <div className="container">
        <h2>Data List</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Calles</th>
            </tr>
          </thead>
          <tbody>
            <Street list={props.list}/>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default DataList