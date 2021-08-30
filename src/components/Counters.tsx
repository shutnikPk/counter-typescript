import React, { FC } from "react";
import Counter, { CounterProps } from "./Counter";

export interface CountersProps {
  counters: [];
}

const Counters: FC<CountersProps> = (counters) => {
  return (
    <div>
      {counters.map((counter: CounterProps) => (
        <Counter key={counter.id} {...counters} />
      ))}
    </div>
  );
};

export default Counters;
