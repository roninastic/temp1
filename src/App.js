import { useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';
import Button from '@mui/material/Button';
import TodoCard from './Component/TodoCard/TodoCard';
import data from './Utils/Dataset'
import { useEffect } from 'react';
import Header from './Component/Header';

function App() {
  
  const [toDos,setToDos] = useState(data)
  const [newTitle, setNewTitle] = useState('')
  const [newDetail, setNewDetail] = useState('')

 
  useEffect(()=>{
    let data = localStorage.getItem('data')
    if(data){
      setToDos(JSON.parse(data))
    }
  },[])
  //input va;idation

  //Add new data
  const addHandler = (data) =>{ 
    if (newTitle === ''){

return alert ("Enter Valid Message!!")
    }
    let newTodo = {
        id: Math.random(),
        title: newTitle,
        details: newDetail,
        isCompleted: false,
        isDeleted: false
    }
    toDos.push(newTodo)
    console.log(toDos);
    setToDos([...toDos])

    localStorage.setItem("data",JSON.stringify(toDos)) //Updating Local Storage
  }

  // useEffect(()=>{
    

  // },[toDos])

  const completeHandler = (id) =>{
    const todo = toDos.find(e => e.id === id);
    todo.isCompleted = true
    setToDos([...toDos])
    localStorage.setItem("data",JSON.stringify(toDos))
  }
  
  const deleteHandler = (id) =>{
    const todo = toDos.find(e => e.id === id);
    todo.isDeleted = true
    setToDos([...toDos])
    localStorage.setItem("data",JSON.stringify(toDos))
  }
  
  return (

    <div className="main-container">
    <Header />
    <div className='input-container'>
        <Box
          component="form"
          sx={{
          '& > :not(style)': { m: 1, width: '25ch' },color: 'white'
            }}
        noValidate
        autoComplete="off"
        >
          <TextField id="outlined-basic" label="Enter Task" variant="outlined" onChange={(e) => setNewTitle(e.target.value)}/>
          
        </Box>
        <Box
          component="form"
          sx={{
          '& > :not(style)': { m: 1, width: '25ch' },color: 'white'
            }}
        noValidate
        autoComplete="off"
        >
          <TextField id="outlined-basic" label="Enter Details" variant="outlined" onChange={(e) => setNewDetail(e.target.value)}/>
          
        </Box>
        

        <Button variant="outlined" onClick={addHandler}>Add Note</Button>
      </div>
      <div className='output-container'>
        <div className='card-container'>
          <h4 >Pending</h4>
          <div className='card-list'>
            {
              toDos.map((e) => {
              if(!e.isCompleted && !e.isDeleted){
              return <TodoCard key = {e.id} details={e.details} title = {e.title} id={e.id} complete = {completeHandler} delete = {deleteHandler}/>
            }
            return <div></div>
            
          })}
        </div>
      </div>
                {/*complete = {complete}
                  variable = {func}
                  value ==

        props passing function*/}




        <div className='card-container'>
          <h4>Completed</h4>
          <div className='card-list'>
          {toDos.map((e) => {
              if(e.isCompleted && !e.isDeleted){
              return <TodoCard key={e.id} details={e.details} title = {e.title}  id={e.id} ABC={e.isCompleted} delete = {deleteHandler}/>
              }
              return <div></div>
            })}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
