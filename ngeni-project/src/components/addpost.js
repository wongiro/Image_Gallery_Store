import "./gallery.css";
import React from 'react';
import UploadForm from "./uploadform";



const AddPost = () => {
  const handleOnSubmit = (post) =>{
    console.log(post)
  };

  return (
    <React.Fragment>
      <UploadForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  )
};

export default AddPost;