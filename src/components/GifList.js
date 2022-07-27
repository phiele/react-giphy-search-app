import React from "react";
import Gif from "./Gif.js";

const GifList = (props) => {
  let {gifList, setId} = props;

  console.log('render GifList component')

  return (
    <div className="gif-list">
      { gifList.map( gif => <Gif id={gif.id} setId={setId} title={gif.title} /> ) }
    </div>
  )
}

export default GifList;
