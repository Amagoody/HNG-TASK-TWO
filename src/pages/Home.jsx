import React, { useEffect, useState } from "react";
import Featured from "../components/Featured";
import Footer from "../components/footer/Footer";
import { CircularProgress } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";

const Home = () => {

    const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL = "https://api.themoviedb.org/3/movie/top_rated?";
  const API_KEY = "33d388825e76e9b397dba3d1301d3706";

  useEffect(() => {
    fetch(`${API_URL}api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
        <section>
            <Navbar />
        </section>
        <section>
            <Featured movies={movies} />
            <div className="loading">
            {loading && (
                <CircularProgress isIndeterminate color="#BE123C" size="120px" />
            )}
            </div>
            {errorMessage && (
            <>
                {" "}
                <p>No result found</p>
            </>
            )}
        </section>
        <section>
            <Footer />
        </section>
    </div>
  )
}

export default Home