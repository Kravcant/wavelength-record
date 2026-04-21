export default function ArtistCard({ id, name, genre, bio, albums })  {
  return (
    <div className="card" id = {id}>
      <h2>{name}</h2>
      <h3>{genre}</h3>
      <p>{bio}</p>
      <ui>
        <li>{albums[0].title}, {albums[0].year}</li>
        <li>{albums[1].title}, {albums[1].year}</li>
      </ui>
    </div>
  );
}