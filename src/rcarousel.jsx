import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Kalpet2 from './Images/kalpet2.webp';
import Munnar3 from './Images/munnar3.webp';
import Munnar4 from './Images/munnar4.webp';
import Munnar5 from './Images/munnar5.webp';
// import "./LandingPage.css";


function App() {
  return (
    <Carousel interval={4000} transitionTime={800} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={true} showThumbs={false} animationHandler="fade" swipeable={true}>
    <div>
      <img src={Kalpet2} alt="munnar" />
    </div>
    <div>
      <img src={Munnar3} alt="munnar" />
    </div>
    <div>
      <img src={Munnar4} alt="munnar" />
    </div>
    <div>
      <img src={Munnar5} alt="munnar" />
    </div>
    </Carousel>
);
}
export default App;