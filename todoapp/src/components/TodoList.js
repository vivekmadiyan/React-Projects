import React from 'react';

function TodoList(props) {
  return (
    <li className='list-item'>
      {props.item}
      <span className='icons'>
        <i 
          className="fa-solid fa-trash" 
          onClick={() => props.deleteItem(props.id)} // Add this line
        />
      </span>
    </li>
  );
}

export default TodoList;


