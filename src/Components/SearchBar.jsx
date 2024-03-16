import searchIcon from '../assets/magnifying-glass-solid.svg';
import SearchInput from './SearchInput';
import "../assets/search.css";

function SearchBar(){
    return (
        <div className="search-bar">
            <SearchInput />
            <img src={searchIcon} alt="Search" className="search-icon" style={{width: "20px"}}/>
        </div>
    )

}

export default SearchBar;