import { useEffect, useRef, useState } from "react";

const lights = [
  { color: "red", time: 5000 },
  { color: "yellow", time: 500 },
  { color: "green", time: 4000 },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  let timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      if (activeIndex === 2) setActiveIndex(0);
      else setActiveIndex((prev) => prev + 1);
    }, lights[activeIndex].time);

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [activeIndex]);

  return (
    <div className="container">
      <h2>Traffic Light</h2>
      <div className="light-container">
        {lights.map((light, index) => (
          <div
            className="light"
            style={{
              backgroundColor: `${
                index === activeIndex ? lights[activeIndex].color : ""
              }`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
