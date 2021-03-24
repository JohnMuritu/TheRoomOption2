import React from "react";
import {Nav} from "react-bootstrap";
import SidebarMenuImage from './SidebarMenuImage';
import service from './service.svg'

const Sidebar = () => {

    var items = [];

    for (var i = 0; i < 5; i++) {
        items.push(<SidebarMenuImage key={i} />);
    }

    return (
        <Nav className="col-md-12 d-none d-md-block bg-dark sidebar align_items_center" >
            <div className="App-logo w-100">
                <img src={service}  alt="logo" />
            </div>
             <div className="sidebar_items_div w-100">
                {items}
             </div>

            

        </Nav>
    );
  };
  
  export default Sidebar