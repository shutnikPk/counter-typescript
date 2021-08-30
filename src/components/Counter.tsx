import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export interface CounterProps {
  id: number;
  value: number;
  name: string;
  onDicriment: (userId: number) => void;
  onIncriment: (userId: number) => void;
  onDelete?: (userId: number) => void;
}

const Counter: FC<CounterProps> = ({
  id,
  value,
  name,
  onDicriment,
  onIncriment,
  onDelete,
}) => {
  const formValue = () => {
    return value === 0 ? "Zero" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    return (classes += value === 0 ? "danger" : "primary");
  };

  return (
    <>
      <h6>{name}</h6>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => onIncriment(id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDicriment(id)}
        className="btn btn-secondary btn-sm"
      >
        Dicrement
      </button>
      {/* <button onClick={() => onDelete(id)} className="btn btn-danger btn-sm">
        Delete
      </button> */}
    </>
  );
};

export default Counter;
