function Artists(props) {
  //presentational component_ displays and gets data via props

  return (
    <div className="artists">
      <h2>{props.artists.name}</h2>
      <p>Bio: {props.artists.bio}</p>
      <p>Contact: {props.artists.contact_Information}</p>
      <p>Art Portfolio: {props.artists.art_portfolio}</p>
    </div>
  );
}

export default Artists;
