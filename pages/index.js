import { React, useState } from 'react';

export default function Home(){
  return (
    <body>
      <h1>Ideia revolucionária e bilionária!!!</h1>
      <Incrementer />
      <p>Veniam aliqua cillum reprehenderit esse irure aliqua ipsum excepteur amet sit elit. Do esse sunt officia mollit ea. Culpa nisi proident et consectetur ex fugiat adipisicing anim pariatur.</p>
      <small>
        Excepteur amet culpa aliqua enim et reprehenderit exercitation ea non amet dolore. Minim nisi mollit velit nulla qui cillum ad et nisi. Occaecat adipisicing veniam laboris anim laborum duis ut commodo ad mollit sunt cupidatat culpa. Pariatur commodo est Lorem anim enim cupidatat. Incididunt eiusmod anim quis nulla amet commodo ea sit ut pariatur aute veniam. Id commodo id ullamco sunt anim in ad ipsum do ipsum tempor nisi ad laboris. Do id incididunt mollit do veniam mollit mollit in occaecat sit nisi laboris magna.
      </small>
      <big>Laborum nulla et exercitation adipisicing. Nulla et eu irure fugiat. Culpa ex ut ad deserunt aliquip dolor. Eu duis officia ad exercitation occaecat Lorem non magna eiusmod reprehenderit cupidatat adipisicing enim.</big>
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
