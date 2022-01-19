import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
