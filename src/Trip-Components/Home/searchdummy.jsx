import React from 'react';
import "./searchbar.css"
// import './App.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { Redirect } from 'react-router-dom';
import "./book1.css"


const items = [
    {
      id: 0,
      name: 'Bangalore'
    },
    {
      id: 1,
      name: 'Coorg'
    },
    {
      id: 2,
      name: 'Munnar'
    },
    {
      id: 3,
      name: 'Dandeli'
    },
    {
      id: 4,
      name: 'Mysore'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return item;
   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  }

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            // searchTerm: "",
            kidsCount: 0,
            petsCount: 0,
            parentsCount: 0,
            startDate: null,
            endDate: null,
            focusedInput: null,
            guestsInputBorderFocused: false,
            redirectToSearchIdx: false
        };

        this.inputNode = React.createRef();
        this.dropdownNode = React.createRef();
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        // this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.makeSingleGuestsInputString = this.makeSingleGuestsInputString.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // componentWillMount() {
    //     document.addEventListener('mousedown', this.handleClick, false)
    // }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
        
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

    // handleSearchUpdate() {
    //     return (e) => {
    //         this.setState({
    //             searchTerm: e.currentTarget.value
    //         });
    //     };
    // }

    handleSearchSubmit(e) {
        e.preventDefault();
        let startDate = null;
        let endDate = null;
        if (this.state.startDate && this.state.endDate) {
            startDate = this.state.startDate.format('YYYY/MM/DD');
            endDate = this.state.endDate.format('YYYY/MM/DD');
        }
        this.props.fetchTreehouseSearchResults(
            // this.state.searchTerm, 
            startDate, endDate);
        this.setState({ redirectToSearchIdx: true })
    }

    toggleDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen});
    }

    openDropdown() {
        this.setState({ dropdownOpen: true });
    }
    
    closeDropdown() {
        this.setState({ dropdownOpen: false });
    }

    toggleGuestsInputBorderColor() {
        this.setState({ guestsInputBorderFocused: !this.state.guestsInputBorderFocused });
    }

    increaseCount(type) {
        // e.stopPropagation();
        let newVal = this.state[type] + 1;
        this.setState({ [type]: newVal })
        // console.log("Increase");
    }
    
    decreaseCount(type) {
        // e.stopPropagation();
        let newVal = this.state[type] - 1;
        if (this.state[type] > 0 ) {
            this.setState({ [type]: newVal })
        }
    }

    makeSingleGuestsInputString(type, stateName) {
        let num = this.state[stateName];
        if (num === 0) return null;
        if (num === 1) {
            return `${num} ${type}`
        } else {
            return `${num} ${type}s`
        }
    };

    render() {
        // Redirect to search index when a search is made
        if (this.state.redirectToSearchIdx) {
            return <Redirect to="/treehouses/search" />
        }

        // Conditional to toggle color of minus sign on Guests dropdown
        let kidsMinusSignColorClass = (this.state.kidsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";
        let petsMinusSignColorClass = (this.state.petsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";
        let parentsMinusSignColorClass = (this.state.parentsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";

        // Create Guests input string
        let guestsInputContent = [
            this.makeSingleGuestsInputString("kid", "kidsCount"),
            this.makeSingleGuestsInputString("pet", "petsCount"),
            this.makeSingleGuestsInputString("parent", "parentsCount")
        ].filter(type => type).join(", ");

        // Conditional for the Guests input chevron
        // let chevronDirection;
        // if (this.state.dropdownOpen) {
        //     chevronDirection = "fas fa-chevron-up";
        // } else {
        //     chevronDirection = "fas fa-chevron-down";
        // }

        // Conditional for guests input container border color class
        let guestsInputBorderColorClass = this.state.guestsInputBorderFocused ? "guests-input-outline-blue" : "";

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
                
            />
        )

        const dropdownMenu = (
            <div className="search-box-dropdown-container">
                <ul>
                    <li>
                        <div className="search-box-dropdown-label">
                            <div>Kids</div>
                            <div>The young at heart</div>
                        </div>
                        <div className="search-box-counter-container">
                            <div
                                className={`${kidsMinusSignColorClass}`}
                                onClick={() => this.decreaseCount("kidsCount")}>–</div>
                            <div className="search-box-dropdown-counter-num">{this.state.kidsCount}+</div>
                            <div 
                                className="search-box-plus-circle"
                                onClick={() => {
                                    this.increaseCount("kidsCount");
                                    }} >+</div>
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
                            <div>Parents</div>
                            <div>Old people</div>
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
        )

        let dropdownComponent = this.state.dropdownOpen ? dropdownMenu : <></>;

        return (
            <div className="splash-image-container">
                 <div className="search-box-container">
                     <form onSubmit={this.handleSearchSubmit} className="sreach-box-form-container">
                         <div className="search-input-container-1">
                            <span className="search-box-label-1">
                                Locations
                                <ReactSearchAutocomplete
                                        items={items}
                                        placeholder='Where to'
                                        onSearch={handleOnSearch}
                                        onHover={handleOnHover}
                                        onSelect={handleOnSelect}
                                        onFocus={handleOnFocus}
                                        autoFocus
                                        formatResult={formatResult}
                                />
                            </span>
                            {/* <input
                                placeholder='Where to'
                                className="search-box-input"
                                type="text"
                                // onChange={this.handleSearchUpdate()} 
                                // value={this.state.searchTerm}
                                /> */}
                                
                        </div>
                        <div className="search-vertical-line"></div>
                        <div className="search-bar-date-blocks">    
                            <div className="check_-labels-container">
                                <span className="search-box-label-2 checkin-label">
                                    Check-in
                                </span>
                                <span className="search-box-label-3 checkout-label">
                                    Check-out
                                </span>
                            </div>
                            <div className="check_-inputs-container ">
                                {dateRangePicker}
                            </div>
                            
                        </div>
                        <div className="search-vertical-line"></div>
                        <div className="search-input-container-2">
                            <span className="search-box-label-4">
                                Guests
                            </span>
                            <div
                                id={guestsInputBorderColorClass}
                                className={`search-box-input guests-input-container`}
                                ref={this.inputNode}
                                onFocus={() => this.toggleGuestsInputBorderColor()}
                                onBlur={() => this.toggleGuestsInputBorderColor()}
                                tabIndex="0">
                                <input
                                    className="guests-input"
                                    type="text"
                                    placeholder="Guests" 
                                    readOnly
                                    value={guestsInputContent}
                                    onFocus={() => this.toggleGuestsInputBorderColor()}
                                    onBlur={() => this.toggleGuestsInputBorderColor()}
                                    />
                                {/* <i className={chevronDirection}></i> */}
                            </div>
                            <div ref={this.dropdownNode}>
                                {dropdownComponent}
                            </div>
                        
                        </div>
                        <div>
                            <div className="search-guest-icon">
                                <div className="search-guest-icon-button">
                                    <div className="search-guest-main-icon">
                                        <div className="search-guest-main-icon-1">
                                            <i  class="fas fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                </div>
            </div> 
        )
    }

}

export default SearchBox;



