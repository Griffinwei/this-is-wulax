import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";  // Correct import path
import goalies from "../grantcookethan.jpeg";

const Recruiting = () => {
  const [formData, setFormData] = useState({
    name: '',
    hometown: '',
    graduatingYear: '',
    position: '',
    phoneNumber: '',
    washUEmail: '',
    studentID: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactEmail: '',
    additionalComments: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", formData); // Log form data
    try {
      const docRef = await addDoc(collection(db, "recruits"), formData);
      console.log("Document written with ID: ", docRef.id);
      setSubmitted(true);
      setFormData({
        name: '',
        hometown: '',
        graduatingYear: '',
        position: '',
        phoneNumber: '',
        washUEmail: '',
        studentID: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        emergencyContactEmail: '',
        additionalComments: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      hometown: '',
      graduatingYear: '',
      position: '',
      phoneNumber: '',
      washUEmail: '',
      studentID: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      emergencyContactEmail: '',
      additionalComments: ''
    });
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start", // Align items to the start (top) of the container
        alignItems: "center",         // Center items horizontally
        minHeight: "100vh",           // Ensure the container takes at least the full viewport height
        margin: "18px",                    // Remove margin from the container
        textAlign: "center",
        padding: "18px",
        boxSizing: "border-box"       // Include padding and border in the element's total width and height
      }}
    >
      <img src={goalies} style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", margin: "18px"}} alt="Grant Schwartz, David Cook, Ethan Weilheimer"/>
      <div
        style={{
          textAlign: "left",
          padding: "8px",
          margin: "18px",
          backgroundColor: "#D3D3D3",
          height: "auto",
          width: "100%",
          maxWidth: "600px"
        }}
      >
        <h2>FOR INTERESTED PLAYERS</h2>
        <h4>
          Did you play lacrosse in high school? Have you never played lacrosse before, but have always wanted to try? Fill out the form below!
          <br/>
          <br/>
          We welcome players of all experience levels, from beginners to seasoned veterans. We are always looking for new players to join our team, regardless of your experience with the sport.
        </h4>
      </div>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            padding: "8px",
            margin: "18px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }}
        >
          <h1 style={{ textAlign: "center" }}>Player Interest Form</h1>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Name:{" "}
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Hometown:{" "}
              <input type="text" name="hometown" value={formData.hometown} onChange={handleChange} required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Graduating Year:{" "}
              <input type="text" name="graduatingYear" value={formData.graduatingYear} onChange={handleChange} required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Position:{" "}
              <select name="position" value={formData.position} onChange={handleChange} required>
                <option value="">Select Position</option>
                <option value="Attack">Attack</option>
                <option value="Midfield">Midfield</option>
                <option value="Defense">Defense</option>
                <option value="Goalie">Goalie</option>
                <option value="FOGO">FOGO</option>
                <option value="LSM">LSM</option>
                <option value="SSDM">SSDM</option>
              </select>
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Phone Number:{" "}
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} pattern="[0-9]*" required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              WashU Email:{" "}
              <input type="email" name="washUEmail" value={formData.washUEmail} onChange={handleChange} required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Student ID:{" "}
              <input type="number" name="studentID" value={formData.studentID} onChange={handleChange} required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Emergency Contact Name:{" "}
              <input type="text" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Emergency Contact Phone:{" "}
              <input type="tel" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} pattern="[0-9]*" required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Emergency Contact Email:{" "}
              <input type="email" name="emergencyContactEmail" value={formData.emergencyContactEmail} onChange={handleChange} required />
            </label>
          </div>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label>
              Additional Comments:{" "}
              <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
            </label>
          </div>
          <button type="submit" style={{ width: "100%", padding: "12px", fontSize: "1.2rem", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>
            Submit
          </button>
        </form>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Form submission complete!</h2>
          <button onClick={resetForm} style={{ padding: "12px", fontSize: "1rem", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", marginTop: "16px" }}>
            Submit Another Response
          </button>
        </div>
      )}
    </div>
  );
};

export default Recruiting;
