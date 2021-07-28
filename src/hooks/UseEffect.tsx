import React, { useEffect, useState } from "react";

export function UseEffect() {
  // state
  const [counter, setCounter] = useState(0);

  //? This way this hook will be called every time some state is updated on our page
  useEffect(() => {
    console.log("rodou");
  });

  //? This way this hook will be called every time some state is updated on our page
  useEffect(() => {
    console.log("rodou");
  }, []);

  //? This way this hook is only called when the component is loaded once
  useEffect(() => {
    console.log("rodou");
  }, [counter]);

  //? This way this hook is called when just before the user leaves the screen of that component
  useEffect(() => {
    console.log("rodou");
    return () => {
      console.log("desmontou");
    };
  }, [counter]);

  //? How to make asynchronous request inside this hook, a recommended way is this one which is an auto invoked function
  // useEffect(() => {
  //   (async () => {
  //     await services.getUsers(props.userID);
  //   })();
  // }, [props.userID]);

  function handlePlusOne() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlusOne}>+</button>
    </div>
  );
}
