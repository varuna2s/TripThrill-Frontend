import React, { useState, useEffect, Fragment  } from "react";
import { NavLink,Link } from "react-router-dom";
import "./navbar.css";
 import Logo from '../../Images/TripThrill-Logo-1.png';
//  import { slide as Menu } from 'react-burger-menu'
 import ToggleBar from './Toggle'
 import { Modal,Button } from 'antd';
 import SignLogBox from "./Login/Sign_Log";
 
 
function NavBar() {
  

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img  className="nav-logo" src={Logo} alt='logo' />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/homestay"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {/* <i class="fas fa-home"> </i>
                &nbsp; */}
                Homestays
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {/* <i class="fas fa-map-marker-alt"></i>
                &nbsp; */}
                Locations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {/* <i class="fas fa-address-card"></i>
                &nbsp; */}
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                {/* <i class="fas fa-book"></i>
                &nbsp; */}
                Trip Dairy
              </NavLink>
            </li>
            </ul>
            {/* <li className="nav-item"> */}
            <div className="nav-login" style={{marginRight:"4.5%"}}>
            {isAuth === true ? (
                <Fragment>
                  <Link to='/logout'>Logout</Link>
                </Fragment>
              ) : (
                <>
                 <Button  
                  style={{marginBottom:"-6px", border:"2px solid black"}}
                      activeClassName="active"
                      className="nav-links" 
                      onClick={showModal}
                    >
                      <div style={{}}>
                    <i class="fas fa-user"></i>
                    &nbsp;
                    Login
                  </div>
              </Button>
              <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <SignLogBox />
              </Modal> 
              </>
              )}
              </div>
        
          <div className="Togglebar">
          <Button  
               style={{marginTop:"-6px"}}
                  activeClassName="active"
                  className="nav-links" 
                  onClick={showModal}
                >
                  <div >
                    <i  class="fas fa-user"></i>
                    {/* <i style={{fontSize:"30px"}} class="far fa-user"></i> */}
                  </div>
              </Button>
              <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <SignLogBox />
              </Modal>
            
          <ToggleBar />
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//           <img style={{width:'120px',marginLeft:'30px' }} src={Logo} alt='logo' />
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/homestay"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <i class="fas fa-home"> HomeStays</i>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <i class="fas fa-book"> TripDairy</i>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <i class="fas fa-map-marker-alt"> Locations</i>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 <i class="fas fa-address-card"> About</i>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <Button  
//                 activeClassName="active"
//                 className="nav-links" 
//                 onClick={showModal}
//               >
//                 <div style={{fontSize:"1.2rem"}}>
//                   <i class="fas fa-user"></i>
//                   Login
//                 </div>
//               </Button>
//               {/* <NavLink
//                 exact
//                 to="/login"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={showModal}
//               >
//                 <i class="fas fa-user">  Login</i>
//               </NavLink> */}
//               <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//                 <SignLogBox />
//               </Modal>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
// export default NavBar;






// import React, { useState } from 'react';
// import { Modal, Button } from 'antd';

// const App = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };

// ReactDOM.render(<App />, mountNode);




// import React from 'react';
// import './navbar.css'
// import Logo from '../../Images/TripThrill-Logo-1.png'

// export default class NavBar extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.listener = null;
//       this.state = {
//         status: "top"
//       };
//     }
  
//     componentDidMount() {
//       this.listener = document.addEventListener("scroll", e => {
//         var scrolled = document.scrollingElement.scrollTop;
//         if (scrolled >= 10) {
//           if (this.state.status !== "nav") {
//             this.setState({ status: "nav" });
//           }
//         } else {
//           if (this.state.status !== "top") {
//             this.setState({ status: "top" });
//           }
//         }
//       });
//     }
  
//     componentDidUpdate() {
//       document.removeEventListener("scroll", this.listener);
//     }
  

//     render() {
//         return (
//             <>
//                 <ul   style={{
//                               backgroundColor: this.state.status === "top" ? "#d2c0a1c9" : "white",
//                               'z-index': '9',
//                               position: "fixed",
                          
//                               'list-style-type': 'none',
//                                width: '100%'
//                           }} >
//                     <div className="active">
//                         <img style={{width:'100px'}} src={Logo} alt='logo' />
//                         <li ><div style={{ border: '1px solid grey', borderRadius: '10px' }}><a style={{color: this.state.status === "top" ? "white" : "black"}} href="#home"> Login</a></div></li>
//                         <li><a style={{color: this.state.status === "top" ? "white" : "black"}} href="#home">About</a></li>
//                         <li><a style={{color: this.state.status === "top" ? "white" : "black"}} href="#news">Locations</a></li>
//                         <li><a style={{color: this.state.status === "top" ? "white" : "black"}} href="#contact">TripDairy</a></li>
//                         <li><a style={{color: this.state.status === "top" ? "white" : "black"}} href="#about">Home Stays</a></li>
//                     </div>
//                 </ul>
//             </>
//         );
//     }
// }

