import { useEffect, useState } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [albums, setAlbums] = useState({}); // State for segregated albums
  const [expandedAlbum, setExpandedAlbum] = useState(null); // State to track the expanded album

  const fetchPhotos = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      if (data && data.length) {
        setPhotos(data);
      } else {
        setErrMsg("No photos and albums to display");
      }
    } catch (error) {
      setErrMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the photos when the component mounts
  useEffect(() => {
    fetchPhotos(url);
  }, []);

  // Segregate photos into albums whenever the photos are updated
  useEffect(() => {
    if (photos.length) {
      const segregatedAlbums = {};
      photos.forEach((photo) => {
        const { albumId } = photo;
        if (!segregatedAlbums[albumId]) {
          segregatedAlbums[albumId] = [];
        }
        segregatedAlbums[albumId].push(photo);
      });
      setAlbums(segregatedAlbums);
    }
  }, [photos]);

  // Handle clicking an album card to expand/collapse it
  const handleAlbumClick = (albumId) => {
    // If the clicked album is already expanded, collapse it. Otherwise, expand it.
    setExpandedAlbum((prev) => (prev === albumId ? null : albumId));
  };

  // Render UI
  if (loading) return <p>Loading...</p>;
  if (errMsg) return <p>{errMsg}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Albums</h1>
      {/* Display the album cards */}
      {Object.keys(albums).map((albumId) => (
        <div key={albumId}>
          {/* Album Card */}
          <div
            onClick={() => handleAlbumClick(albumId)} // Handle click on album
            className="cursor-pointer p-4 border m-2 bg-gray-100"
          >
            <h2>Album {albumId}</h2>
          </div>

          {/* Display the photos if this album is expanded */}
          {expandedAlbum === albumId && (
            <ul>
              {albums[albumId].map((photo) => (
                <li key={photo.id} className="p-2 border-b">
                  <img src={photo.url} alt={photo.title} height={100} width={100}/>
                  <p>{photo.title}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
