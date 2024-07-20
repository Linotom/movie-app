import React from 'react'
import Navbar from './Navbar'

const ViewAllMovies = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Movie Name</th>
      <th scope="col">Actor</th>
      <th scope="col">Actress</th>
      <th scope="col">Director</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Thor</th>
      <td>Chris Hemsworth</td>
      <td>Natalie Portman</td>
      <td>charles</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAllMovies