import React, { useState } from "react";

import { Modal, Button } from "flowbite-react";
function App() {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };
  return (
    <div className="Root h-screen flex flex-col dark">
      {/* remove and add dark to see the bug */}
      <div className="bg-gray-100 dark:bg-gray-800 flex-1 flex justify-center items-center">
        <Button onClick={onClick}>Toggle modal</Button>

        <React.Fragment>
          <Modal
            // dismissible //uncomment to see error
            show={show}
            onClose={onClose}
          >
            <Modal.Header className="bg-gray-100 dark:bg-gray-500">
              Terms of Service
            </Modal.Header>
            <Modal.Body className="bg-gray-100 dark:bg-gray-500">
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={onClose}>I accept</Button>
              <Button color="gray" onClick={onClose}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
