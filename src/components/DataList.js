import React from "react"

const DataList = () => {
  return (
    <section className="col-6 mt-4 mx-auto">
      <div className="container">
        <h2>Data List</h2>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Calles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default DataList