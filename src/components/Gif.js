import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Gif = (props) => {
  const {id, setId, title} = props

  const handleImgClick = (e) => {
    // set id to re-render selected gif
    setId(id);
    console.log(`id: ${id}`)
    // copy link to clipboard
    navigator.clipboard.writeText(e.target.src)
    toast.info('Link copied', {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      // transition: Zoom,
      theme: "light",
      className: "toast"
      });
  }

  const src = `https://i.giphy.com/media/${id}/giphy.gif`

  // console.log('render Gif component')

  return (
    <>
      <img className="gif" src={src} alt={title} onClick={handleImgClick}/>
      <ToastContainer limit={3}/>
    </>
  )
}

export default Gif;
