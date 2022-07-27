import { useState, useEffect } from "react";
import giphy from "giphy-api";
import giphyImg from "./assets/giphy_640px.png";
import SearchBar from "./components/SearchBar.js";
import GifList from "./components/GifList.js";
import Gif from "./components/Gif.js";

function App() {
  const [id, setId] = useState('YJBNjrvG5Ctmo');
  const [search, setSearch] = useState('');
  const [gifList, setGifList] = useState([]);

  useEffect(() => {
    // search with options using promise
    giphy(process.env.REACT_APP_GIPHY_API_KEY)
    .search({
      q: search,
      limit: 25
    })
    .then(function (result) {
      // result contains gif data!
      console.log(result.data)
      setGifList(result.data)
    });
    console.log(`search: ${search}`)
  }, [search]);


  // console.log('render App component')

  return (
    <div className="container">
      <div className="left-scene">
        <SearchBar search={search} setSearch={setSearch} />
        <div className="selected-gif">
          <Gif id={id} />
        </div>
        <img className="giphy" src={giphyImg} alt="giphy"/>
      </div>
      <div className="right-scene">
        <GifList gifList={gifList} search={search} setId={setId} />
      </div>
    </div>
  );
}

export default App;
