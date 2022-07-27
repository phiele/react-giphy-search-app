import React from "react";
import Gif from "./Gif.js";

const GifList = (props) => {
  let {gifList, setId, search} = props;

  // console.log('render GifList component')

  return (
    <>
    <div className="gif-list">
      { gifList.map( gif => <Gif id={gif.id} setId={setId} title={gif.title} /> ) }
    </div>
    { (gifList.length === 0 && search === "") &&
      <p className="gif-list-feedback">Search results will go here...</p> }
    { (gifList.length === 0 && search !== "") &&
      <p className="gif-list-feedback">No results found ¯\_(ツ)_/¯</p>}
    </>
  )
}

export default GifList;
