import React,{useState} from 'react';
import { ReactComponent as SearchIcon } from '../../assets/Search icon.svg';
import styles from "./Search.module.css";

const Search = ({placeholder, data}) => {
  const [val, setVal] = useState(null);
  // eslint-disable-next-line
  const [filteredAlbum, setFilteredAlbum] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const changeHandler = (e) => {
    setVal(e.target.value);
    const res = data.filter(item => item.title.includes(e.target.value));
    setFilteredAlbum(res);
  }
  return (
    <div>
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder={placeholder} required value={val} onChange={changeHandler}/>
            <div>
                <button className={styles.searchButton} type="submit">
                  <SearchIcon />
                </button>
            </div>
        </form>
        {/* {val?<></>:null} */}
    </div>
  )
}

export default Search