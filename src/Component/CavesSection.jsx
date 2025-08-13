import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import karlaImg from './images/Caves/karla.png';
import bedseImg from './images/Caves/bedse.png';
import elephantaImg from './images/Caves/elephanta.png';
import elloraImg from './images/Caves/Ellora caves.png';
import pandavleniImg from './images/Caves/pandavleni.png';
import pitalkhoraImg from './images/Caves/pitalkhor.png';

const caves = [
  {
    id: 'karla',
    title: 'Karla Caves',
    image: karlaImg,
    description: "Karla Caves are one of Maharashtra's oldest and serene rock-cut Buddhist sites. Their historical significance and exquisite Buddhist sculptures have earned them an excellent reputation among tourists.",
  },
  {
    id: 'bedse',
    title: 'Bedse Caves',
    image: bedseImg,
    description: 'Bedse Caves are a group of Buddhist rock-cut monuments  situated in Maval taluka, Pune District, Maharashtra, India. The history of the caves can be traced back to the Satavahana period in the 1st  century BCE. They are some 9 km from the Bhaja Caves.',
  },
  {
    id: 'elephanta',
    title: 'The Elephanta Caves',
    image: elephantaImg,
    description: 'On an island a few kilometres off the Gateway of India, you ll find a City of Caves with an impressive display of Indian architecture dating back to the 2nd century. The small island hides many archaeological remains that showcase the rich culture of the area. While the caves were damaged over the centuries, there was an effort to restore them in the 1970s which led to its declaration as a UNESCO World Heritage Site in 1986.',
  },
  {
    id: 'ellora',
    title: 'The Ellora Caves',
    image: elloraImg,
    description: 'The Ellora Caves complex is an extraordinary example of ancient Indian architecture and artistry, representing a harmonious blend of Hindu, Buddhist, and Jain religious traditions. It consists of 34 major caves, excavated from the basalt cliffs of the Charanandri Hills.',
  },
  {
    id: 'pandavleni',
    title: 'Pandavleni Caves',
    image: pandavleniImg,
    description: 'The caves are situated on the Trirashmi Hills and consist of a total of 24 caves, carved out of the basalt rock. These caves were originally used as viharas (monasteries) and were a place of meditation and religious activities for Buddhist monks. The name "Pandavleni" comes from a popular belief that the Pandavas, characters from the Hindu epic Mahabharata, stayed in these caves during their exile',
  },
  {
    id: 'pitalkhora',
    title: 'Pitalkhora Caves',
    image: pitalkhoraImg,
    description: 'Pitalkhora Caves, located in Aurangabad, Maharashtra, are a group of ancient Buddhist rock-cut caves that hold significant historical and architectural importance. The caves are situated amidst the Sahyadri Mountain Range, approximately 40 kilometers from the city of Aurangabad.',
  },
];

const CavesSection = () => {
  const [search, setSearch] = useState('');

  const filteredCaves = caves.filter((cave) =>
    cave.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <header>
        <h1 style={styles.title}>C A V E S</h1>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Where are you going?"
            style={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button style={styles.button}>Search</button>
        </div>
      </header>

      <main>
        {filteredCaves.length === 0 ? (
          <p style={styles.noResults}>No caves found for that search.</p>
        ) : (
          filteredCaves.map((cave, index) => (
            <Link to={`/cave/${cave.id}`} key={index} style={styles.card} className="cave-card">
              <img
                src={cave.image}
                alt={cave.title}
                style={styles.image}
                className="cave-image"
              />
              <div>
                <h2 style={styles.cardTitle}>{cave.title}</h2>
                <p style={styles.description}>{cave.description}</p>
              </div>
            </Link>
          ))
        )}
      </main>

      <style>{`
        .cave-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .cave-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        }

        .cave-image {
          transition: transform 0.4s ease;
        }
        .cave-card:hover .cave-image {
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
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
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

export default CavesSection;
