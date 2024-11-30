import React, { useState } from "react";
import IconClose from '../../Assets/close-square.svg';

const JoinProgram = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    whatsAppNumber: "",
    isSameAsPhone: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // If "Same as Phone Number" is checked, sync values
    if (name === "isSameAsPhone" && checked) {
      setFormData((prev) => ({
        ...prev,
        whatsAppNumber: prev.phoneNumber,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <img src={IconClose} alt='' className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"/>
           
              <h1 className="mb-4">Registration</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                 
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                 
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                 
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                 
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  
                  <input
                    type="tel"
                    className="form-control"
                    id="whatsAppNumber"
                    name="whatsAppNumber"
                    placeholder="WhatsApp number"
                    value={formData.whatsAppNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-check mb-4 d-flex justify-content-end">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="isSameAsPhone"
                    name="isSameAsPhone"
                    checked={formData.isSameAsPhone}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="isSameAsPhone">
                    Same as your phone number
                  </label>
                </div>
                <button type="submit" className="m-auto btn btn-primary w-100 py-2">
                  Join our program
                </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProgram;
