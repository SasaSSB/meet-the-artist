import Artists from "./Artists";

//logical component passes data down

function ArtistsDetails(props) {
  //console.log(props.artists);
  return (
    <div className="Art">
      {props.artists.map((artists) => (
        <Artists artists={artists} />
      ))}
    </div>
  );
}

export default ArtistsDetails;
