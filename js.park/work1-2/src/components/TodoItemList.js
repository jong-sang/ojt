import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    // App.js에서 todos, onToggle, onRemove에 각각 todos, handleToggle, handleRemove 값을 받아서 작동하게 됨
    console.log('todos : ',todos)
    const todoList = todos.map(
      // todos 에 받아온 값을 map 함수를 이용하여 재분배함
      ({id, text, checked}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
        // map 함수를 이용해서 <TodoItem>에 인자를 보내서 반복
        // todos 값이 10개면 TodoItem[0~9] 까지를 반복해서 toDolist에 저장하게 됨
      )
    );
    console.log('todos2 : ',todos)
    console.log('todoList : ',todoList)
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;