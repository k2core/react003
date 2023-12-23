import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, updateTime] = useState(new Date());
  useEffect(() => {
    // timer updation logic
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <div className="elementcontainer">
        <h1>Digital Clock</h1>
        <div className="timeparent">
          <div className="timecontainer">
            {/* 문자열을 예쁘게 인쇄해 보세요 */}
            <span className="time">{time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
