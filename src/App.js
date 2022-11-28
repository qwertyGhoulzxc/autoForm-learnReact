import styled from "styled-components";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import {useState} from "react";



function App() {
    const [data,setData] = useState([])

  return (
    <div className="App">
<Table data = {data}/>
<Form addData={setData} data = {data}/>
    </div>
  );
}

export default App;
