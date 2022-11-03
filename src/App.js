import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./styles.css";
import {BASE_URL, API_KEY} from './constants';
import Image from './Image'
import Calendar from 'react-calendar'
import moment from 'moment'

function App() {
  
  const [apod, setApod] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState(false)

const changeDate = (e) => {
  setDate(e)
  console.log(date)
  toggleChange()
}

const toggleChange = (e) => {
  setSelected(!selected)
}

useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${moment(date).format('YYYY-MM-DD')}`)
  .then(res => {
    console.log(res)
    setApod(res.data);
  }).catch(err => {
    setError("An Error Occurred");
  })
}, [date])
  
  return (
    <div className="container">
      <div className="header">
        <h1>NASA Photo Of The Day</h1>
        <div className="nasa-logo-container">
          <img 
          alt='nasa-logo'
          id='nasa-logo'
          src= "https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg"
          />  
        </div>
      </div>
      <div className="mid-container">
        <div className="date-selector">
          <div className="calendar-container">
            { selected === true ? <> <h3>Select A Date!</h3>
            <Calendar value={date} onChange={changeDate}/>
            </> : <button id="toggle-date" onClick={toggleChange}>Change Date</button>}
            <p>Current selected date is <b>{moment(date).format('MMMM Do YYYY')}</b></p>  
          </div>
        </div>
      </div>
      <Image apod={apod}/>
    </div>
  );
}

export default App;
