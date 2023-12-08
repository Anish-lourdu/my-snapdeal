import React from "react";

const Search=()=>{
    return(
        <div>
            <div className="input-group mb-3 search-box-wrapper">
                <div class="overlap"></div>
                <input type="search" className="form-control searchformInput" placeholder="Search products & brands" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn-outline-primary searchformButton">search</button>
            </div>
        </div>
    )
}

export default Search;