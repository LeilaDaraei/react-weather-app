import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hamburg" />
        <footer>
          {" "}
          This project was coded by Leila Daraei and is{" "}
          <a
            href="https://github.com/LeilaDaraei/react-weather-app"
            alt="repository"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on <a href="https://netlify.com">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}
