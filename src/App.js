import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
 import { useState } from 'react';

// const TodoList=['Run two miles','Test the code','Wake up early']
function App() { //App is a function that is returning JSX
  const [TodoList, setTodoList] = useState([]);
  let [existingData,addExistingData] = useState({id: null, text: ''});
  function removeData(e){
    setTodoList(TodoList.filter((item)=>item!==e))
  }
  function updateData(item){
    console.log(item);
    addExistingData(item)
  }
  function updateTodoList(event){
    console.log(event)
    if(event.id!=null){
      setTodoList(TodoList.map(td => td.id === event.id ? ({id: event.id, text: event.text}) : td))
    }
    else
    setTodoList([...TodoList,{id:Date.now(),text:event.text}])
  }
  return (
    <div>
      <div className="title">
      <h1>My Todos</h1>
      </div>
      <TodoForm sendToParent={(e)=>updateTodoList(e)} fillTodo={existingData}  />
      {TodoList.map((data)=>{
        return <li key={data.id}><Todo text={data} onRemoveData={(e)=>removeData(e)} onUpdateData={updateData}/></li>
      })}
    </div>
  );
}
//{[<li>Item1</li>,<li>Item2</li>]}
export default App;
