import "./gallery.css";
import React from 'react';
import UploadForm from "./uploadform";



const AddPost = ({ history, posts, setPosts }) => {
  const handleOnSubmit = (post) => {
    console.log("here")
    console.log(posts)
    setPosts([post, ...posts]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <UploadForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};


export default AddPost;