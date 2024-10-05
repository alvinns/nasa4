import React, { useState } from 'react';
import ExoplanetCard from './ExoplanetCard';
import './ExoplanetExplorer.css';

const exoplanets = [
  {
    name: 'HD 189733b',
    distance: '64.5 light years',
    airPercentage: '30',
    
    image: 'https://github.com/AkhildevCV/nasa/blob/main/image.png?raw=true', // Updated with your image
    
    description: 'This exoplanet features extreme weather, including 1,500 mph winds and rain made of glass. Its vivid blue color is due to silicate particles in the atmosphere.',
    waterPresence: 'No',
     threeDLink: 'https://science.nasa.gov/exoplanet-catalog/hd-189733-b'
  },
  {
    name: 'WASP-12b',
    distance: '1,410 light years',
    airPercentage: '45',
    image: 'https://raw.githubusercontent.com/AkhildevCV/nasa/main/WASP.png', 

    
    description: 'WASP-12b is a hot Jupiter that is being torn apart by its star, making it an interesting case for understanding extreme conditions.',
    waterPresence: 'No',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/wasp-12-b'
  },
  {
    name: '55 Cancri e',
    distance: '41 light years',
    airPercentage: '20',
    image: 'https://github.com/AkhildevCV/nasa/blob/main/cancri%20e.png?raw=true', // Updated with your image
    
    description: '55 Cancri e is a super-Earth believed to be covered in a thick layer of diamond due to its high carbon content and extreme pressures.',
    waterPresence: 'No',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/55-cancri-e'
  },
  {
    name: 'K2-18b',
    distance: '124 light years',
    airPercentage: '80',
    image: 'https://github.com/AkhildevCV/nasa/blob/main/k2-18b.png?raw=true', // Updated with your image
    
    description: 'K2-18b is a potentially habitable exoplanet where water vapor was detected in its atmosphere, sparking interest in its potential for life.',
    waterPresence: 'Yes',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/k2-18-b',

    name: 'TRAPPIST-1e',
    distance: '39 light years',
    airPercentage: '65',
    image: 'https://github.com/AkhildevCV/nasa/blob/main/trsppidy.jpg?raw=true', // Updated with your image
    
    description: 'TRAPPIST-1e is one of seven Earth-size planets orbiting a nearby star, and may be the most suitable for life.',
    waterPresence: 'Likely',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/trappist-1-e',
  },
  
  
 
  
  {
    name: 'HD 209458 b',
    distance: '159 light years',
    airPercentage: '25',
    image: 'https://github.com/AkhildevCV/nasa/blob/main/kepler.png?raw=true', // Updated with your image
    
    description: 'HD 209458 b is known for being the first exoplanet detected transiting its host star, making it a key target for study.',
    waterPresence: 'No',
    threeDLink: 'https://science.nasa.gov/exoplanet-catalog/hd-189733-b'
  },
 
 
];

const ExoplanetExplorer = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
  const [likedPlanets, setLikedPlanets] = useState([]);

  const filteredPlanets = exoplanets.filter(planet =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchVisible(!searchVisible);
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPlanetIndex(0);
  };

  const handleNextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % filteredPlanets.length);
  };

  const handlePreviousPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex - 1 + filteredPlanets.length) % filteredPlanets.length);
  };

  const handleLike = (planetName) => {
    setLikedPlanets(prevLiked => 
      prevLiked.includes(planetName)
        ? prevLiked.filter(name => name !== planetName)
        : [...prevLiked, planetName]
    );
  };

  return (
    <div className="exoplanet-explorer">
      {searchVisible && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search planets..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      )}
      {filteredPlanets.length > 0 ? (
        <ExoplanetCard 
          planet={filteredPlanets[currentPlanetIndex]} 
          onSearch={handleSearch}
          onLike={handleLike}
          isLiked={likedPlanets.includes(filteredPlanets[currentPlanetIndex].name)}
        />
      ) : (
        <p className="no-results">No planets found</p>
      )}
      <div className="navigation-buttons">
        <button onClick={handlePreviousPlanet} className="nav-button">Previous</button>
        <button onClick={handleNextPlanet} className="nav-button">Next</button>
      </div>
    </div>
  );
};

export default ExoplanetExplorer;
