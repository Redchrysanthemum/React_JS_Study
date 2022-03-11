import { useState, useRef, useEffect } from "react";
function App() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const input = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (first * second === parseInt(value)) {
      //parseInt = string 을 number 로 변환
      setResult(value + "정답!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");

      input.current.focus();
    } else {
      setResult(value + "땡!");
      setValue("");

      input.current.focus();
    }
  };
  return (
    <div>
      <h1>구구단</h1>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input ref={input} onChange={onChange} type="number" value={value} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;
