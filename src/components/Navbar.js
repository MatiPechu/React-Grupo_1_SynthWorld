import React from "react";
import logo from '../assets/images/logo.png'
function Navbar(){
    return(
<div className="navbar-main">
    <div>
        <img className="logo" style={{width: '6rem'}} src={logo} alt="Logo navar"/>
    </div>
    <h2>SynthWorld</h2>
</div>
    );
}
export default Navbar