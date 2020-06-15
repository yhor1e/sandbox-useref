import React, { useState, useRef } from 'react';

const App = (props) => {
  const [counter, setCounter] = useState({ value: 0, dummy: true });

  let ref = useRef(0);
  let notRef = 0;

  return (
    <>
      <h1>{props.heading}</h1>
      <p>counter.value {counter.value}</p>
      <p>counter.dummy {counter.dummy.toString()}</p>
      <button
        onClick={() => {
          console.log('-------- clicked --------');
          ref.current = ref.current + 1;
          notRef = notRef + 1;
          setCounter({ value: counter.value + 1, dummy: !counter.dummy });
          console.log(counter);
          console.log('ref.current: ' + ref.current);
          console.log('not ref: ' + notRef);
        }}
      >
        +1
      </button>
    </>
  );
};
export default App;
