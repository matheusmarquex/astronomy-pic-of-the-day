/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./style.scss";
function App() {
  const [pic, setPic] = useState({});

  useEffect(async () => {
    const res = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=yt4o1iyvrQUhoOzmdhu9yqHpb57gAvmiNAmomUBg"
    );
    const data = await res.json();
    setPic(data);
  }, []);

  return (
    <div className="container">
      <div className="div__title">
        <div>
          <h1>Astronomy Picture Of The Day</h1>
        </div>
        <div>
          <h2>{pic.date}</h2>
        </div>
      </div>

      <div className="div__copyright">
        <p>{pic.copyright}</p>
      </div>

      <div className="container__video__expl">
        <div className="div__video">
          {pic.media_type === "image" ? (
            <img src={pic.url} alt="image" width="600px"/>
          ): (
            <iframe
            width="560"
            height="315"
            src={pic.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            id="idframe"
          ></iframe>
          )}
        </div>
        <div className="div__exp">
          <p>{pic.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
