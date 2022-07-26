import React from "react";

const Gif = (props) => {
  const {id, setId, title} = props

  const handleImgClick = (e) => {
    console.log(e.target.src)
    console.log(`id: ${id}`)
    setId(id);
  }

  const src = `https://i.giphy.com/media/${id}/giphy.gif`

  // console.log('render Gif component')

  return (
    <img className="gif" src={src} alt={title} onClick={handleImgClick}/>
  )
}

export default Gif;
