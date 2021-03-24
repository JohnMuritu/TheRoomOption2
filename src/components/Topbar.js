import React from "react";
import {Nav} from "react-bootstrap";

const Sidebar = props => {
   

    return (
      <Nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="mr-5">
            <small className="text-muted">Balance</small> <br />
            213 920 $
        </div>
        <div>
            <small className="text-muted">Payout</small> <br />
            159 465 $
        </div>
      </Nav>
    );
  };
  //const Sidebar = withRouter(Side);
  export default Sidebar