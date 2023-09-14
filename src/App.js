import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';  
import Home from "./pages/Home";
import Showcase from './components/sidebar/Showcase';
import MovieDetailsPage from './components/sidebar/MovieDetailsPage';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />}/>
          </Route>
          <Route path="" element={<Showcase />}>
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
