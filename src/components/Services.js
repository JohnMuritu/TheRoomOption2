import React from 'react';
import {Container, Row, Col } from "react-bootstrap";
import ServiceFilter from './ServiceFilter';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Services = () => {
    
    return (
      <>
        <Container fluid className="form_bg_color">
          <Row>
            <Col xs={1} id="sidebar-wrapper">
              <Sidebar />
              
            </Col>
            <Col xs={11} id="page-content-wrapper">
              
                  <Topbar />
                  
                  <h1 className="display-4 mt-3 mb-3">Services</h1>
                  
                  <ServiceFilter />

            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Services;