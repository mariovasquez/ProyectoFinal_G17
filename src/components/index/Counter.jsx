import React, { useState, useRef, useEffect} from "react";

const Counter = ({ start = 0, end, timer = 50 }) => {
  const [state, setstate] = useState(null);
  const ref = useRef(start);

  const accumulator = end / 200;

const updateCounterState = () => {
  if (ref.current < end) {
    const result = Math.ceil(ref.current + accumulator);
    if(result > end) return setstate(end);
    setstate(result);
    ref.current = result;
  }
  setTimeout(updateCounterState, timer);
}

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }

    return () => (isMounted = false);
    }, [end, start]);

  return <div>{state}</div>;
}
 
export default Counter;