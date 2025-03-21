import ArtistsDetails from "./components/ArtistsDetails.jsx";
import AddArtist from "./components/addArtist.jsx";
import { useEffect, useState } from "react";
import { data } from "./data/data.js";
import "./App.css";

function App() {
  const [artistsState, setArtists] = useState(data);
  const [page, setPage] = useState(1);
  const [currentArtists, setCurrentArtists] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    // The starting and ending calculation
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slices the artistsState array in order to  get the current page of artists
    const newArtists = artistsState.slice(startIndex, endIndex);

    // Update the state with the current artists
    setCurrentArtists(newArtists);
  }, [page, artistsState, itemsPerPage]);

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
    setArtists([...artistsState, artists]);
    // console.log(artists);
  };

  return (
    <div className="App">
      <h1>Meet The Artists</h1>
      <div className="form-container ">
        <AddArtist updateArtists={updateArtists} />
      </div>
      <div className="main-container ">
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
