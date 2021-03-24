import React, { useState, useEffect } from 'react';
import { ServiceCard } from './ServiceCard';
import { Form, Button } from 'react-bootstrap';
import MOCK_DATA from './MOCK_DATA.json';

const ServiceFilter = () => {

    const [serviceFilter, setServiceFilter] = useState("");
    const [services, setServices] = useState();

    useEffect(() => {

        if(!services){
            setServices(MOCK_DATA);
        }
    }, [services]);


    if(services){
        var servicesReturned = services
        .filter(title => {
            return title.title.toLowerCase().indexOf(serviceFilter.toLowerCase()) >= 0
        })
        .map(service => {
            return (
                <div key={service.id} >
                    <ServiceCard
                        title={service.title}
                        description={service.description}
                        promoCode={service.promoCode}
                        status={service.status}
                    />
                </div>
                );
        });
    }     

    return (
      <div className="form_bg_color w-100">
        <div className="row mb-3 align_items_bottom">
          <div className="col-md-7">
            <span className="promocodespan">
              <small className="text-muted">FILTER</small>
            </span>

            <Form.Control
              type="text"
              placeholder="Filter"
              className="form-control-lg"
              onChange={(e) => setServiceFilter(e.target.value)}
              value={serviceFilter}
            />
          </div>

          <div className="col-md-2">
            <Button
              variant="outline-secondary"
              className="w-100 form-control-lg"
              onClick={() => setServiceFilter("")}
            >
              Reset
            </Button>
          </div>
        </div>

        {servicesReturned}
      </div>
    );
}

export default ServiceFilter;