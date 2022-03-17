import { useState } from 'react';
import { Table } from './Table';
import { Users } from './Users';
import './App.css';


function App() {

  const [query, setQuery] = useState("")


  console.log ()
  const handleChange =(e) =>{
    setQuery(e.target.value)
  }

const keys =["first_name", "last_name", "email"]

const search = (data) =>{
  return data.filter(item =>(
    keys.some(key => item[key].toLowerCase().includes(query))

  ))


}

return (
  <div className="App">
      <header className="App-header">
  <input 
  type="text" 
  className='text'
  placeholder='Search Here'
  onChange={handleChange}
  />

<Table datas={search(Users)}/>
      </header>
    </div>
  );
}

export default App;
