import React, { useState } from "react";
import Counter, { CounterProps } from "./components/Counter";
import Counters from "./components/Counters";

function App() {
  const handleIncriment = (productId: number) => {
    const newState = counters.map((e) => {
      if (e.id === productId) {
        e.value++;
      }
      return e;
    });
    setCounters(newState);
  };

  const handleDicriment = (productId: number) => {
    const newState = counters.map((e) => {
      if (e.id === productId) {
        e.value === 0 ? (e.value = 0) : e.value--;
      }
      return e;
    });
    setCounters(newState);
  };

  const initialState: CounterProps[] = [
    {
      value: 0,
      id: 1,
      name: "Banana",
      onDicriment: handleDicriment,
      onIncriment: handleIncriment,
    },
    {
      value: 8,
      id: 2,
      name: "Aple",
      onDicriment: handleDicriment,
      onIncriment: handleIncriment,
    },
    {
      value: 0,
      id: 3,
      name: "PineAple",
      onDicriment: handleDicriment,
      onIncriment: handleIncriment,
    },
  ];
  const [counters, setCounters] = useState(initialState);

  // const handleDelete = (deletedId: number) => {
  //   const newState = counters.filter((e) => e.id !== deletedId);
  //   setCounters(newState);
  // };

  // const goods = () => counters.reduce((a, c) => a + c.value, 0);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <Counters counters={counters} />
      </main>
    </div>
  );
}

export default App;
