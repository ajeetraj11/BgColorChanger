import { useState } from "react"

function App() {
  const [color, setColor]=useState("black")
  
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-3xl">
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "Red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
