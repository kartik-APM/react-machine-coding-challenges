import { useEffect, useRef, useState } from "react";

interface DataItem {
  Nation: string;
  Year: string;
  Population: string;
}

function App() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState<DataItem[]>([]);
  const [isPopulation, setIsPopulation] = useState(false);
  const originalData = useRef<DataItem[]>([]);
  // const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  /*
   const myDebounce = (func: (...args: any[]) => void, wait: number) => {
    return function (...args: any[]) {
      console.log(...args)
      if (timerId.current !== null) {
        clearTimeout(timerId.current);
      }
      timerId.current = setTimeout(function () {
        func(...args);
      }, wait);
    };
  }; 
  */

  useEffect(() => {
    fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        originalData.current = data.data;
      });
  }, []);

  useEffect(() => {
    const handleSearch = () => {
      if (!isPopulation)
        setData((prev) =>
          prev.filter((item, _) => item.Year.includes(inputVal))
        );
      else
        setData((prev) =>
          prev.filter((item) => String(item.Population).includes(inputVal))
        );
    };

    handleSearch();
  }, [inputVal, isPopulation]);

  const handleDelete = (idx: number) => {
    setData((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleReset = () => {
    setData(originalData.current);
    setInputVal("");
    setIsPopulation(false);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputVal}
        className="input"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <div className="checkbox-div">
        <input
          type="checkbox"
          checked={isPopulation}
          className="input"
          onChange={(e) => setIsPopulation(e.target.checked)}
        />
        <p>Search in Population</p>
      </div>
      <div className="table-title">
        <strong>Year</strong>
        <strong>Population</strong>
      </div>
      <div className="table">
        {data.map((item, idx) => (
          <div className="table-item">
            <div>
              <p>{item.Year}</p>
              <p>{item.Population}</p>
              <p onClick={() => handleDelete(idx)} className="delete">
                Delete
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
