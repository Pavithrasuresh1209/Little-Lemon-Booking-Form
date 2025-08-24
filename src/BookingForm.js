import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    occasion: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.time) tempErrors.time = "Time is required";
    if (!formData.guests || formData.guests < 1) tempErrors.guests = "Guests must be at least 1";
    if (!formData.occasion) tempErrors.occasion = "Occasion is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Booking successful!");
      setFormData({ name: "", date: "", time: "", guests: "", occasion: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Table booking form">
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        aria-required="true"
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <label htmlFor="date">Choose Date</label>
      <input
        id="date"
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        aria-required="true"
      />
      {errors.date && <span className="error">{errors.date}</span>}

      <label htmlFor="time">Choose Time</label>
      <input
        id="time"
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        aria-required="true"
      />
      {errors.time && <span className="error">{errors.time}</span>}

      <label htmlFor="guests">Number of Guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        aria-required="true"
      />
      {errors.guests && <span className="error">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
        aria-required="true"
      >
        <option value="">-- Select --</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>
      {errors.occasion && <span className="error">{errors.occasion}</span>}

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
