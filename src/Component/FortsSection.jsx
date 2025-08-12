import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import fort images
import rajgadImg from './images/forts/Rmainimg.png';
import tornaImg from './images/forts/torna.jpeg';
import shivneriImg from './images/forts/shivnary.jpeg';
import raigadImg from './images/forts/raigad.jpeg';
import murudImg from './images/forts/janjira.png';
import sinhagadImg from './images/forts/sinhagad.jpeg';

const forts = [
  {
    id: 'rajgad',
    name: 'RAJGAD FORT',
    image: rajgadImg,
    description: `Perched at 1,376 m atop the Sahyadri range, Rajgad Fort—literally “King of Forts”—served as the first capital of the Maratha Empire under Shivaji Maharaj for nearly 26 years before he shifted to Raigad.Formerly called Murumbdev, this sprawling hill fortress boasts legendary architecture, including palaces, cisterns, caves, and multiple terraces or machis and more....`
  },
  {
    id: 'torna',
    name: 'TORNA FORT',
    image: tornaImg,
    description: `Perched at 1,403 m in the Sahyadri hills, Torna Fort—originally named Prachandagad (meaning "Massive Fort")—is the highest hill fort near Pune. Built in the 13th century and captured by a 16-year-old Shivaji Maharaj in 1646, it marked the humble beginnings of the Maratha Empire`
  },
  {
    id: 'shivneri',
    name: 'SHIVNERI FORT',
    image: shivneriImg,
    description: `Tucked atop a rugged hill near Junnar in Maharashtra, Shivneri Fort is celebrated as the birthplace of Chhatrapati Shivaji Maharaj (born 19 Feb 1630) and a symbol of Maratha pride.Originally built by the Yadavas in the 6th century, the fort passed through Bahmani, Ahmadnagar, Mughal, Maratha, and British hands over centuries`
  },
  {
    id: 'raigad',
    name: 'RAIGAD FORT',
    image: raigadImg,
    description: `Perched majestically atop the Sahyadri range near Mahad at an elevation of 1,356 m, Raigad Fort—formerly Rairi—was transformed by Shivaji Maharaj into the iconic capital of the Maratha Empire in 1674, where he was crowned Chhatrapati on June 6 that year`
  },
  {
    id: 'murud',
    name: 'MURUD-JANJIRA FORT',
    image: murudImg,
    description: `Standing tall on an island off the coastal village of Murud in Maharashtra, Janjira Fort is a majestic sea fort surrounded by the Arabian Sea. Known for being impregnable and never conquered, Janjira was built by the Siddis in the 17th century and showcases a blend of Mughal and Indian architecture. With its 19 bastions, secret escape routes, and freshwater ponds amidst salty surroundings, Janjira is a symbol of strategic brilliance and strength. A boat ride to this fort offers not just scenic views but also a glimpse into an era of naval power and royal heritage.`
  },
  {
    id: 'sinhagad',
    name: 'SINHAGAD FORT',
    image: sinhagadImg,
    description: `Perched atop the Sahyadri hills near Pune, Sinhagad Fort is a historic hill fortress known for its breathtaking views and rich legacy of valor. Originally called Kondhana, it was later renamed Sinhagad, meaning “Lion’s Fort,” after the legendary battle fought by Tanaji Malusare, a brave Maratha warrior.`
  },
];

const FortsSection = () => {
  const [search, setSearch] = useState('');

  const filteredForts = forts.filter(fort =>
    fort.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <header>
        <h1 style={styles.title}>F O R T S</h1>
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
        {filteredForts.length === 0 ? (
          <p style={styles.noResults}>No forts found for that search.</p>
        ) : (
          filteredForts.map((fort, index) => (
            <Link to={`/fort/${fort.id}`} key={index} style={styles.card} className="fort-card">
              <img
                src={fort.image}
                alt={fort.name}
                style={styles.image}
                className="fort-image"
              />
              <div>
                <h2 style={styles.cardTitle}>{fort.name}</h2>
                <p style={styles.description}>{fort.description}</p>
              </div>
            </Link>
          ))
        )}
      </main>

      {/* CSS Effects */}
      <style>{`
        .fort-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .fort-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        }

        .fort-image {
          transition: transform 0.4s ease;
        }
        .fort-card:hover .fort-image {
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
    width: "90%",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
    textAlign: "left",
  },
  title: {
    fontSize: "48px",
    color: "orange",
    letterSpacing: "10px",
    marginBottom: "20px",
    textAlign: "left",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "40px",
  },
  input: {
    width: "400px",
    padding: "14px 22px",
    borderRadius: "30px",
    border: "2px solid #ddd",
    outline: "none",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "14px 28px",
    backgroundColor: "orange",
    border: "none",
    borderRadius: "30px",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "30px",
    gap: "25px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#f9f9f9",
    textDecoration: "none",
  },
  image: {
    width: "320px",
    height: "220px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    textTransform: "uppercase",
    color: "#333",
  },
  description: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#555",
  },
  noResults: {
    color: "gray",
    fontStyle: "italic",
  },
};

export default FortsSection;
