import React, { useState } from "react";

const EditProfile = ({ user, onCancel }) => {
  const [formData, setFormData] = useState({
    ...user,
    about: user.about || "",
    areas: user.areas ? user.areas.join(", ") : "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      areas: formData.areas.split(",").map((area) => area.trim()),
    };
    console.log("Updated user data:", updatedData); // Replace with backend call
    onCancel(); // Switch back to view mode
  };

  return (
    <form onSubmit={handleSave} className="space-y-4 w-full max-w-md mx-auto">
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

      <div>
        <label className="block text-sm font-medium">About</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          rows={4}
          className="w-full border px-4 py-2 rounded-lg"
          placeholder="Write something about yourself..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Areas of Focus (comma separated)</label>
        <input
          type="text"
          name="areas"
          value={formData.areas}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-lg"
          placeholder="e.g., Anxiety, Depression, Trauma Recovery"
        />
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
