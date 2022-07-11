/** @format */

import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [tim, setTim] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const stopTim = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTim((tim) => tim + 1);
    });
    return () => {
      stopTim();
    };
  }, []);
  return (
    <div>
      <div>MutableRef</div>
      <div>
        <button onClick={() => stopTim()}>stop tim</button>
      </div>
    </div>
  );
};

export default MutableRef;
