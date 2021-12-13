import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import store from './redux/store';
import './static/css/style.css';
import Navbar from "./Trip-Components/Navbar/index";
import Product from './container/ecommerce/product/Products'
import Footer from "./Trip-Components/Footer/index"
import  Home  from "./Trip-Components/Home/home";
import  About  from "./Trip-Components/Pages/About";
import  Blog  from "./Trip-Components/Pages/Blog";
import  Homestay  from "./Trip-Components/Pages/homestay";
import PropertyTab from "./Trip-Components/propertytab";
import PropertyDetails from './Trip-Components/PropertyDetails';
import { property_detail_1,property_detail_2,property_detail_3 } from "./Data/property_detail_data";
import Testimonial from "./Trip-Components/Testimonials/TwoColumnWithImageAndProfilePictureReview";

// import React, { useEffect, useState } from 'react';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { hot } from 'react-hot-loader/root';
// import { Provider, useSelector } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
// import { ConfigProvider } from 'antd';
// import store from './redux/store';
// import Admin from './routes/admin';
// import Auth from './routes/auth';
// import './static/css/style.css';
// import config from './config/config';
// import Navbar from "./layout/index";
// import Product from './container/ecommerce/product/Products'
// // import SignIn from './container/profile/authentication/overview/FbSignIn';
// import ProtectedRoute from './components/utilities/protectedRoute';

// const { theme } = config;

// const ProviderConfig = () => {
//   const { rtl, isLoggedIn, topMenu, darkMode } = useSelector(state => {
//     return {
//       darkMode: state.ChangeLayoutMode.data,
//       rtl: state.ChangeLayoutMode.rtlData,
//       topMenu: state.ChangeLayoutMode.topMenu,
//       isLoggedIn: state.auth.login,
//     };
//   });

//   const [path, setPath] = useState(window.location.pathname);

//   useEffect(() => {
//     let unmounted = false;
//     if (!unmounted) {
//       setPath(window.location.pathname);
//     }
//     // eslint-disable-next-line no-return-assign
//     return () => (unmounted = true);
//   }, [setPath]);

//   return (
//     <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
//       <ThemeProvider theme={{ ...theme, rtl, topMenu, darkMode }}>
//         <Router basename={process.env.PUBLIC_URL}>
//           {!isLoggedIn ? <Route path="/" component={Auth} /> : <ProtectedRoute path="/admin" component={Admin} />}
//           {isLoggedIn && (path === process.env.PUBLIC_URL || path === `${process.env.PUBLIC_URL}/`) && (
//             <Redirect to="/admin" />
//           )}
//         </Router>
//       </ThemeProvider>
//     </ConfigProvider>
//   );
// };

function App() {
  return (
   <Router>
    <Provider store={store}>
     {/* <ProviderConfig /> */}
      <Navbar />
      <Route exact path="/"><Home /></Route>
      <Route  path="/homestay"  ><Homestay /></Route>
      <Route path="/about" ><Testimonial /></Route>
      <Route path="/blog"  ><Blog /></Route>
      <Route path="/property1"  ><PropertyDetails  {...property_detail_1} /></Route>
      <Route path="/property2"  ><PropertyDetails  {...property_detail_2} /></Route>
      <Route path="/property3"  ><PropertyDetails  {...property_detail_3} /></Route>
      <Route path="/protab"  ><PropertyTab /></Route>
      <Route path="/product"  ><Product /></Route>
      {/* <Product /> */}
      <Footer />
    </Provider>
    </Router>
  );
}

export default hot(App);
