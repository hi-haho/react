import React, { useState } from "react";

function TodoList({ items }) {
  //할일 목록 출력용
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItems = {
      text: text,
      id: Date.now(), //배열의 값을 줄때 값을 구분하기위해 넣어주는 값
    };
    setItems((prevItems) => [...prevItems, newItems]); //newItems에게 prevItems에게 복사한 것
    setText("");
  };

  return (
    <div className="App">
      <h3>오늘 할일 적기</h3>
      <TodoList items={items}></TodoList>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <b>오늘 할 일 : </b>
        </label>
        <input id="todo" onChange={handleChange} value={text}></input>
        <button>클릭 #{items.length}</button>
      </form>
    </div>
  );
}

export default App;
