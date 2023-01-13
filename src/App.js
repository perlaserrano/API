// import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import getGifs from './services/getGifs';


function App() {
 const[gifs,setGifs] = useState([])
 
 useEffect(function() {
 getGifs({keyword: 'rick'}).then(gifs => setGifs(gifs))
 
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <section className="App-content">
         {
          gifs.map(singleGif =>  <img src={singleGif.url}/>)
         }
         {/* <button onClick={()=>setGifs(diferentGifs)}>Cambiar gifs</button> */}
        </section>
     
      </header>
    </div>
  );
}

export default App;
