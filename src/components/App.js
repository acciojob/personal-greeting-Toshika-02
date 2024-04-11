import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div>
        {/* Do not remove the main div */}
        { input ? <p>Hello {input}!</p>:<p>Enter your name:</p> }
        <input type="text" onInput = {(event) => setInput(event.target.value)}/>
    </div>
  )
}

export default App
