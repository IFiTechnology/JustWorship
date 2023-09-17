import React, { useState } from "react";
import axios from "axios";
import formLogo from "../../Assets/JWLogoW.png";
import JW2023 from "../../Assets/JW23.jpeg";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer"; 
import "./registration.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    state: "",
    closestLandmark: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your Airtable API endpoint URL
      const airtableEndpoint =
        "https://api.airtable.com/v0/appNIdOilXjPPiW0I/Entry";

      // Airtable API Key
      const apiKey =
        "patG5tTw6Jn2mUQpu.490f2b2769981f836564171fee1f2467cbf38fe4462f9e60b9fa38199447e742";

      // Generate the current timestamp
      const registrationTimestamp = new Date().toUTCString();

      // Data to send to Airtable, including the timestamp
      const data = {
        fields: {
          Name: formData.name,
          "Phone Number": formData.phoneNumber,
          Address: formData.address,
          State: formData.state,
          "Closest Landmark": formData.closestLandmark,
          Timestamp: registrationTimestamp, // Add this field for timestamp
        },
      };

      // Send a POST request to Airtable
      const response = await axios.post(airtableEndpoint, data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Handle a successful response (e.g., show a success message)
        setSuccessMessage(
          "🎉 Registration successful! Welcome to Just Worship 2023! We worship GOD inspite of our feelings 🎉"
        );
        setErrorMessage("");
        // You can also reset the form fields if needed
        setFormData({
          name: "",
          phoneNumber: "",
          address: "",
          state: "",
          closestLandmark: "",
        });
      } else {
        // Handle an error response (e.g., show an error message)
        setErrorMessage("❌ Registration failed. Please try again. ❌");
        setSuccessMessage("");
      }
    } catch (error) {
      // Handle any network or other errors
      setErrorMessage(
        "❌ An error occurred. Please check your connection and try again later. ❌"
      );
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
    <div className="regForm">
      <div className="formCard">
        <div className="formImage">
          <img src={JW2023} alt="" />
        </div>
        <div className="form">
          <div className="formLogo">
            <div className="logoImg">
              <img src={formLogo} alt="" />
            </div>
            <h3>Just Worship 2023 Registration Form</h3>
          </div>
          {successMessage && (
            <div className="successMessage">{successMessage}</div>
          )}
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                className="form-control"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input">
              <input
                className="form-control"
                placeholder="Phone Number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input">
              <input
                className="form-control"
                placeholder="Address"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input">
              <input
                className="form-control"
                placeholder="state"
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input">
              <input
                className="form-control"
                placeholder="Closest Landmark"
                type="text"
                id="closestLandmark"
                name="closestLandmark"
                value={formData.closestLandmark}
                onChange={handleChange}
                required
              />
            </div>
            <div className="regBtn">
            <button className="btn" type="submit">
              Register
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default RegistrationForm;
