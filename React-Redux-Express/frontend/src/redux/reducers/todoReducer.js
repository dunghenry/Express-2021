const initialState = {
  todos: [
  ],
};
const todoReducer = (state = initialState, action) =>{
  switch(action.type){
    case "GET_TODOS":
      // console.log(action.payload)
      return{
        ...state,
        todos: action.payload,
      }

    case 'MARK_COMPLETED':
      return{
        ...state,
        todos: state.todos.map(todo=>{
          if(todo._id === action.payload) todo.isCompleted = !todo.isCompleted;
          return todo;
        })
      }
    case "ADD_TODO":
      return{
        ...state,
        todos: [
          action.payload,
          ...state.todos,
         
        ],
      }
      case "REMOVE_TODO":
        return{
          ...state,
          todos: state.todos.filter(todo=> todo._id !== action.payload)
        }
    default:
      return state;
  }
}
export default todoReducer;