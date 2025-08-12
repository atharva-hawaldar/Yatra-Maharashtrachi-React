import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import local images
import bhimashankarImg from './images/wildlife/BhimashankarWildlifeSanctuary.png';
import kaasImg from './images/wildlife/KaasPlateauReservedForest.png';
import penchImg from './images/wildlife/PenchNationalPark.png';
import borImg from './images/wildlife/BorTigerReserve.png';
import koynaImg from './images/wildlife/KoynaWildlifeSanctuary.png';
import sahyadriImg from './images/wildlife/SahyadriTigerReserve.png';

const wildlifeSpots = [
  {
    id: 'bhimashankar',
    title: 'Bhimashankar Wildlife Sanctuary',
    image: bhimashankarImg,
    description: `Home to the state animal of Maharashtra, Indian Giant Squirrel, the Bhimashankar Wildlife Sanctuary is a vast, bio-diverse wonder located 138 kilometres from the city of Pune. A certified IBA (Important Bird Area) sanctuary, it also boasts a diverse range of flora and fauna, making it one of the top 12 biodiversity hotspots across the world today!`,
  },
  {
    id: 'kaas',
    title: 'Kaas Plateau Reserved Forest',
    image: kaasImg,
    description: `With its dense forests and beautiful vegetation, the Kaas Plateau Reserved Forest is a gem waiting to be explored. Located just 30 mins ahead of Satara, the plateau houses Maharashtra’s very own valley of flowers and was declared a UNESCO World Natural Heritage Site in 2012. `,
  },
  {
    id: 'pench',
    title: 'Pench National Park',
    image: penchImg,
    description: `Named after the river that flows through it, Pench is also the only National Park and Tiger Reserve in India that is spread across two states - Madhya Pradesh and Maharashtra. In Maharashtra, you can visit it through any of these six safari gates - Chorbahuli, Khursapar, Khubada, Surewani, and Sillari. `,
  },
  {
    id: 'bor',
    title: 'Bor Tiger Reserve',
    image: borImg,
    description: `Situated in Hingni, in the Wardha district of Maharashtra, the Bor Tiger Reserve spans a vast expanse of 138 km and is home to a number of mammals, reptiles, and birds. It was formerly a wildlife sanctuary that was converted into a tiger reserve in 2014 to conserve and sustain the tiger population in India.`,
  },
  {
    id: 'koyna',
    title: 'Koyna Wildlife Sanctuary',
    image: koynaImg,
    description: `Nestled amidst the scenic Sahyadri Mountain Ranges in the Satara district of Maharashtra, the Koyna Wildlife Sanctuary is a UNESCO World Heritage Site famous for its stunning landscapes, multiple heritage sites, and abundant flora. It is one of Maharashtra's tiger reserves and home to many species of animals such as the Indian Bison, Sambar Deer, King Cobra, and the Giant Squirrel among others.  `,
  },
  {
    id: 'sahyadri',
    title: 'Sahyadri Tiger Reserve',
    image: sahyadriImg,
    description: `established in just 2008, the Sahyadri Tiger Reserve (commonly known as STR) resides in the dense and erratic terrains of the Sahyadri Mountain Ranges. With a total area of 1,166 square kilometres, it combines Koyna Wildlife Sanctuary, Chandoli National Park, and Radhanagari Wildlife Sanctuary into one vast region for you to explore. `,
  },
];

const WildlifeSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpots = wildlifeSpots.filter((spot) =>
    spot.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <header>
        <h1 style={styles.title}>W I L D L I F E</h1>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Where are you going?"
            style={styles.input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button style={styles.button}>Search</button>
        </div>
      </header>

      <main>
        {filteredSpots.length === 0 ? (
          <p style={styles.noResults}>No wildlife spots found.</p>
        ) : (
          filteredSpots.map((spot, index) => (
            <Link
              to={`/wildlife/${spot.id}`}
              key={index}
              style={styles.card}
              className="wildlife-card"
            >
              <img
                src={spot.image}
                alt={spot.title}
                style={styles.image}
                className="wildlife-image"
              />
              <div>
                <h2 style={styles.cardTitle}>{spot.title}</h2>
                <p style={styles.description}>{spot.description}</p>
              </div>
            </Link>
          ))
        )}
      </main>

      <style>{`
        .wildlife-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .wildlife-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .wildlife-image {
          transition: transform 0.4s ease;
        }

        .wildlife-card:hover .wildlife-image {
          transform: scale(1.05);
        }

        input:focus {
          box-shadow: 0 0 8px orange;
          border-color: orange;
        }

        button:hover {
          background-color: #ff9500;
          transform: scale(1.05);
        }

        button {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

const styles = {
  page: {
    width: '90%',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    textAlign: 'left',
  },
  title: {
    fontSize: '48px',
    color: 'orange',
    letterSpacing: '10px',
    marginBottom: '20px',
    textAlign: 'left',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '40px',
  },
  input: {
    width: '400px',
    padding: '14px 22px',
    borderRadius: '30px',
    border: '2px solid #ddd',
    outline: 'none',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  },
  button: {
    padding: '14px 28px',
    backgroundColor: 'orange',
    border: 'none',
    borderRadius: '30px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '30px',
    gap: '25px',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: '#f9f9f9',
    textDecoration: 'none',
  },
  image: {
    width: '320px',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textTransform: 'uppercase',
    color: '#333',
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#555',
  },
  noResults: {
    color: 'gray',
    fontStyle: 'italic',
  },
};

export default WildlifeSection;
