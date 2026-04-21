export default function ArtistCard({ props })  {
  return (
    <div className="card" id = {props.artists.id}>
      <h2>{props.artists.name}</h2>
      <h3>{props.artists.genre}</h3>
      <p>{props.artists.bio}</p>
      <ui>
        <li>{props.artists.albums[0].title}, {props.artists.albums[0].year}</li>
        <li>{props.artists.albums[1].title}, {props.artists.albums[1].year}</li>
      </ui>
    </div>
  );
}