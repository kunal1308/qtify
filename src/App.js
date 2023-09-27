import { useEffect, useState } from 'react';
import NavBar from './components/Navbar/NavBar';
import Hero from "./components/Hero/Hero"
 //eslint-disable-next-line
import Card from './components/Card/card';
import Section from './components/Section/Section';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api';
import FaqAccordion from './components/FaqAccordion/Accordion';
import styles from "./App.module.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredDataValue,setFilteredDataValue] = useState([]);
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbums(data);
    } catch (error) {
      console.log(error)
    }
  }

  const generateNewAlbums = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbums(data);
    } catch (error) {
      console.log(error)
    }
  }

  const generateAllSongs = async () => {
    try {
      const res = await fetchSongs();
      console.log(res)
      setSongs(res);
      setFilteredDataValue(res);
    } catch (error) {
      console.error(error);
    }
  };

 const generateFilterSongs = async (value) => {
   let key;
   if(value === 0) {
    filteredData(songs);
    return;
   }else if(value===1) {
    key="rock";
   }else if(value===2) {
    key="pop"
   }else if(value===3) {
    key="jazz"
   }else if(value===4) {
    key="blues"
   }
   const  res = songs.filter((item) => item.genre.key === key);
   filteredData(res);
   console.log(res)
  };

  const filteredData = (val) => {
    setFilteredDataValue(val)
  }
 

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateAllSongs();
  }, [])

  useEffect(()=> {
    generateFilterSongs(value);
    console.log(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value])

  

 return (
    <div className="App">
    <NavBar data={[...topAlbums, ...newAlbums]}/>
    <Hero />
    <div className={styles.sectionWrapper}>
    <Section data={topAlbums} type="album" title="Top Albums" filteredDataValue={topAlbums} />
    <Section data = {newAlbums} type="album" title="New Albums" filteredDataValue={newAlbums} />
    <Section data= {songs} type="song" title="Songs" filteredData={filteredData} filteredDataValue={filteredDataValue} value={value} handleChange={handleChange} />
    </div>
    <FaqAccordion />
    </div>
  );
}

export default App;
