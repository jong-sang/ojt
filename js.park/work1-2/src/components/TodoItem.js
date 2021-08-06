import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  // 컴포넌트 라이프 사이클 메소드
  // console.log(id)를 하면 값을 입력할 때 마다 render 함수가 실행되는 것을 확인 할 수 있음.
  // 하지만 render 함수가 실행된다고 해서 DOM에 변화가 일어나지는 않음.
  // react에서는 가상 DOM을 사용하여 변화가 없는 곳은 그대로 남겨둠

  // 대신 가상 DOM이 미세하게 낭비 중.
  // 업데이트가 불필요하다면 render를 하지 않는게 프로젝트 성능에 도움이 됨.
  // shouldComponenetUpdate는 컴포넌트가 리렌더링 여부를 결정
  // 따로 명시하지 않으면 true를 반환하는데
  // 구현하게 된다면 업데이트에 영향을 끼치는 조건을 return하면 됨
  // 여기서는 this.props와 nextProps의 값이 다르면 리렌더링 하도록 명시한 것.
  // nextProps는 App.js에 handleToggle에 명시 되어있음.

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    // TodoItemList에서 전달 한 값을 props를 이용해 전달 받음
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        {/* 상위 이벤트인 onToggle이 실행되고 아래의 remove가 실행이 된다 */}
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          // stopPropagation을 넣지 않으면 x모양을 눌렀을 때 해당 클릭이 부모 클릭 이벤트에 연결되어
          // onToggle 이벤트도 실행이 되는데 이렇게 실행이 된다면 코드가 의도치 않게 작동하여 삭제가 진행이 안 될 수도 있다.
          // stopPropagation은 자식 이벤트가 부모 이벤트로 확산이 되는 것을 막아주게 된다.
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          {/* ${} 부분에서 비교문을 통해 일차하면 checked가 출력되고 다르면 false를 출력하게 된다 */}
          {/* 이 부분은 css에 checked로 클래스 네임이 반환되면 글자 색이 흰색 및 취소선으로 출력되도록 정의되어 있다. */}
          <div>{text}</div>
        </div>
        {
          checked && (<div className="ckeck-mark">✔️</div>)
        }
        {/* 이 부분은 checked 값에 따라서 ✔️글자를 출력하도록 명시 된 부분이다  */}
        {/* checked 값이 참으로 반환되면  <div className="ckeck-mark">✔️</div> 부분이 출력된다. */}
      </div>
    );
  }
}

export default TodoItem;