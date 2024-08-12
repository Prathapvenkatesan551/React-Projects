import React, { useState } from 'react';
import './App.css';

const WeatherDetails = ({ temp, city }) => {
  return (
    <div className='wet'>
      <div className='citydiv'> City : {city}</div>
      <div>Temperature :{temp}</div>
      <div className='errorM'></div>
      <div className='footer'>
        Designed by prathap Venkatesan
      </div>
    </div>
  );
};

function App() {
  const [temp, setTemp] = useState();
  const [city, setCity] = useState("");

  const search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba6dc4a5556d3ce4966e6c6b109305db&units=metric`;
    let ele=document.querySelector('.errorM');
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (res.ok) 
      {
        setTemp(data.main.temp);
        setCity(data.name);
        ele.innerHTML='';

      } 
      else 
      {
        setTemp();
        console.log(data.message);
        ele.innerHTML='Invalid city';
      }
    } 
    catch (error) {
      setTemp();
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    
  };

  return (
    <>
      <div className='head'>Weather application</div>
      <div className='cont'>
        <input type="text" value={city} onChange={handleChange} placeholder='Enter a City'/>
        <button onClick={search}>Search</button>
      </div>
      <WeatherDetails temp={temp} city={city} />
    </>
  );
}

export default App;
