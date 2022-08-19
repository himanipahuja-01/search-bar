import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function ShowAds(props) {
  const [isSearchValid, setIsSearchValid] = useState(false);
  const [q, setQ] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setIsSearchValid(true);
    } else {
      setIsSearchValid(false);
    }
    setQ(e.target.value);
  };

  const change = () => {
    setQ("");
    setIsSearchValid(false);
  };

  const [data, setData] = useState([]);

  const getAds = async () => {
    const response = await axios.get("/search_data");
    // console.log(response.data.result);
    setData(response.data.result);
  };


  useEffect(() => {
    getAds();
  }, []);

  const filteredItems = data.filter(
    (item) => 
    item.headline.toLowerCase().indexOf(q.toLowerCase()) >= 0
  );

  return (
    <div>
      <form className="d-flex m-3">
        <input
          className="me-2 form-control w-25"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="search"
          value={q}
          onChange={handleChange}
        />
        {/* <button className="btn btn-outline-primary" type="submit">
          Search
        </button> */}
      </form>

      <div className="container-fluid">
        <div className="row" onClick={change}>
          {isSearchValid
            ? filteredItems.map((item) => (
               
                  <Card item={item} key={item._id}/>
               
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ShowAds;
