import React from "react";
import Navbar from "./Navbar";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import ContentTotally from "./ContentTotally";
import Footer from "./Footer";
import Sidebar from "./SideBar";

function Estructura(){
    return(
<>
<Navbar/>
<Sidebar/>
<div>
    <Banner1/>
<div className="total-panels">
    <ContentTotally/>
    
</div>
<Banner2/>
<Footer/>
    </div>
</>
    );
}
export default Estructura