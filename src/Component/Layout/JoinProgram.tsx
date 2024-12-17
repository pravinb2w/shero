import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import { Modal } from "bootstrap";


import IconClose from '../../Assets/close-square.svg';
import { useNavigate } from "react-router-dom";

const JoinProgram = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    whatsAppNumber: "",
    isSameAsPhone: false,
  });
  const formRef = useRef<HTMLFormElement | undefined>(undefined);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);


  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if ((name === "phoneNumber" || name === "whatsAppNumber") && !/^\d{0,10}$/.test(value)) {
      return; // Stop processing if input is invalid
    }

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    console.log(' form dtaa ', new FormData(formRef.current));
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzbuuyurFsxAWGxMewhlrX0fajodB1fvAB4IUo73uO6Y1Ra2PCkUWJJNlhSf64-n1wF/exec'; // Replace with your Web App URL
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbxGi4z21twK8dZzKg0trJ-LC1Cm6ll2bSu9vR_P9DAZq4RCm4B-gGT2HQNNzwlSKXlC/exec'; // Replace with your Web App URL

    // Add enquiry date to formData
    const formDataWithDate = {
      ...formData,
      enquiryDate: new Date().toLocaleString('en-GB', { // Format date as dd/mm/yyyy hh:mm:ss
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    try {
      let newDate = new Date()
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: (`firstName=${formData.firstName}&lastName=${formData.lastName}&email=${formData.email}&phoneNumber=${formData.phoneNumber}&whatsAppNumber=${formData.whatsAppNumber}&newDate=${newDate}`),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(res => res.text()).then(data => {
        console.log(data);
        const modalElement = document.getElementById("exampleModal");
        if (modalElement) {
          const modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
          modalInstance.hide();

          document.body.classList.remove("modal-open");
          const backdrop = document.querySelector(".modal-backdrop");
          if (backdrop) {
            backdrop.remove();
          }
        }
        // Swal.fire({
        //   icon: "success",
        //   title: "Enquiry Submitted",
        //   text: "Thank you for registering!",
        //   confirmButtonText: "OK",
        // });
        navigate("/thankyou", { state: { status: "success", timestamp: Date.now() } })
        setIsSubmit(false);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          whatsAppNumber: "",
          isSameAsPhone: false,
        });

      }).catch(error => console.log(' fetch derror ', error));

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error!');
    }
  };


  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.phoneNumber.trim().length === 10 && // Ensure exactly 10 digits
    formData.whatsAppNumber.trim().length === 10;

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
              aria-label="Close" />

            <h1 className="mb-4">Registration</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
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
                  pattern="\d{10}" // HTML5 validation
                // maxLength="10" // Ensure only 10 characters
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
                  pattern="\d{10}" // HTML5 validation
                // maxLength="10" // Ensure only 10 characters
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
              <button type="submit" className="m-auto btn btn-primary w-100 py-2" disabled={!isFormValid || isSubmit}>
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
