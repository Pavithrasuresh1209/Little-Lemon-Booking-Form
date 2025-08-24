import React from "react";
import BookingForm from "./BookingForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Little Lemon Restaurant</h1>
        <p>Book your table below</p>
      </header>
      <main>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
