import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Title from "./Title";
import Desc from "./Desc";
import Photo from "./Photo";
import styled from 'styled-components';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Container
} from 'reactstrap';

const Headr = styled.h1`
  margin-bottom: 2%;
  color: #FFFFFF;
  text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
`;

const bg = {
  backgroundColor: "#2e3131",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
}

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
      <Container>
        <Headr>NASA photo of the day</Headr>
        <Photo photo={data.hdurl}/>
        <Card style={bg}>
          <CardBody>
            <CardTitle><Title title={data.title}/></CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText><Desc desc={data.explanation}/></CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
