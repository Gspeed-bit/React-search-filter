import React from 'react'

export const Table = ({data}) => {
  return (
<div> 
<table className='tabel'>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  
  <tbody>
  {data.map((item) => (
<tr key={item.id}>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
    </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}
