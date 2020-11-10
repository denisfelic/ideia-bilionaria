import { React, useState } from 'react';

export default function Home(){
  return (
    <body>
      <h1>Ideia revolucionária e bilionária!!!</h1>
      <Incrementer />
      <p>Veniam aliqua cillum reprehenderit esse irure aliqua ipsum excepteur amet sit elit. Do esse sunt officia mollit ea. Culpa nisi proident et consectetur ex fugiat adipisicing anim pariatur.</p>
    </body>
  )
}

function Incrementer() {
  const [count, setCount] = useState(0);
 
  function increment() {
    setCount(count + 1);
  } 
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}
