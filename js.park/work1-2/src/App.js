import TodoListTemplate from './components/TodoListTemplate';
import React, { Component } from 'react';
import Form from './components/Form'
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;

  state = {
    input: '',
    todos: [
      {id: 0, text: '리엑트 소개', checked: false},
      {id: 1, text: '리엑트 소개', checked: true},
      {id: 2, text: '리엑트 소개', checked: false},
    ]
  }
  //-------------------------
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];
    // ...연산자는 todos의 값을 그대로 복사 해온다
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  // define handle -> Change, Create, Keypress, Toggle, Remove
  //------------------------------
  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    // change, create, keypress, togle, remove 핸들을 this값에 저장함. 
    return (
      <TodoListTemplate form={(
        // TodoListTemplate는 전체적인 템플릿에 관해 정의되고 .css로 스타일도 정의 되어있음. 
        // 밑의 Form값을 인자로 넘겨줌
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        {/* import TodoItemList from './components/TodoItemList';
            위의 경로에서 참조한 TodoItemList에 todos, onToggle, onRemove에 값을 넣어줘서
            TotoItemList.js 에서 해당 값을 받아서 작동하여 리턴하게 됨 */}
      </TodoListTemplate>
      // 리액트에서는 이벤트 함수 설정시 html과 다르다
      // camelCase라는 방식으로 설정해야하는데 onclick은 onClick, onmousedown은 onMouseDown으로 사용해야함
      // 이벤트에 전달하는 값은 무조건 함수만 해야한다.
      // 만약 onClick={this.handleIncrease()} 이렇게 설정한다면, 렌더링을 할 때마다 해당 함수가 호출이 됨으로 큰일이 난다
      // 렌더링 -> 함수 호출 -> state 세팅 -> 렌더링 -> 함수호출 -> state 세팅으로 무한 루프가 돌기 때문이다.
    )
  }
}

export default App;
