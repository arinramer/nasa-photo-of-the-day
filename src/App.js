import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Title from "./Title";
import Desc from "./Desc";
import Photo from "./Photo";

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Kbf3cEjUlsBBGEyox2tPzFVhqKAvRSQaQMrOr3JS')
    .then(res => {
      setData(res.data);
    })
  },[]);
  console.log(data);
  return (
    <div className="App">
      <Title title={data.title}/>
      <Photo photo={data.hdurl}/>
      <Desc desc={data.explanation}/>
    </div>
  );
}

export default App;
