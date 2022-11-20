import ReactDOM from "react-dom/client";
import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";
import AddPost from "./addpost";

import "./gallery.css";

function Gallery() {



    const img1 = "https://picsum.photos/100/100";
    const img2 = "https://picsum.photos/200/200";
    const img3 = "https://picsum.photos/300/300";
    const img4 = "https://picsum.photos/400/400";
    const img5 = "https://picsum.photos/500/400";
    const img6 = "https://picsum.photos/400/500";



    const items = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ]

  return (
    <div className="main_page">
      <div className="gallery_header">
        <div className="user_name">
          <Link to="gallery">Gallery</Link>
        </div>
        <div className="website_name">Snap Store</div>
        <div className="sign_out">
          <Link to="/signout">Sign out</Link>
        </div>
      </div>

      <div className="gallery_content">
      <div className="container">
          {/* this is the upload image component */}
         <AddPost />

        {/* This is the image timeline */}
        <div className="timeline">
            {/* this is a gallery item */}

            {items.map((value) => {
                return (
                    <div className="gallery_item" >
                        <div className="user_info">
                            Robinson
                        </div>

                        <div className="uploaded-image">
                            <img src={value} alt="Random-images"></img>
                        </div>

                        <div className="caption">
                            <h3>Yiyle</h3>
                            <p>This is a PHOTO.</p>
                        </div>
                    </div>
                )
            })}

        </div>
      </div>
    </div>

    </div>
  );
}

export default Gallery;
