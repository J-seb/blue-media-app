import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import Weather from "./weather";

function AccordionApi() {
  const [location, setLocation] = useState({});

  const getLocation = (loc) => {
    setLocation({ ...loc });
  };

  // if (Object.keys(location).length === 0) {
  //   return <div>No location provided</div>;
  // }
  return (
    <>
      <Accordion className="accordion">
        <Card className="accordion-toggler">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="accordion-header"
          >
            Weather Forecast
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Weather onGetLocation={getLocation} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordion-toggler">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="accordion-header"
          >
            Map
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    title="location"
                    className="map-container"
                    src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15938.43245533486!2d${location.longitude}!3d${location.latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1624631408718!5m2!1sen!2sco`}
                  ></iframe>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default AccordionApi;
