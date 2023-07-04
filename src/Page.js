import React, { useState } from "react";

function Page(props) {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((number) => number + 1);
  };
  const onDecrease = () => {
    setNumber((number) => number - 1);
  };

  const [text, setText] = useState("");
  const onReset = () => {
    setText("");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      page {props.isSpecial && <b>*</b>}
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <div>
        <input value={text} onChange={onChange} />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: {text}</b>
        </div>
      </div>
    </div>
  );
}
export default Page;
