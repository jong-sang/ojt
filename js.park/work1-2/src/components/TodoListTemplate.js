import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
  // app.js에서 넘겨받은 Form값을 아래 form과 child값으로 전달함
  return (
    <main className="todo-list-tmplate">
      <div className="title">
        Todo List
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos=wapper">
        {children}
      </section>
    </main>
  );
};

export default TodoListTemplate;
