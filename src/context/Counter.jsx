import React from "react";
import { useState } from "react";
import { createContext } from "react";

const MyContext = createContext();

 function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyContext.Provider value={[count, setCount]}>
        {props.children}
      </MyContext.Provider>
    </div>
  );
}

export default { Counter, MyContext };
