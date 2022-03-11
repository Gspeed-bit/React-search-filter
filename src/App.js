import { useState } from 'react';
import './App.css';
import { Table } from './Table';
import {Users} from "./Users";

function App() {

const [query, setQuery] = useState("")


function handleChange (event){
setQuery(event.target.value)
}

const keys = ["first_name", "last_name", "email" ]

const search = (data) => {
  return data.filter(
    (item)=>(

  keys.some((key) => item[key].toLowerCase().includes(query))
                 //or
        // item.first_name.toLowerCase().includes(query)||
        // item.last_name.toLowerCase().includes(query)||
        // item.email.toLowerCase().includes(query)
  )
  )
} 

return (
    <div className="App">
      <header className="App-header">
      <input
      type="text"
      className="text"
      placeholder="Search here" 
      onChange={handleChange}
      />
      

      <Table  query={query} data = {search(Users)}/>
      </header>
    </div>
  );
}

export default App;
