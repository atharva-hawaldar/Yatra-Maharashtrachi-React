import React, { useState } from "react";
import { Link } from "react-router-dom";
import ganpatipuleImg from "./images/beaches/Ganpatipule.png";
import tarkarliImg from "./images/beaches/Tarkarli.png";
import diveagarImg from "./images/beaches/Divegar.png";
import shrivardhanImg from "./images/beaches/Shrivardhan.png";
import bordiDahanuImg from "./images/beaches/Bordi Dahanu.png";
import velneshwarImg from "./images/beaches/Velneshwar.png";

function BeachesSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const beaches = [
    {
      id: "ganpatipule",
      title: "GANPATIPULE BEACH",
      image: ganpatipuleImg,
      description:
        "Home to one of the few white sand beaches in the state, Ganpatipule is a small town of just 100 houses mainly marked by neatly drawn roads, red soil and roofed houses. Spirituality and nature come together in this town dedicated to Lord Ganesha. Come, experience the divine in this serene land that welcomes thousands of pilgrims from all over the country each year.",
    },
    {
      id: "tarkarli",
      title: "TARKARLI BEACH",
      image: tarkarliImg,
      description:
        "Immerse yourself in the tranquility of Tarkarli where you can experience swooshing waves and tropical coral reefs. It won’t be too hard to spot the swirling barracuda, giant squids, and turtles gliding by. Tarkarli is also an adventure hub known for its thrilling water sports which include boating, jet ski, parasailing and much more.",
    },
    {
      id: "diveagar",
      title: "DIVEAGAR BEACH",
      image: diveagarImg,
      description:
        "Nestled along the famous Konkan coast, Diveagar is a paradise waiting to be explored. If you are looking for a unique experience, you should definitely tick this hidden gem off your bucket list Gallop on a horse along the Konkan coastline that is adorned with a glittering beach and panoramic sunset view",
    },
    {
      id: "shrivardhan",
      title: "SHRIVARDHAN BEACH",
      image: shrivardhanImg,
      description:
        "Escape to one of the oldest, secluded and most beautiful beach towns - Shrivardhan. With the relaxing sound of the waves and the wind creating the best music for your ears, this breathtaking beach is sure to fascinate you. Known for its pristine white sand and long coastline, Shrivardhan beach is an idyllic place to escape the busy schedule of your fast-paced life.",
    },
    {
      id: "bordidahanu",
      title: "BORDI-DAHANU BEACH",
      image: bordiDahanuImg,
      description:
        "At Bordi Dahanu, you can unwind leisurely as you meander along the 17-kilometer coastline, surrounded by mangroves on one side and the calm waters of the Konkan region on the other. Since this is a green zone, it is free of any urbanisation making it the perfect getaway for an unwinding experience.",
    },
    {
      id: "velneshwar",
      title: "VELNESHWAR BEACH",
      image: velneshwarImg,
      description:
        "With its scenic crescent-shaped shoreline dotted with towering coconut trees, Velneshwar truly is Maharashtra’s hidden gem when it comes to beaches. The rock-free sandy beaches are perfect for swimming or simply lounging around in peace by yourself or with your family.",
    },
  ];

  const filteredBeaches = beaches.filter((beach) =>
    beach.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <header>
        <h1 style={styles.title}>B E A C H E S</h1>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Which beach are you exploring?"
            style={styles.input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button style={styles.button}>Search</button>
        </div>
      </header>

      <main>
        {filteredBeaches.length === 0 ? (
          <p style={styles.noResults}>No beaches found for that search.</p>
        ) : (
          filteredBeaches.map((beach, index) => (
            <Link
              to={`/beach/${beach.id}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <div style={styles.card} className="beach-card">
                <img
                  src={beach.image}
                  alt={beach.title}
                  style={styles.image}
                  className="beach-image"
                />
                <div>
                  <h2 style={styles.cardTitle}>{beach.title}</h2>
                  <p style={styles.description}>{beach.description}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </main>

      <style>{`
        .beach-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .beach-card:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        }

        .beach-image {
          transition: transform 0.4s ease;
        }
        .beach-card:hover .beach-image {
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
}

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

export default BeachesSection;
