import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./index.css";

const socket = io("http://localhost:5000");

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("text-update", (newText) => {
      setText(newText);
    });

    return () => {
      socket.off("text-update");
    };
  }, []);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    socket.emit("text-change", newText);
  };

  return (
    <div className="editor-container">
      <h1>📝 Real-Time Collaborative Editor</h1>
      <textarea value={text} onChange={handleChange} />
    </div>
  );
}

export default App;
