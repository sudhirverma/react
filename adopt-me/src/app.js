import React, { useState } from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
//   ]);
// };

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        <Pet name="Doink" animal="Cat" breed="Mixed" /> */}

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          {/* <SearchParams /> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
