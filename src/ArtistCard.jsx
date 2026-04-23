import './ArtistCard.css'

export default function ArtistCard(props)  {
  return (
    <div className="card" id = {props.id}>
      <h2>{props.name}</h2>
      <h3>{props.genre}</h3>
      <p>{props.bio}</p>
      <ul>
        <li>{props.albums[0].title}, {props.albums[0].year}</li>
        <li>{props.albums[1].title}, {props.albums[1].year}</li>
      </ul>
    </div>
  );
}