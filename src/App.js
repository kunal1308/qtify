import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import Hero from "./components/Hero/Hero"
import Card from './components/Card/card';
import { fetchTopAlbums } from './api/api';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    generateData();
  }, [])
  return (
    <div className="App">
    <NavBar />
    <Hero />
    {topAlbums.map((item) => {
      return (
        <Card key={item.id} data={item} type="album" />
      )
    })}
    </div>
  );
}

export default App;
