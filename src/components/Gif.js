import React from "react";

const Gif = (props) => {
  const {id, setId, title} = props

  const handleImgClick = (e) => {
    // set id to re-render selected gif
    setId(id);
    console.log(`id: ${id}`)
    // copy link to clipboard
    navigator.clipboard.writeText(e.target.src)
    console.log(`copied link: ${e.target.src}`)
  }

  const src = `https://i.giphy.com/media/${id}/giphy.gif`

  // console.log('render Gif component')

  return (
    <img className="gif" src={src} alt={title} onClick={handleImgClick}/>
  )
}

export default Gif;
