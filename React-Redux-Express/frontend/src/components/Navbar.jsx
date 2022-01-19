import {connect} from 'react-redux';
const Navbar = ({todos}) => {
    return (
        <div className='navbar'>
            <h1>Todos app by DungHenry</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: {todos.length}</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) =>({
    todos: state.todos.todos
})
export default connect(mapStateToProps, {})(Navbar);
