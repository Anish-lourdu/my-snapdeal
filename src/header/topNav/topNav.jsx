import React from "react";
import { ReactDOM } from "react";

const TopNav=()=>{
    return(
        <div className="header">
        <div className="container">
            <section className="topNav__section">
                <div className="row">
                    <div className="col-sm-6">
                        <span className="topNav__hooks">Brand Waali Quality, Bazaar Waali Deal!</span>
                    </div>
                    <div className="col-sm-6">
                            <span className="topNav__hooks">
                                <a href="#">Impact@Snapdeal</a>
                            </span>
                            <span className="topNav__hooks">
                                <a href="#">Gift Cards</a>
                            </span>
                            <span className="topNav__hooks">
                                <a href="#">Help Center</a>
                            </span>
                            <span className="topNav__hooks">
                                <a href="#">Sell On Snapdeal</a>
                            </span>
                            <span className="topNav__hooks">
                                <a href="#">Download Appx</a>
                            </span>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default TopNav;