import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import Hero from "./components/Hero/Hero"
 //eslint-disable-next-line
import Card from './components/Card/card';
import Section from './components/Section/Section';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const generateDataTopAlbums = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (error) {
      console.log(error)
    }
  }

  const generateDataNewAlbums = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbums(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    generateDataTopAlbums();
    generateDataNewAlbums();
  }, [])

  return (
    <div className="App">
    <NavBar />
    <Hero />
    <div>
    <Section data = {topAlbums} title = "Top Albums" />
  
    </div>
    </div>
  );
}

export default App;
