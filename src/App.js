import React from 'react';
import "./component/TodoApp/TodoApp.css"
// import TodoForm from './component/TodoApp/TodoForm';
import TodoList from './component/TodoApp/TodoList';

function App() {
  return (
    <div className="todo-app">
    {/* <TodoForm /> */}
    <TodoList />
    </div>
  );
}

export default App;
 