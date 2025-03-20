import Artists from "./Artists";

//logical component_Manage state, passes data down

function ArtistsDetails(props) {
  return (
    <div className="Art">
      {props.artists.map((artists) => (
        <Artists artists={artists} />
      ))}
    </div>
  );
}

export default ArtistsDetails;
