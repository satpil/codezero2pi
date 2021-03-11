import React from "react";
import axios from "axios";
import "./Table.css";

function Table() {
  const [movie, setMovie] = React.useState("");

/***Movie api call to get data of movies */

  React.useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=movie&apikey=63a2c41b")
      .then((res) => setMovie(res.data.Search))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <React.Fragment>
      <table id="customers">
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Year</th>
        </tr>
        {movie &&
          movie.map((e) => {
            return (
              <tr key={e.imdbID}>
                <td>{e.Title}</td>
                <td>{e.Type}</td>
                <td>{e.Year}</td>
              </tr>
            );
          })}
      </table>
    </React.Fragment>
  );
}

export default Table;
