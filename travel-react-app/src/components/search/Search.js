import React from "react";
import "./Search.css";
import Gold from "../../assets/gold.png";
const Search = () => {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>Luxury included Vacations For Two People</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            iusto aspernatur, ullam vel sunt autem fugiat repellat laborum
            veniam quas, commodi, voluptatum dolores voluptate aperiam.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>World's Leading</h3>
                <p>All-Inclusive Company For 20 Years In-A-Row</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>No One Includes More</h3>
                <p>All InClusive Company for 20 years In-A-Row</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">Get An Additional 7% Off</h4>
            <p className="timer">12 Hours Left</p>
            <p className="offers">View All Current Offers</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="">Grande Antiqua</option>
                <option value="">Grande Antiqua</option>
                <option value="">Grande Antiqua</option>
                <option value="">Grande Antiqua</option>
                <option value="">Grande Antiqua</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check In</label>
                <input type="date" />
              </div>{" "}
              <div className="input-wrap">
                <label>Check Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availibilities</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
