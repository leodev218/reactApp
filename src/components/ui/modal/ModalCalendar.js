import React from "react";
import logo from "../../assets/img/kairos.png";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalCalendar = () => {
  return (
    <Modal>
      <ModalHeader>
        <div className="p-1 d-flex">
          <img
            alt="Kairos Tower"
            src={logo}
            style={{
              height: 40,
              width: 40,
              marginRight: 5,
            }}
          />
          <h5 className="text-light text-align-center mt-2">Kairos Tower</h5>
        </div>
      </ModalHeader>
      <ModalBody>
        <h1>Cuerpor del modal</h1>
      </ModalBody>
      <ModalFooter>
        <button>Actualizar</button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalCalendar;
