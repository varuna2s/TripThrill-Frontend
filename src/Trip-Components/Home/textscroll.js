// import {useState,useEffect} from "react";
import React from "react"
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './home.css'

const contentStyle = {
    height: '16px',
    color: 'white',
    lineHeight: '16px',
    textAlign: 'center',
    position:'absolute',
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
function Carousel1() {
  
  // const  [apicaro, setapicaro] = useState(null);

  // // + adding the use

  // useEffect(() =>{
  //   getData();

  //   //we will use async/await to fecth this data
  //   async function getData() {
  //     const response = await fetch("http://127.0.0.1:8000/homepage/carousel/");
  //     const data = await response.json();


  //     //store th data into the our apicaro varialble
  //     setapicaro(data);
  //   }

  // },[]);

  return (
    
    <>
    {/* {apicaro && (
      <Carousel {...settings} autoplay>
        {apicaro.map(( index) =>(
          <div style={contentStyle}>
          <div>
            <div className="scroll-head">{index.scroll_head}</div>
            <div className="scroll-text">{index.scroll_text}</div>
          </div>
          </div>
        ))}
      </Carousel>
      )} */}
        <Carousel {...settings} autoplay>
      <div style={contentStyle}>
          <div className="scroll-head">Pleasant & Private Homes</div>
          <div className="scroll-text">GET THE BEST DEAL FROM OUR LISTING</div>
        </div>
        <div style={contentStyle}>
          <div className="scroll-head">Experience Serenity & Luxury</div>
          <div className="scroll-text">GET THE BEST DEAL FROM OUR LISTING</div>
        </div>
        <div style={contentStyle}>
          <div className="scroll-head">Vacation Rich of Flora & Fauna</div>
          <div className="scroll-text">GET THE BEST DEAL FROM OUR LISTING</div>
        </div>
        </Carousel>
    </>
  );
}
export default Carousel1;