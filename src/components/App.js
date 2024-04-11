
import React from "react";
import './../styles/App.css';

const App = () => {
   const [name, setName] = React.useState(""); // Using React.useState for state management

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
     <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      {name && <p>Hello, {name}! Nice to meet you.</p>}
    </div>
  );
}
export default App
