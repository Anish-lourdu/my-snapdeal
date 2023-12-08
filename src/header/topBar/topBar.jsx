import React from "react";
import Logo from "./logo";
import Search from "./search";
import Account from "./account";
import Cart from "./cart";

const Topbar=()=>{
    return(
        <div className="topBar">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <Logo/>
                </div>
                <div className="col-sm-5">
                    <Search/>
                </div>
                <div className="col-sm-2">
                    <Cart/>
                </div>
                <div className="col-sm-2">
                    <Account/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Topbar;