import React, { useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timed = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timed);
  }, [value]);

  return debouncedValue;
}
