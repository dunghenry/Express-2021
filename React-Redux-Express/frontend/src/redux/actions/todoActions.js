import axios from "axios";
export const getTodos = () =>async dispatch =>{
    try {
        const res = await axios.get("https://todos-app-2021.herokuapp.com/api/v1/todos");
        dispatch({
            type: "GET_TODOS",
            payload: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const markComplete = id =>{
    // console.log(id)
    const markCompleteActions = dispatch =>{
        dispatch({
            type: "MARK_COMPLETED",
            payload: id
        })
    }
    return markCompleteActions;
}

export const addTodo = newTodo =>async dispatch =>{
    try {
        await fetch('https://todos-app-2021.herokuapp.com/api/v1/add', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin' ,

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTodo)

        })
        dispatch({
            type: "ADD_TODO",
            payload: newTodo,
    
        })
    } catch (error) {
        console.log(error)
    }

    
}

export const removeTodo = id => async dispatch =>{
    try {
        await axios.delete(`https://todos-app-2021.herokuapp.com/api/v1/todo/${id}`);
        dispatch({
            type: "REMOVE_TODO",
            payload: id
        })
    } catch (error) {
        console.error(error)
    }
    
}