import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "./component/HomeComponent";
import './style/global/global.scss';
import ScrollOut from "scroll-out";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    ScrollOut({
      /* options */
      targets:".fadeInUp, .fadeInLeft, .fadeInRight",
      // once: true,
    });
  },[])
  return (
    <div className="App">
      <HomeComponent/>
    </div>
  );
}

export default App;
