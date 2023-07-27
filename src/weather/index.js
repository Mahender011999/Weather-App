import React, { useState } from "react";
import "./index.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [result,setResult]=useState('')

  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then(data=>{
        const kelvin = data.main.temp 
        const celsius = kelvin - 273.15
        setResult("Temperature at "+city+" "+Math.round(celsius)+" °C")
        setCity('');
      }).catch(err=>console.log(err));
  };
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-tittle">Weather App</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="city"
            value={city}
            onChange={changeHandler}
            className="form"
          />
          <br /> <br />
          <input type="submit" value="Get Temperature" className="submit" />
        </form>
        <h2 className="heading">{result}</h2>
      </div>
    </div>
  );
};

export default Weather;
