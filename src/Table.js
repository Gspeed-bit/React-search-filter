import React from 'react'

export const Table = ({datas}) => {


  return (
    <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gmail</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
           {datas.map((data) => ( 
                 <tr key={data.id}>
                <td>{`${data.first_name} ${data.last_name}`}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                </tr>  
           ))}  
          </tbody>
          </table>
    </div>
  )
}
