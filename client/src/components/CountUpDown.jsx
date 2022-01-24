import { useState } from "react";

const INITIAL_COUNT = 0;


const CountUpDown = () => {
  const [countNum, setCountNum] = useState(INITIAL_COUNT);

  // カウントアップ機能
  const countUp = () => {
    return setCountNum((prevCountNum) => prevCountNum + 1);
  }

  // カウントダウン機能
  const countDown = () => {
    return setCountNum((prevCountNum) => prevCountNum - 1);
  }

  return(
    <>
      <div className="count_up_down">
        <p>現在のカウント: {countNum}</p>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
      </div>
    </>
  )
};

export default CountUpDown;
