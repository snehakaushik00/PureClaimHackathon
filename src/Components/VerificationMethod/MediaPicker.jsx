import React, { useState } from "react"
import Card from "./Card"

const MediaPicker = () => {
  const [mediaFile, setMediaFile] = useState(null);

  const handleMediaChange = (e) => {
    setMediaFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle media submission
    console.log("Media submitted:", mediaFile);
  };

  return (
    <Card>
    <form onSubmit={handleSubmit} className="d-flex flex-column mx-auto my-auto gap-5 ">
      <input type="file" onChange={handleMediaChange} />
      <button type="submit" className="btn btn-success w-50">Submit</button>
    </form>
    </Card>
  );
};

export default MediaPicker;
