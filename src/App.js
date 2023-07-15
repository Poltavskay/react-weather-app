import React from "react"
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          This project was coded by Galina Poltavskay and is{" "}
          <a
            href="https://github.com/Poltavskay/react-site"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


