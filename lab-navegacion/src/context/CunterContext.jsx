import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function useCounter() {
  return useContext(CounterContext);
}

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const inc = () => setCount((c) => c + 1);
  const reset = () => setCount(0);

  const value = { count, inc, reset };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}
