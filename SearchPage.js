import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import PlanetCard from '../components/PlanetCard';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState('');
  const [searchCount, setSearchCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await axios.get('https://swapi.dev/api/planets/');
      setPlanets(response.data.results);
    };
    fetchPlanets();
  }, []);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    if (user.name === 'Luke Skywalker' && searchCount >= 15) {
      alert('Max search limit exceeded for Luke Skywalker');
      return;
    }

    try {
      const response = await axios.get(`https://swapi.dev/api/planets/?search=${e.target.value}`);
      setPlanets(response.data.results);
      setSearchCount(searchCount + 1);
    } catch (error) {
      console.error('Error searching planets:', error);
    }
  };

  return (
    <div className="search-page">
      <input 
        type="text" 
        value={search} 
        onChange={handleSearch} 
        placeholder="Search planets..."
      />
      <div className="planet-list">
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
