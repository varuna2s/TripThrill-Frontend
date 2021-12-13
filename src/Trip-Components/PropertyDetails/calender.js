import React, {useState} from 'react';
import 'react-dates/initialize';
import { DateRangePicker,DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import moment from 'moment';
import Munnar1 from '../../Images/thumbnail-10.jpg';
import Munnar2 from '../../Images/thumbnail-13.jpg';
import Munnar3 from '../../Images/thumbnail-14.jpg';
import Munnar4 from '../../Images/thumbnail-15.jpg';
import Munnar5 from '../../Images/thumbnail-17.jpg';
import {Link} from "react-router-dom"
import '../Home/book1.css';
import './propertydetails.css';
import {Input,Row,Col,Card,Collapse} from 'antd';


const { Panel } = Collapse;
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text.slice(0, 202) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
      };


class Calander extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            kidsCount: 1,
            petsCount: 0,
            parentsCount: 0,
            startDate: null,
            endDate: null,
            focusedInput: null,
            focusedInputLeftCol: START_DATE,
            redirectToTrips: false,
            bookedDates: []

        };
        this.inputNode = React.createRef();
        this.dropdownNode = React.createRef();
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.dayBlocked = this.dayBlocked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
       }
    
    //    loadData() {
    //     let promise = new Promise((resolve, reject) => {
    //         this.props.fetchTreehouse(this.props.match.params.treehouseId);
    //     });
    //     return promise;
    // }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e) {
        if (this.dropdownNode.current.contains(e.target)) {
            this.openDropdown();
            return;
        } else if (this.inputNode.current.contains(e.target)) {
            this.toggleDropdown();
        } else {
            this.closeDropdown();
        }
    }

    toggleDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    openDropdown() {
        this.setState({ dropdownOpen: true });
    }

    closeDropdown() {
        this.setState({ dropdownOpen: false });
    }

    increaseCount(type) {
        // e.stopPropagation();
        let newVal = this.state[type] + 1;
        this.setState({ [type]: newVal })
    }

    decreaseCount(type) {
        // e.stopPropagation();
        let newVal = this.state[type] - 1;
        if (type === "kidsCount") {
            if (this.state[type] > 1) {
                this.setState({ [type]: newVal })
            }
        } else {
            if (this.state[type] > 0) {
                this.setState({ [type]: newVal })
            }
        }
    }
    
    toggleOverlay(name) {
        let photos = ["photo1Overlay", "photo2Overlay", "photo3Overlay", "photo4Overlay", "photo5Overlay"];
        photos.forEach(photo => {
            if (photo !== name) {
                this.setState({ [photo]: true })
            }
        })
    }

    onFocusChange() {
        this.setState({
            focusedInputLeftCol: this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE
        });
    }

    dayBlocked(day) {
        let { bookings, treehouse } = this.props;

        for (let i = 0; i < bookings.length; i++) {
            if (bookings[i].treehouse_id === treehouse.id) {
                if (this.state.startDate
                        && this.state.startDate.isBefore(bookings[i].start_date, 'day')) {
                    if (day.isBetween(bookings[i].start_date, bookings[i].end_date, 'day', "[]")) {
                        return true;
                    } else if (day.isAfter(bookings[i].end_date, 'day')) {
                        return true;
                    } else if (day.isSame(bookings[i].end_date, 'day')) {
                        return true;
                    };
                } else {
                    if (day.isBetween(bookings[i].start_date, bookings[i].end_date, 'day', "[]")) {
                        return true;
                    };
                };
            }
        }
        return false;
    }

    handleSubmit(e) {
        e.preventDefault();

        // If all fields are filled out but user is not logged in, open modal
        // and send message that they need to sign up / log in
        let { currentUser } = this.props;
        if (!this.state.startDate || !this.state.endDate) {
            this.setState({ focusedInput: START_DATE });
        } else  {
            if (!currentUser.id) {
            let message = (
                <div>
                    <div id="sign-up-to-book">Sign up to book</div>
                    <div id="moments-away-from-booking">You're moments away from booking your stay.</div>
                </div>
            );
            this.props.openModal('Sign up', message)
            } else {
            // If all fields are filled out and user is logged in, send the booking request
                let treehouse_id = this.props.match.params.treehouseId;
                let start_date = this.state.startDate.format('YYYY/MM/DD');
                let end_date = this.state.endDate.format('YYYY/MM/DD');
                let newBooking = {
                    guest_id: currentUser.id,
                    treehouse_id,
                    start_date,
                    end_date
                };
                this.props.createBooking(newBooking);
                this.setState({ redirectToTrips: true });
            };
        };
    }

    render() {

        let chevronDirection;
        if (this.state.dropdownOpen) {
            chevronDirection = "fas fa-chevron-up";
        } else {
            chevronDirection = "fas fa-chevron-down";
        }

        // Conditional to fade out the minus circle on the
        // dropdown menu
        let kidsMinusSignColorClass = (this.state.kidsCount === 1) ? "search-box-minus-circle" : "search-box-plus-circle";
        let petsMinusSignColorClass = (this.state.petsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";
        let parentsMinusSignColorClass = (this.state.parentsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";

        // Create Guests input string
        let guestsInputContent = '1 guest';
        let { kidsCount, petsCount, parentsCount } = this.state;
        let numGuests = kidsCount + petsCount + parentsCount;
        if (numGuests > 1) {
            guestsInputContent = `${numGuests} guests`;
        };


        const dateRangePicker = (
            <DateRangePicker
                startDate={this.state.startDate}
                startDateId="mm/dd/yyyy"
                endDate={this.state.endDate}
                endDateId="mm/dd/yyyy"
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                numberOfMonths={1}
                hideKeyboardShortcutsPanel={true}
                startDatePlaceholderText="Check-in"
                endDatePlaceholderText="Checkout"
                // isDayBlocked={day => this.dayBlocked(day)}
                />
                )
                
            const dayPickerRangeController = (
                <DayPickerRangeController
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInputLeftCol}
                onFocusChange={this.onFocusChange}
                numberOfMonths={2}
                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                hideKeyboardShortcutsPanel={true}
                // isDayBlocked={day => this.dayBlocked(day)}
                // initialVisibleMonth={() => moment().add(2, "M")}
            />
        )
        let clearDates;
        if (this.state.startDate) {
            clearDates = 
                <div
                    className="clear-dates-btn"
                    onClick={() => this.setState({
                        startDate: null,
                        endDate: null,
                        focusedInput: null,
                        focusedInputLeftCol: START_DATE })} >
                    Clear dates
                </div>;
        } else {
            clearDates = <></>;
        }


        const dropdownMenu = (
            <div className="search-box-dropdown-container" id="treehouse-booking-box-dropdown-container">
                <ul>
                    <li>
                        <div className="search-box-dropdown-label">
                            <div>Parents</div>
                            <div>Old people</div>
                        </div>
                        <div className="search-box-counter-container">
                            <div
                                className={`${kidsMinusSignColorClass}`}
                                onClick={() => this.decreaseCount("kidsCount")}>–</div>
                            <div className="search-box-dropdown-counter-num">{this.state.kidsCount}+</div>
                            <div
                                className="search-box-plus-circle"
                                onClick={() => this.increaseCount("kidsCount")} >+</div>
                        </div>
                    </li>
                    <li>
                        <div className="search-box-dropdown-label">
                            <div>Pets</div>
                            <div>Dogs, capybaras, etc.</div>
                        </div>
                        <div className="search-box-counter-container">
                            <div
                                className={`${petsMinusSignColorClass}`}
                                onClick={() => this.decreaseCount("petsCount")}>–</div>
                            <div className="search-box-dropdown-counter-num">{this.state.petsCount}+</div>
                            <div
                                className="search-box-plus-circle"
                                onClick={() => this.increaseCount("petsCount")} >+</div>
                        </div>
                    </li>
                    <li>
                        <div className="search-box-dropdown-label">
                            <div>Kids</div>
                            <div>The young at heart</div>
                        </div>
                        <div className="search-box-counter-container">
                            <div
                                className={`${parentsMinusSignColorClass}`}
                                onClick={() => this.decreaseCount("parentsCount")}>–</div>
                            <div className="search-box-dropdown-counter-num">{this.state.parentsCount}+</div>
                            <div
                                className="search-box-plus-circle"
                                onClick={() => this.increaseCount("parentsCount")}>+</div>
                        </div>
                    </li>
                </ul>
            </div>
        );

        let dropdownComponent = this.state.dropdownOpen ? dropdownMenu : <></>;
        return(
            <>
                <div>
                    <Link to="/progallery" >
                    <div className="treehouse-photos-container-new">
                        <div className="treehouse-photo-1">
                            <img className="treehouse-photo-child treehouse-photo-2" src={Munnar1} alt='munnar' />
                        </div>
                        <div className="treehouse-photo-parent photo-2">
                            <img className="treehouse-photo-child treehouse-photo-2" src={Munnar5} alt='munnar' />
                        </div>
                        <div className="treehouse-photo-parent photo-3">
                            <img className="treehouse-photo-child treehouse-photo-3" src={Munnar2} alt='munnar'  />
                        </div>
                        <div className="treehouse-photo-parent photo-4">
                            <img className="treehouse-photo-child treehouse-photo-4" src={Munnar3} alt='munnar' />
                        </div>
                        <div className="treehouse-photo-parent photo-5">
                            <img className="treehouse-photo-child treehouse-photo-5" src={Munnar4} alt='munnar' />
                        </div>
                    </div>
                    </Link>
                    <div className="pro-main-type">
                            <div className="pro-type">
                                <b>Type of Place</b> - Entire Place | 6 Bedrooms | 7 Bathrooms
                            </div>
                            <div className="pro-guest"> <b>Max Occupancy</b> - 20 Guests</div>
                        </div>
                        <hr />
                    <Row>
                  <Col md={14}>
                  <div className="pro-read-head">
                            About TripThrill Raindrops Villa
                    </div>
                    <ReadMore className="text">
                            Overlooking the magnificent hills of Munnar, Raindrops Villa is Munnar’s best homestay, just 15 km from the heart of the town.The Homestay offers a great alternative to traditional hotel accommodation, with fully self contained and serviced rooms.Raindrops Villa offers all the comforts of a home away from home whether youre here for business, leisure, or relocating, youre sure to be comfortable.
                    </ReadMore>
                                <div className="pro-amenities">
                                    Amenities
                                </div>
                                <div className="pro-ac">
                                    <div className="pro-sources">
                                        <li className="pro-li"><i class="fas fa-fan"></i> Ac</li>
                                        <li className="pro-li"><i class="fas fa-wifi"></i> WiFi</li>
                                        <li className="pro-li"><i class="fas fa-parking"></i> Parking</li>
                                    </div>
                                </div>
                            <hr className="treehouse-show-hr-below-address" />
                            <div className="pro-collapse">
                    <Collapse defaultActiveKey={false} ghost>
                        <Panel header="Address" key="1">
                            <Row >
                                <Col md={12}>
                                    <b>Address</b> :  Ripon Estate, Meppadi PO, Wayanad, Kerala <br></br>
                                    <b> City</b> : Wayanad<br></br>
                                    <b> Area</b> :  Ripon Estate, Meppadi PO, Wayanad<br></br>
                                    <b> State</b> :Kerala<br></br>
                                </Col>
                                <Col md={12}>
                                    <iframe className="pro-iframe" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31425.79514580588!2d77.04666824081883!3d10.080691342233475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794d099a6d%3A0x63250e5553c7e0c!2sMunnar%2C%20Kerala%20685612!5e0!3m2!1sen!2sin!4v1627891419150!5m2!1sen!2sin"></iframe>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel header="Price Info" key="2">
                            <Row>
                                <Col md={12}>
                                    <b>Price per night</b> : ₹ 2000<br></br>
                                    <b> Minimum length of stay</b> : 3 nights <br></br>
                                </Col>
                                <Col md={12}>
                                    <b> Price per weekend ( Saturday and Sunday) </b> : ₹ 2500<br></br>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel header="Details" key="3">
                            <Row gutter={40}>
                                <Col md={12}>
                                    <b>Property ID</b> : 1 <br></br>
                                    <b> Rooms</b> : 9<br></br>
                                    <b> Bathrooms</b> : 8<br></br>
                                    <b> Check-Out Hour</b> : 12:00 am<br></br>
                                </Col>
                                <Col md={12}>
                                    <b>Property Size</b> : 1330ft2 <br></br>
                                    <b> Check-in Hour</b> : 12:00 pm<br></br>
                                </Col>
                            </Row>
                        </Panel>
                    </Collapse>
                </div>
                     
                            <hr className="treehouse-show-hr-below-address" />
                            <div className="treehouse-calendar-picker-container">
                            <div className="property-calender">Availability</div>
                                <div className="pro-date">
                                    {dayPickerRangeController}
                                </div>
                                {clearDates}
                            </div>
                            </Col>
                            <Col md={10}>
                            <div className="book-container">
		                    	<Card className="book-card">
                                <div className="treehouse-show-price-container">
                                    <div style={{ fontSize: "20px", fontWeight: "800" }}> ₹1,500</div>&nbsp; <div style={{ marginTop: "5px" }}> per night</div>
                                </div>
                                <hr className="treehouse-booking-box-hr" />
                                <form onSubmit={this.handleSubmit}>
                                    <div className="check_-labels-container">
                                        <span className="search-box-label">
                                            Dates
                                </span>
                                    </div>
                                    {dateRangePicker}
                                    <div className="check_-labels-container">
                                    <span className="search-box-label">
                                        Guests
                                </span>
                                </div>
                                    <div
                                        className="search-box-input" id="treehouse-show-guests-input-container"
                                        ref={this.inputNode}>
                                        <Input
                                            style={{ border: "0" }}
                                            className="guests-input"
                                            type="text"
                                            placeholder="Guests"
                                            readOnly
                                            value={guestsInputContent}
                                        />
                                        <i className={chevronDirection}></i>
                                    </div>
                                    <div
                                        ref={this.dropdownNode}
                                    >{dropdownComponent}</div>
                                    <input
                                        className="treehouse-booking-box-reserve-btn"
                                        type="submit"
                                        value="Reserve" />
                                </form>
                                {/* <div className="treehouse-booking-box-bottom-text">
                            You won't be charged (ever)
                        </div> */}
                                <div id="clear-dates-right-side">{clearDates}</div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}
export default Calander;