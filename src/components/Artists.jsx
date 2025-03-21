function Artists(props) {
  //presentational component_ displays and gets data via props.

  return (
    <div className="artists">
      <h3>{props.artists.name}</h3>
      <p>Art Professions: {props.artists.art_professions}</p>
      <p>Email: {props.artists.email}</p>
      <p>Phone Number: {props.artists.phone_number}</p>
      <p>Art Portfolio: {props.artists.art_portfolio}</p>
    </div>
  );
}

export default Artists;
