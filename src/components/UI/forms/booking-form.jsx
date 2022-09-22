import React from "react";
import Modal from "../modal/modal";

const Bookings = (props) => {
  const formData = (e) => {
    e.preventDefault();
    console.log(props);
  };
  return (
    <Modal>
      <div>
        <form>
          <div className="mb-3">
            <input
              type="datetime-local"
              id="bdaymonth"
              name="bdaymonth"
              min="1930-01"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input list="flowers" name="flowers" className="form-select" />
            <datalist id="flowers">
              <option value="Rose" />
              <option value="Lily" />
              <option value="Tulip" />
              <option value="Daffodil" />
              <option value="Orchid" />
            </datalist>
          </div>
          <div className="mb-3"></div>
          <button onClick={formData}>check</button>
        </form>
      </div>
    </Modal>
  );
};

export default Bookings;
