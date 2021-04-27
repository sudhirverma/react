import React from "react";
import { Link } from "@reach/router";

// const Pet = ({ name, animal, breed }) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("h3", {}, breed),
//   ]);
// };

const Pet = ({ name, animal, breed, media, location, id }) => {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
    // <div>
    //   <h1>{name}</h1>
    //   <h2>{animal}</h2>
    //   <h3>{breed}</h3>
    // </div>
  );
};

export default Pet;
