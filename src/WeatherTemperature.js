import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>

        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
