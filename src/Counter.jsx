import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(
    function myEffect() {
      alert("My Effect was called");
    },
    [count] //will only re-render when count function is called and if I pass an empty array the useEffect will render only once in the beginning
  ); //any time the component re-renders this function will be called
  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h3>
        The component will re-render with any change triggering the alert, which
        means the effect is running for every single render
      </h3>
      <p>The count is: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>
        <p>The name is : {name}</p>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          value={name}
        />
      </div>
    </div>
  );
}

export default Counter;
