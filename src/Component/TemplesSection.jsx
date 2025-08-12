import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import shivaImg from './images/temples/ShivaTemple .png';
import adasaImg from './images/temples/adasa.jpeg';
import ganpatipuleImg from './images/temples/GanpatipuleTemple.png';
import panchgangaImg from './images/temples/PanchgangaTemple.png';
import deekshabhoomiImg from './images/temples/Deekshabhoomi.png';
import iskconImg from './images/temples/IsckonTemple.png';

const temples = [
  {
    id: 'shiva',
    name: 'SHIVA TEMPLE',
    image: shivaImg,
    description: `Located approximately 10 kilometers from the city center, the Shiva Temple is one of the region's oldest and most revered temples. Dedicated to Lord Shiva, it showcases intricate stone carvings, ancient idols, and a rich spiritual atmosphere. Devotees gather in large numbers during Maha Shivratri to offer prayers and participate in night-long chanting and rituals. The temple is surrounded by serene nature, making it a peaceful destination for both devotees and travelers seeking tranquility.`,
  },
  {
    id: 'adasa',
    name: 'ADASA GANESH TEMPLE',
    image: adasaImg,
    description: `A marvel of Indian design and spirituality, Akshar Capital is not just a temple but a cultural campus that celebrates values, heritage, and devotion. The temple features intricately carved sandstone, majestic domes, and a light and sound show that narrates ancient stories. It also houses an exhibition hall, musical fountains, and beautiful gardens that captivate visitors of all ages. It stands as a symbol of peace, purity, and architectural brilliance.`,
  },
  {
    id: 'ganpatipule',
    name: 'GANPATIPULE TEMPLE',
    image: ganpatipuleImg,
    description: `Situated along the scenic Konkan coastline, the Ganpatipule Temple is famous for its naturally formed idol of Lord Ganesha, believed to be 'Swayambhu' (self-manifested). The temple faces the Arabian Sea and offers a serene and spiritual ambiance. Pilgrims visit year-round to offer prayers and participate in festivals like Ganesh Chaturthi. The beach next to the temple makes it a unique place where nature and divinity coexist beautifully.`,
  },
  {
    id: 'panchganga',
    name: 'PANCHGANGA TEMPLE',
    image: panchgangaImg,
    description: `The Panchganga Temple is located at the holy confluence of five sacred rivers—Krishna, Venna, Savitri, Gayatri, and Saraswati. Steeped in mythology, it is believed that these rivers originate from a cow's mouth (Gaumukh) inside the temple. Pilgrims come to bathe in the holy waters and perform rituals. With its ancient stone architecture and spiritual energy, this temple is a must-visit for anyone exploring historical religious sites in the region.`,
  },
  {
    id: 'deekshabhoomi',
    name: 'DEEKSHABHOOMI',
    image: deekshabhoomiImg,
    description: `Situated in the heart of Nagpur, Deekhabhoomi is one of the biggest stupas in Asia. Inaugurated in 2001, the structure is a replica of the famous stupa at Sanchi, Madhya Pradesh. Dr Babasaheb Ambedkar embraced Buddhism here in 1956. On the day of Dhammachakra Pravartin, a mega-event is organised to celebrate the mass conversion day when more than six million embraced Buddhism at once.`,
  },
  {
    id: 'isckon',
    name: 'ISKCON TEMPLE',
    image: iskconImg,
    description: `Iscken Temple, a modern-day spiritual center associated with the ISKCON movement, is a sanctuary of devotion to Lord Krishna and Radha. Known for its peaceful ambiance, the temple offers daily aartis, bhajans, and community meals. The structure combines traditional Indian temple architecture with modern design. Visitors often engage in meditation, spiritual discourse, and devotional singing, making it a vibrant hub for seekers of inner peace and spiritual growth.`,
  },
];

const TemplesSection = () => {
  const [search, setSearch] = useState('');

  const filteredTemples = temples.filter((temple) =>
    temple.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <header>
        <h1 style={styles.title}>T E M P L E S</h1>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Which temple are you visiting?"
            style={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button style={styles.button}>Search</button>
        </div>
      </header>

      <main>
        {filteredTemples.length === 0 ? (
          <p style={styles.noResults}>No temples found for that search.</p>
        ) : (
          filteredTemples.map((temple, index) => (
            <Link to={`/temple/${temple.id}`} key={index} style={styles.card} className="temple-card">
              <img
                src={temple.image}
                alt={temple.name}
                style={styles.image}
                className="temple-image"
              />
              <div>
                <h2 style={styles.cardTitle}>{temple.name}</h2>
                <p style={styles.description}>{temple.description}</p>
              </div>
            </Link>
          ))
        )}
      </main>

      <style>{`
        .temple-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .temple-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        }

        .temple-image {
          transition: transform 0.4s ease;
        }
        .temple-card:hover .temple-image {
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

export default TemplesSection;
