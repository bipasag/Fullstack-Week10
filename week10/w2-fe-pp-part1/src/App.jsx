import React from "react";
import "./App.css";
import IdCard from "./Idcard.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={176}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

    </div>
  );
}

export default App;
