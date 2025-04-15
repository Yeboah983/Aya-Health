import React, { useState } from "react";

const EditProfile = ({ user, onCancel }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Updated user data:", formData); // Replace with backend call
    onCancel(); // Switch back to view mode
  };

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Language</label>
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
        >
          <option value="English">English</option>
          <option value="Twi">Twi</option>
          <option value="Ga">Ga</option>
          <option value="Ewe">Ewe</option>
          <option value="Hausa">Hausa</option>
        </select>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          type="submit"
          className="bg-[#124fd1] text-white px-6 py-2 rounded-xl"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border px-6 py-2 rounded-xl"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
