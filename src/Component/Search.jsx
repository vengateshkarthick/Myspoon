import React from "react";

const Search = ({ handleSearch, searchTxt, handleSearchBtn }) => {
  return (
    <div className="search-bar d-flex align-items-center justify-content-center gap-3">
      <label className="form-label p-1">
        <input
          className="form-control"
          id="search Recipe"
          placeholder="Type recipe name"
          onChange={handleSearch}
          value={searchTxt}
        />
      </label>
      <button className="btn btn-success p-1" onClick={handleSearchBtn}>
        Search
      </button>
    </div>
  );
};

export default Search;
