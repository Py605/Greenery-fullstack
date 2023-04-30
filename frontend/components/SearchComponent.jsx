import React from 'react';

function SearchComponent() {
  return (
    <div className="navbar-search-form">
      <form onClick={(e)=> e.preventDefault()} className="form-inline my-2 my-lg-0">
        <input
          className="home-search-bar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchComponent;
