import {useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions/todoActions';

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const onSubmit = (e) =>{
        e.preventDefault();
        if(title !== ''){
            const newTodo = {
                title: title,
                completed: "false"
            }
            addTodo(newTodo);
            setTitle('');
        }
        
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" onChange={(e)=> setTitle(e.target.value)} name="title" value={title}/>
                <input type="submit" value="Add todo"/>
            </form>
        </div>
    )
}
const mapStateToProps = (state) =>({})

export default connect(mapStateToProps,{addTodo})(TodoForm);
