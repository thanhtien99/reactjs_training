import { useState } from 'react';
import './App.css';
import CorlorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love easy Frontend!" },
    { id: 2, title: "We love easy Frontend!" },
    { id: 3, title: "They love easy Frontend!" },
  ]);

  function handleTodoClick(todo){
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0){
      return;
    }
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>React hooks - TodoList</h1>
      <TodoForm />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
