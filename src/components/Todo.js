
function Todo(props){
    
    function deleteTodo(){
        console.log("delete button is clicked");
        console.log(props.text);
        
        props.onRemoveData(props.text);
    }
    function updateTodo(){
      props.onUpdateData(props.text);
    }
    return(
        <div className="card">
        <h2>
          {props.text.text}
        </h2>
        <div className="flex-btn">
        <button className="btn-update" onClick={updateTodo}>Update</button>
          <button className="btn" onClick={deleteTodo}>Delete</button>
        </div>
        
        
      </div>
    )
}
export default Todo;