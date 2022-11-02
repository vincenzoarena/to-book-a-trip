import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { RiHotelLine } from "react-icons/ri";
import { SiStarship } from "react-icons/si";
import { GiSpaceship } from "react-icons/gi";
import { MdAttractions } from "react-icons/md";
import { FaSpaceShuttle } from "react-icons/fa";
import { BsCalendar4Range } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
            ...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1,
        };
    });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <RiHotelLine className="headerIcon" />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <SiStarship className="headerIcon" />
            <span>Fights</span>
          </div>
          <div className="headerListItem">
            <GiSpaceship className="headerIcon" />
            <span>Shuttle Rentals</span>
          </div>
          <div className="headerListItem">
            <MdAttractions className="headerIcon" />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaSpaceShuttle className="headerIcon" />
            <span>Space Station Taxi Shuttle Service</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius!</h1>
        <p className="headerDescription">
          Ger rewarded for your travels - unlock instant savings of 10% or more
          with a free Stellar Trips account.
        </p>
        <button className="headerButton">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSerchItem">
            <RiHotelLine className="headerSearchIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSerchItem">
            <BsCalendar4Range className="headerSearchIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")}`} to{" "}
              {`${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSerchItem">
            <BsPerson className="headerSearchIcon" />
            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adults} Adults · ${options.children} Children · ${options.rooms} Rooms`}</span>
            {openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adults</span>
                    <div className="optionCounter">
                        <button disabled={options.adults <= 1} className="optionCounterButton" onClick={()=>handleOption("Adults", "d")}>-</button>
                        <span className="optionCounterNumber">{options.adults}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("Adults", "i")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                        <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=>handleOption("Children", "d")}>-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("Children", "i")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Rooms</span>
                    <div className="optionCounter">
                        <button disabled={options.rooms <= 1} className="optionCounterButton" onClick={()=>handleOption("Rooms", "d")}>-</button>
                        <span className="optionCounterNumber">{options.rooms}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("Rooms", "i")}>+</button>
                    </div>
                </div>
            </div>}
          </div>
          <div className="headerSerchItem">
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
