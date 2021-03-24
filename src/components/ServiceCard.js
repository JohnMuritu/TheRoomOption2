import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'react-toastify/dist/ReactToastify.css';

export const ServiceCard = (props) => {

    const [serviceStatus, setServiceStatus] = useState(props.status);
    const [status, setStatus] = useState("");
    const [promoCode, setPromoCode] = useState(props.promoCode);

    const promoCodeActivated = () => toast.success("Activation successful.", {
                                                        autoClose: 1000,
                                                        hideProgressBar: true,
                                                    });
    const copiedToClipboard = () => toast.success("Copied to clipboard successfully.", {
                                                        autoClose: 1000,
                                                        hideProgressBar: true,
                                                    });
    useEffect(() => {

        if(serviceStatus === "Inactive"){
            setStatus("Activate bonus");
        }
        else{
            setStatus("Activated");
            
        }
    }, [serviceStatus]);

    return (
      <Card className="serviceCard mb-3">
        <Card.Body>
          <Card.Title> {props.title} </Card.Title>
          <div className="row align_items_bottom">
            <div className="col-md-5">
              <Card.Text>{props.description}</Card.Text>
            </div>
            <div className="col-md-4">
              <span className="promocodespan">
                <small className="text-muted">PROMOCODE</small>
              </span>

              <div id="promocode_container">
                <input
                  className="promoCode_input"
                  type="text"
                  placeholder="Promo Code"
                  // defaultValue={props.promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  value={promoCode}
                />
                <CopyToClipboard 
                    text={promoCode}
                    onCopy={() => copiedToClipboard()}>
                    <i className="copy_img" >
                        <FaRegCopy color="blue" />
                    </i>
                </CopyToClipboard>

              </div>
            </div>
            <div className="col-md-3">
              <Button
                variant="primary"
                className="w-100"
                onClick={() => {
                    if(serviceStatus !== "Active")
                    {
                        setServiceStatus("Active");
                        promoCodeActivated();
                    }
                }}
              >
                {status}
              </Button>
              <ToastContainer />
            </div>
          </div>
        </Card.Body>
      </Card>
    );
}