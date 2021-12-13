import React, {Component} from 'react';
import "./tab.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
        tab_panel_details_1,
        tab_panel_details_2,
        tab_panel_details_3,
        tab_panel_details_4,
        tab_panel_details_5, } from "../../Data/tabdata"


const style1 = {
  textAlign: 'center',
  'font-weight':'700',
  background: 'transparent',
  
};
 const properties = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  indicators: false,
};

export default class CityTabs extends Component { 
    
    //asigning variable for storing
    state = {
        propertytypes : []
    };

    async componentDidMount() {
        try {
            //fecthing data rom backend
            const res = await fetch('http://127.0.0.1:8000/homepage/propertytype/');
            const propertytypes = await res.json();
            this.setState({
                propertytypes
            });
        }catch (e) {
            console.log(e);
        }
    }

  render() {
    return ( 
      <>
        <Tabs style={{marginTop:"50px", marginBottom:"20px",}}>
            {/* <TabList className="Tab-list-class sticky">
                {this.state.propertytypes.map(data =>
                    <Tab className="Tab-city">
                        <div className="Tab-Button" key={data.id}>
                            {data.PropertyTypeName}
                        </div>
                    </Tab>
                )}
                
            </TabList> */}
             <TabList className="Tab-list-class sticky">
             <Tab className="Tab-city">
                    <div className="Tab-Button">
                        Villa
                    </div>
                </Tab>
            <Tab className="Tab-city">
                    <div className="Tab-Button">
                        Apartment
                    </div>
                </Tab>
                <Tab className="Tab-city">
                    <div className="Tab-Button">
                        Homestay
                    </div>
                </Tab>
                <Tab className="Tab-city">
                    <div className="Tab-Button">
                        Resorts
                    </div>
                </Tab>
                <Tab className="Tab-city">
                    <div className="Tab-Button">
                        Cottages
                    </div>
                </Tab>
                </TabList>
            <TabPanel >
                <div className="lpcv-row">
                    {
                    tab_panel_details_1.map(item =>
                        <div className={`lpcv-column `}>
                            <Slide {...properties} >
                                {
                                    item.slide_image.map(itemdata =>
                                        <div style={{style1,  }}>
                                            <a href={`${item.property_link}`}>
                                                <img  className="slider" src={itemdata.image_src} alt="slide" />
                                            </a>
                                        </div>
                                    )
                                }
                            </Slide>
                            <div className="tab-text-main-div">
                                <div className="tab-property-name-text">
                                    {item.tab_property_name}
                                </div>
                                <div className="tab-property-price-text">
                                    ₹{item.tab_property_price}
                                </div>
                            </div>
                            <div className="tab-text-property-place">
                                <i style={{marginTop:"4px"}} className="fas fa-map-marker-alt" />&nbsp;&nbsp;{item.tab_property_city}
                            </div>
                        </div>
                    )}
                </div>
            </TabPanel>
            <TabPanel >
                <div className="lpcv-row">
                    {
                    tab_panel_details_2.map(item =>
                        <div className={`lpcv-column `}>
                            <Slide {...properties} >
                                {
                                    item.slide_image.map(itemdata =>
                                        <div style={{style1,  }}>
                                            <a href={`${item.property_link}`}>
                                                <img  className="slider" src={itemdata.image_src} alt="slide" />
                                            </a>
                                        </div>
                                    )
                                }
                            </Slide>
                            <div className="tab-text-main-div">
                                <div className="tab-property-name-text">
                                    {item.tab_property_name}
                                </div>
                                <div className="tab-property-price-text">
                                    ₹{item.tab_property_price}
                                </div>
                            </div>
                            <div className="tab-text-property-place">
                                <i style={{marginTop:"4px"}} className="fas fa-map-marker-alt" />&nbsp;&nbsp;{item.tab_property_city}
                            </div>
                        </div>
                    )}
                </div>
            </TabPanel>
            <TabPanel >
                <div className="lpcv-row">
                    {
                    tab_panel_details_3.map(item =>
                        <div className={`lpcv-column `}>
                            <Slide {...properties} >
                                {
                                    item.slide_image.map(itemdata =>
                                        <div style={{style1,  }}>
                                            <a href={`${item.property_link}`}>
                                                <img  className="slider" src={itemdata.image_src} alt="slide" />
                                            </a>
                                        </div>
                                    )
                                }
                            </Slide>
                            <div className="tab-text-main-div">
                                <div className="tab-property-name-text">
                                    {item.tab_property_name}
                                </div>
                                <div className="tab-property-price-text">
                                    ₹{item.tab_property_price}
                                </div>
                            </div>
                            <div className="tab-text-property-place">
                                <i style={{marginTop:"4px"}} className="fas fa-map-marker-alt" />&nbsp;&nbsp;{item.tab_property_city}
                            </div>
                        </div>
                    )}
                </div>
            </TabPanel>
            <TabPanel >
                <div className="lpcv-row">
                    {
                    tab_panel_details_4.map(item =>
                        <div className={`lpcv-column `}>
                            <Slide {...properties} >
                                {
                                    item.slide_image.map(itemdata =>
                                        <div style={{style1,  }}>
                                            <a href={`${item.property_link}`}>
                                                <img  className="slider" src={itemdata.image_src} alt="slide" />
                                            </a>
                                        </div>
                                    )
                                }
                            </Slide>
                            <div className="tab-text-main-div">
                                <div className="tab-property-name-text">
                                    {item.tab_property_name}
                                </div>
                                <div className="tab-property-price-text">
                                    ₹{item.tab_property_price}
                                </div>
                            </div>
                            <div className="tab-text-property-place">
                                <i style={{marginTop:"4px"}} className="fas fa-map-marker-alt" />&nbsp;&nbsp;{item.tab_property_city}
                            </div>
                        </div>
                    )}
                </div>
            </TabPanel>
            <TabPanel >
                <div className="lpcv-row">
                    {
                    tab_panel_details_5.map(item =>
                        <div className={`lpcv-column `}>
                            <Slide {...properties} >
                                {
                                    item.slide_image.map(itemdata =>
                                        <div style={{style1,  }}>
                                            <a href={`${item.property_link}`}>
                                                <img  className="slider" src={itemdata.image_src} alt="slide" />
                                            </a>
                                        </div>
                                    )
                                }
                            </Slide>
                            <div className="tab-text-main-div">
                                <div className="tab-property-name-text">
                                    {item.tab_property_name}
                                </div>
                                <div className="tab-property-price-text">
                                    ₹{item.tab_property_price}
                                </div>
                            </div>
                            <div className="tab-text-property-place">
                                <i style={{marginTop:"4px"}} className="fas fa-map-marker-alt" />&nbsp;&nbsp;{item.tab_property_city}
                            </div>
                        </div>
                    )}
                </div>
            </TabPanel>
        </Tabs>
      </>
    );
  }
}


  
  