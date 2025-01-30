import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculator from "./projects/calculator/Calculator";
import { MovieProvider } from "./projects/movie-app/context/MovieContext";
import AddMovie from "./projects/movie-app/components/AddMovie";
import MovieList from "./projects/movie-app/components/MovieList";
import CitiesWeather from "./projects/weatherapp/CitiesWeather";
// import BlogPosts from "./projects/blog-posts/BlogPostsOnly";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/calculator">Calculator</Link>
              <Link to="/movie-app">Movie App</Link>
              {/* <Link to="/blog-posts">Blog Posts</Link> */}
              <Link to="/weatherapp">Weather App</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route
            path="/movie-app"
            element={
              <MovieProvider>
                <div className="App">
                  <header className="App-header">
                    <h1>Type the movie name to select from the movie list</h1>{" "}
                    <AddMovie /> <MovieList />
                  </header>
                </div>
              </MovieProvider>
            }
          />
          {/* <Route path="/blog-posts" element={<BlogPosts posts={[]} />} /> */}
          <Route path="/weatherapp" element={<CitiesWeather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
