import { useState, useRef, useEffect } from "react";

export const useMeasure = () => {
  const ref = useRef();

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [resizeObsv] = useState(() => {
    return new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });

  useEffect(() => {
    if (ref.current) {
      resizeObsv.observe(ref.current);
    }

    return () => resizeObsv.disconnect();
  }, [resizeObsv]);

  return [{ ref }, bounds];
};
