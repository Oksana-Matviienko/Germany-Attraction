import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {
  const [place, setPlace] = useState(0);
  const {id, title, image, description, website} = data[place];
  const [showMore, setShowMore] = useState(false);
 const previousPlace = () =>{
   setPlace((place=>{
     place--;
     if (place < 0){
       return data.length-1;
     }
     return place;
   }))
 }
 const nextPlace =() =>{
   setPlace ((place =>{
     place++;
     if (place > data.length -1){
       place = 0;
     }
     return place;
   }))
 }

  return (
    <div>
      <div className="container">
      <h1> {data.length} places to visit in Germany </h1>
      </div>
      <div className="container">
<h2>{id} - {title}</h2>
      </div>
      <div className="container">
<img src={image} width="600px" height="400px" alt="Germany seesigths"/>
      </div>
      <div className="container description">
<p>{showMore ? description : description.substring(0,300)+ "..."}
<button className="btnshow" onClick={()=>setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>
      </div>
      <div className="container">
<p> Website: {website}</p>
    </div>
    <div className="btn">
    <button onClick={previousPlace}>Previous</button>
    <button onClick={nextPlace}>Next</button>
    </div>
    <div className="container education">
      <p>All information was taken from the website https://www.tripzaza.com/en/destinations/dostoprimechatelnosti-germanii
for educational purposes only </p>
    </div>
    </div>
  );
}

export default App;
