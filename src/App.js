import ArtistsDetails from "./components/ArtistsDetails.jsx";
import { useState } from "react";
import { data } from "./data/data.js";
import "./App.css";

function App() {
  const [artistsState] = useState(data);

  return (
    <div className="App">
      <ArtistsDetails artists={artistsState} />
    </div>
  );
}

export default App;
