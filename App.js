import { useEffect, useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나, 창이 새로고침하여 실행된다. 그러나 preventDefault 를 적용하면 이러한 동작을 막을 수 있다. 주로 사용되는 경우는 1. a태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우 2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우(submit은 작동됨)
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
  };
  /* const deleteBtn = (item) => {
    const li = item.target.parentElement;
    li.remove();
  }; */ //단순 부모요소 삭제
  const deleteBtn = (e) => {
    setToDos(toDos.filter((item, todoindex) => e !== todoindex));
  }; // 배열에 들어가있는 index와 삭제할(버튼의 li)index를 찾아서 삭제할 경우(filter함수 사용)
  return (
    <div>
      <h1>나의 할 일({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="your to do ..."
        />
        <button>Add To Do</button>
      </form>
      <div>
        <ul>
          {toDos.map((item, Number) => (
            <li key={Number}>
              {item}
              <button onClick={() => deleteBtn(Number)}>X</button>
              {/* filter 함수에 넣는 두 번째 인자는 todos 배열에 있는 요소의 index가 들어간다.
(두 번째 인자를 써본 경험이 없어서 새로 알게 된 사실)
또한 onClick={deleteBtn} 이 아닌onClick={() => deleteBtn(Number)} 이렇게 쓰는 이유는 "바로 실행"되지 않고 클릭을 기다리는 함수로 쓰기 위함 */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
//javascript의 map() 은 하나의 array에 있는 각각의 item을 내가 원하는 새로운 array로 return 해준다.
//toUpperCase 문자를 대문자로 변환
//toLowerCase 문자를 소문자로 변환

export default App;
