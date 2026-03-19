function Artists(props) {
  //presentational component_ displays and gets data via props.
  //Artist data layout
  return (
    <div className="artists">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.artists.image} alt={props.artists.name} />
        </div>

        <div className="flip-card-back">
          <h3>{props.artists.name}</h3>
          <p>Art Professions: {props.artists.art_professions}</p>
          <p>Email: {props.artists.email}</p>
          <p>Phone Number: {props.artists.phone_number}</p>
          <p>Art Portfolio: {props.artists.art_portfolio}</p>
        </div>
      </div>
    </div>
  );
}

export default Artists;
