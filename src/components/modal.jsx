import React from "react";
import { Modal } from "react-bootstrap";

function ModalForm(props) {
  return (
    <Modal {...props} size="sm">
      <Modal.Body>
        <div className="modal-content">
          <span>
            <i
              className="fa fa-times icon-profile-info button-edit"
              aria-hidden="true"
              onClick={props.onHide}
            ></i>
          </span>

          <h4>Editing User</h4>
          <hr />
          <form>
            <div>
              <label className="label-form" htmlFor="fullname">
                Fullname
              </label>
              <input
                className="input-form-edit"
                id="fullname"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="label-form" htmlFor="city">
                City
              </label>
              <input className="input-form-edit" id="city" autoComplete="off" />
            </div>
            <div>
              <label className="label-form" htmlFor="address">
                Address
              </label>
              <input
                className="input-form-edit"
                id="address"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="label-form" htmlFor="phone">
                Phone
              </label>
              <input
                className="input-form-edit"
                id="phone"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="label-form" htmlFor="birthday">
                Birthday
              </label>
              <input
                className="input-form-edit"
                id="birthday"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="button-profile button-modal"
              onClick={props.handleSubmit}
            >
              Save
            </button>
            <button
              type="button"
              className="button-profile button-modal danger"
              onClick={props.handleDelete}
            >
              Delete User
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForm;
