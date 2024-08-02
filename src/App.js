import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import data from './data';
import { Toaster } from 'react-hot-toast';


function App() {
  const[todoData,setTodoData] = useState(data)

  return (
    <div className="App">
      <Toaster />
      <Header></Header>
      <Todos todoData={todoData} setTodoData= {setTodoData} > </Todos>       
    </div>
  );
}

export default App;
