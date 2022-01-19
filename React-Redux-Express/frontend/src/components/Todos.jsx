// import {PropTypes} from 'prop-types';
import {useEffect} from 'react';
import {connect} from "react-redux";
import {getTodos, markComplete, removeTodo} from "../redux/actions/todoActions";
const Todos = ({getTodos, todos, markComplete, removeTodo}) => {
    useEffect(()=>{
        getTodos()
    }, [todos.length])
    return (
        <div className="todo-list">
            {todos.map((todo, index) => <li key={index} className={todo.isCompleted ? "completed" : ""}>{todo.title} <input type="checkbox" onChange={() => markComplete(todo._id)}/> <button onClick={()=> removeTodo(todo._id)}>Delete</button></li>)}
        </div>
    )
}
// Todos.propTypes ={
//     getTodos: PropTypes.func.isRequired,
// }

const mapStateToProps = state=>(
    {
        todos: state.todos.todos
    }
)
export default connect(mapStateToProps, {getTodos,markComplete,removeTodo})(Todos);
