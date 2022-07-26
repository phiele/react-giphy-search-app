import { useState, useEffect } from "react";
import giphy from "giphy-api";
import SearchBar from "./components/SearchBar.js";
import GifList from "./components/GifList.js";
import Gif from "./components/Gif.js";

function App() {
  const [id, setId] = useState('MeJgB3yMMwIaHmKD4z');
  const [search, setSearch] = useState('');
  const [gifList, setGifList] = useState([]);


  useEffect(() => {
    console.log(`App effect running with id: ${id}`)
  }, [id])

  useEffect(() => {
    // Search with options using promise
    giphy(process.env.REACT_APP_GIPHY_API_KEY)
    .search({
      q: search,
      limit: 15
    })
    .then(function (res) {
      // Res contains gif data!
      console.log(res.data)
      setGifList(res.data)
    });
    // console.log(`search: ${search}`)
  }, [search]);


  // console.log('render App component')

  return (
    <div className="container">
      <div className="left-scene">
        <SearchBar search={search} setSearch={setSearch} />
        <div className="selected-gif">
          <Gif id={id} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifList={gifList} setId={setId} />
      </div>
    </div>
  );
}

export default App;