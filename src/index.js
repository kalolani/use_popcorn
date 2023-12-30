import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";
//import StarRating from "./StarRating";
import { useState } from "react";

/*function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} color="blue" onMovieRating={setMovieRating} />
      <p>this movie is rated {movieRating} stars</p>
    </div>
  );
}*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    />
    <Test />
    <StarRating maxRating={5} size={24} color="red" defaultRating={2} />
*/}
  </React.StrictMode>
);
