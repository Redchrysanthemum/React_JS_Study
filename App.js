import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [search, setSearch] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (lalala) => setSearch(lalala.target.value);

  /*첫번째 방법*/
  /* const Onlyone = () => {
    console.log("CALL THE API");
  };
  useEffect(Onlyone, []); */

  /* 두번째 방법 */
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  useEffect(() => {
    if (search !== "" && search.length > 5) {
      //searh 가 빈 값이 아니라면(!==)
      //그리고(&&) search가 5보다 길때
      console.log("검색중", search);
    }
  }, [search]);
  return (
    <div>
      <input
        value={search}
        onChange={onChange}
        type="search"
        placeholder="search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>clickme</button>
    </div>
  );
}

export default App;

//특정 코드들이 첫번째 컴포넌트 랜더링에서만 실행되게 하는법(디폴트값은 특정코드들이 실행될때마다 컴포넌트도 re-render됨) useState가 변화해도 지정한 특정코드는 re-render되지 않는다

//useEffect는 두 개의 argument를 가지는 function이다.
//첫번째 argument는 한번만 실행하고 싶은 코드명
//두번쨰 argument는 dependencies 이며 방어막같은 존재 코드값이 변경되는 경우에만 re-render dependencies는 여러개 입력가능하다

/* useMemo의 경우 "생성"함수에 관련된 기능. 생성자 함수가 고비용(처리 시간이 오래 걸리는 등)인 경우 렌더링마다 계산하는 것은 처리 시간이 오래 걸리므로 값을 기억해놓고 의존성이 변경되었을 경우에만 다시 계산해주는 기능.

useEffect의 경우는 api 호출, 타이머 등 렌더링 과정에서 한 번만 호출해도 될 기능이 렌더링마다 실행되거나, 호출과정에서 렌더링에 영향을 끼칠 수 있는 것을 모아서 따로 처리하기 위한 기능.

둘의 결정적인 차이는 useEffect는 해당 컴포넌트의 렌더링이 완료된 후에 실행되지만, useMemo는 렌더링 중에 실행되는 차이가 있다고 함. */
