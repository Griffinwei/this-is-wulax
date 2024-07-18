import React, { useState } from "react";

const Recruiting = () => {
  const [formData, setFormData] = useState({
    name: '',
    hometown: '',
    graduatingYear: '',
    position: '',
    phoneNumber: '',
    washUEmail: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactEmail: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-worker-url.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Data stored successfully');
        setSubmitted(true);
        setFormData({
          name: '',
          hometown: '',
          graduatingYear: '',
          position: '',
          phoneNumber: '',
          washUEmail: '',
          emergencyContactName: '',
          emergencyContactPhone: '',
          emergencyContactEmail: ''
        });
      } else {
        console.error('Failed to store form data');
      }
    } catch (error) {
      console.error('Error storing form data: ', error);
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
      emergencyContactName: '',
      emergencyContactPhone: '',
      emergencyContactEmail: ''
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#e3e3e3",
        padding: "24px"
      }}
    >
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }}
        >
          <h1 style={{ textAlign: "center" }}>Recruitment Form</h1>
          <div style={{ marginBottom: "16px", display: "grid", gap: "12px" }}>
            <label style={{}}>
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
              <input type="text" name="position" value={formData.position} onChange={handleChange} required />
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
