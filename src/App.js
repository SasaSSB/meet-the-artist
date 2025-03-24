import ArtistsDetails from "./components/ArtistsDetails.jsx";
import AddArtist from "./components/addArtist.jsx";
import { useEffect, useState } from "react";
import { data } from "./data/data.js";
import "./App.css";

function App() {
  const [artistsState, setArtists] = useState(data);
  const [selectedValue, setSelectedValue] = useState("Option 0"); //The starting value for all
  const [currentArtists, setCurrentArtists] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setPage(1); // when the filter changes, first page reset
  };

  useEffect(() => {
    // Dropmenu filter based on the artists profession
    const filteredArtists = artistsState.filter((artist) => {
      if (selectedValue === "Option 0") return true;
      if (selectedValue === "Option 1")
        return artist.art_professions === "Painter";
      if (selectedValue === "Option 2")
        return artist.art_professions === "Sculptor";
      if (selectedValue === "Option 3")
        return artist.art_professions === "Photographer";
      if (selectedValue === "Option 4")
        return artist.art_professions === "Illustrator";
      return true;
    });

    // The starting and ending calculation
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slices the artistsState array in order to  get the current page of artists
    const newArtists = filteredArtists.slice(startIndex, endIndex);

    // Update the state with the current artists
    setCurrentArtists(newArtists);
  }, [page, artistsState, itemsPerPage, selectedValue]);

  //handle the next page
  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  //handles the prev page
  const handleBack = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const updateArtists = (artists) => {
    setArtists([artists, ...artistsState]); //new submission place at front
    // console.log(artists);
  };

  return (
    <div className="App">
      <h1>Meet The Artists</h1>
      <div className="main-container ">
        <div className="container ">
          <div className="filter-item">
            <div className="text">
              <h8>Art Professions</h8>
              <select value={selectedValue} onChange={handleChange}>
                <option value="Option 0">All</option>
                <option value="Option 1">Painter</option>
                <option value="Option 2">Sculptor</option>
                <option value="Option 3">Photographer </option>
                <option value="Option 4">Illustrator</option>
              </select>
            </div>
          </div>
          <div className="form-item ">
            <div className="text">
              <h8>Artist Form</h8>
              <AddArtist updateArtists={updateArtists} />
            </div>
          </div>
        </div>
        <ArtistsDetails artists={currentArtists} />
      </div>
      <button onClick={handleBack} disabled={page === 1}>
        Back
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
