import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("slategray");

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="bg-red-300 w-auto  flex align-bottom mt-auto rounded-3xl text-center">
          <button
            onClick={() => setColor("red")}
            className="py-4 px-4 m-4 rounded-xl bg-red-700 "
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="py-4 px-4 m-4 rounded-xl bg-blue-700 "
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="py-4 px-4 m-4 rounded-xl bg-green-700 "
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="py-4 px-4 m-4 rounded-xl bg-yellow-400 "
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#2e2111")}
            className="py-4 px-4 m-4 rounded-xl bg-orange-900"
          >
            Brown
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
