import React from "react";
import Navbar from "./Navbar";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import ContentTotally from "./ContentTotally";
function Estructura(){
    return(
<>
<Navbar/>
<Banner1/>
<div className="total-panels">
    <div>
    <ContentTotally/>
    </div>
    <div>
    <ContentTotally/>
    </div>
    <div>
    <ContentTotally/>
    </div>
</div>
<Banner2/>
</>
    );
}
export default Estructura