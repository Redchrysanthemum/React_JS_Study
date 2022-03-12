import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState("");
  const onChange = (e) => {
    setDollar(e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=40")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>코인 리스트 ({coins.length}개)</h1>
      {loading ? <strong>로딩중...</strong> : null}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(4)}{" "}
            USD
          </option>
        ))}
      </select>
      <br />
      <br />
      소지금
      <input
        onChange={onChange}
        value={dollar}
        style={{
          textAlign: "right",
          width: 100,
        }}
      />
      $
      <br />
      <br />
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${dollar / coin.quotes.USD.price} 개
            만큼 살 수 있어요
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

//fetch() 함수는 첫번째 인자로 URL 을 두번째 인자로 옵션 객체를 받고 Promise 타입의 객체를 반환 합니다. 반한된 객체는, API 호출이 성공했을 경우에는 응답(response)객체를 resolve하고, 실패했을 경우에는 예외(error)객체를 reject합니다.

//Promise 타입의 객체란. javascript 비동기 처리에 사용되는 객체입니다. 비동기 처리란 "특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 javascript의 특성"을 의미합니다. Promise는 주로 서버에서 받아온 데이터를 화면에 표시할 떄 사용합니다.
