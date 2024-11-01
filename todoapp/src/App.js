import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };

  const deleteItem = (index) => {
    const updatedList = listTodo.filter((item, i) => i !== index);
    setListTodo(updatedList);
  };

  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList} />
        <h1 className='app-heading'>TODO</h1>
        <hr />
        <ul>
          {listTodo.map((listItem, i) => {
            return (
              <TodoList key={i} id={i} item={listItem} deleteItem={deleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

