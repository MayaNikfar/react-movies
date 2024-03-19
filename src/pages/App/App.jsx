import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';

import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';


function App() {
  const [user, setUser] = useState(null);
 
  return (
    <main className="App">
      { user ?
          <>
            <Routes>
                <Route path="/" element={< MoviesListPage/>}/>
                <Route path="/movies/:movieName" element={< MovieDetailPage/>}/>
                <Route path="/actors" element={< ActorListPage/>}/>
            </Routes>
          </>
          :
          <LoginPage  setUser={setUser}/>
      }   
    </main>
  );
}

export default App;
