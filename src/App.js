import { useState } from 'react'
function App() {
  const {count,setCount} = useState(0)
  function decrementCount(){
    setCount(count - 1)
  }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button>+</button>
    </>
  );
}
export default App;
