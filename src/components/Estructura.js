import React from "react";
import Navbar from "./Navbar";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import ContentTotally from "./ContentTotally";
function Estructura(){
    return(
<>
<Navbar/>
<div>
    <Banner1/>
<div className="total-panels">
    <ContentTotally/>
    
</div>
<Banner2/>
    </div>
</>
    );
}
export default Estructura