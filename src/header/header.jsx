import React from "react";
import { ReactDOM } from "react";
import TopNav from "./topNav/topNav";
import Topbar from "./topBar/topBar";
import './scss/topNav.scss';
import './scss/topBar.scss';
import './scss/search.scss';
import './scss/cart.scss';
import './scss/account.scss';
import './scss/logo.scss';

function Header(){
    return(
        <div>
            <TopNav/>
            <Topbar/>
        </div>
    )
}

export default Header;