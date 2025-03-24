import { useState } from "react";
function AddArtist({ updateArtists }) {
  const [formData, setFormData] = useState({
    //form information for user
    name: "",
    art_professions: "",
    email: "",
    phone_number: "",
    art_portfolio: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    updateArtists(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        {/* Bug fixed  */}
        <label>Art Professions:</label>
        <input
          type="text"
          name="art_professions"
          value={formData.art_professions}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        {/* Bug fixed  */}
        <label>Phone:</label>
        <input
          type="tel"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Art Portfolio:</label>
        <input
          type="text"
          name="art_portfolio"
          value={formData.art_portfolio}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddArtist;
