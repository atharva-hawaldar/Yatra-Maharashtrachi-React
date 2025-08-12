
import React, { useState } from 'react';
import './FortDetails.css';
import { useParams } from 'react-router-dom';

import karlaMain from './images/Caves/cavesMain/karlacaves.jpg';
import bedseMain from './images/Caves/cavesMain/BEDSE.jpg';
import elephantaMain from './images/Caves/cavesMain/Elephanta.jpg';
import elloraMain from './images/Caves/cavesMain/ellora.jpg';
import pandavleniMain from './images/Caves/cavesMain/pandavleni.jpg';
import pitalkhoraMain from './images/Caves/cavesMain/Pitalkhora.jpg';

import kg1 from './images/Caves/karlacaves/kg1.jpeg';
import kg2 from './images/Caves/karlacaves/kg2.jpeg';
import kg3 from './images/Caves/karlacaves/kg3.jpeg';
import kg4 from './images/Caves/karlacaves/kg4.jpeg';
import kg5 from './images/Caves/karlacaves/kg5.jpeg';
import kg6 from './images/Caves/karlacaves/kg6.jpeg';


import bg1 from './images/Caves/bedse/bg1.jpeg';
import bg2 from './images/Caves/bedse/bg2.jpeg';
import bg3 from './images/Caves/bedse/bg3.jpeg';
import bg4 from './images/Caves/bedse/bg4.jpeg';
import bg5 from './images/Caves/bedse/bg5.jpeg';
import bg6 from './images/Caves/bedse/bg6.jpeg';


import eg1 from './images/Caves/Elephanta/eg1.jpeg';
import eg2 from './images/Caves/Elephanta/eg2.jpeg';
import eg3 from './images/Caves/Elephanta/eg3.jpeg';
import eg4 from './images/Caves/Elephanta/eg4.jpeg';
import eg5 from './images/Caves/Elephanta/eg5.jpeg';
import eg6 from './images/Caves/Elephanta/eg6.jpeg';

import elg1 from './images/Caves/Ellora/elg (1).jpeg';
import elg2 from './images/Caves/Ellora/elg (2).jpeg';
import elg3 from './images/Caves/Ellora/elg (3).jpeg';
import elg4 from './images/Caves/Ellora/elg (4).jpeg';
import elg5 from './images/Caves/Ellora/elg (5).jpeg';
import elg6 from './images/Caves/Ellora/elg (6).jpeg';


import pg1 from './images/Caves/pandavleni/pg (1).jpg';
import pg2 from './images/Caves/pandavleni/pg (1).png';
import pg3 from './images/Caves/pandavleni/pg (2).jpg';
import pg4 from './images/Caves/pandavleni/pg (3).jpg';
import pg5 from './images/Caves/pandavleni/pg (4).jpg';
import pg6 from './images/Caves/pandavleni/pg (5).jpg';

import pk1 from './images/Caves/pitalkhora/pkg (1).avif';
import pk2 from './images/Caves/pitalkhora/pkg (1).jpg';
import pk3 from './images/Caves/pitalkhora/pkg (2).jpg';
import pk4 from './images/Caves/pitalkhora/pkg (3).jpg';
import pk5 from './images/Caves/pitalkhora/pkg (4).jpg';
import pk6 from './images/Caves/pitalkhora/pkg (5).jpg';


const caveData = {
  karla: {
    title: "KARLA CAVES",
    mainImage: karlaMain,
    description: `The Karla Caves, also known as Karle Caves, are a group of ancient Buddhist rock-cut caves located near Lonavala in the Pune district of Maharashtra. Dating back to around the 2nd century BCE to the 5th century CE, these caves are among the oldest and most well-preserved examples of early Indian rock-cut architecture. Built primarily during the Satavahana period, they served as important monastic complexes for Buddhist monks and as rest stops for traders traveling along the ancient trade route that connected the Deccan plateau with the Arabian Sea. Carved into a rocky hillside, the Karla Caves reflect a unique blend of artistic beauty, religious significance, and engineering skill.

The most famous structure in the complex is the Great Chaitya Hall (prayer hall), which is the largest of its kind in India, measuring about 45 meters long and 14 meters high. This hall features a magnificent wooden umbrella-like structure called a chhatri over the stupa, along with intricate stone carvings depicting humans, animals, and celestial beings. The façade of the Chaitya is adorned with a large horseshoe-shaped window that allows natural light to illuminate the interior, creating a serene and spiritual atmosphere. Surrounding the hall are pillars decorated with detailed carvings of elephants and riders, showcasing the exceptional craftsmanship of the period.

Apart from the main Chaitya, the complex includes several Viharas (monastic cells) where monks lived and meditated. These chambers are simpler in design but hold great historical significance as they reflect the ascetic lifestyle of early Buddhist monks. The caves also contain inscriptions in Prakrit language, some of which mention donations made by traders, officials, and royalty, indicating the important role patronage played in their construction.

Located about 11 km from Lonavala and 60 km from Pune, the Karla Caves are easily accessible and are best visited between October and March for pleasant weather. Visitors must climb about 350 steps to reach the site, passing through a pathway lined with small shops selling snacks, souvenirs, and local handicrafts. Adjacent to the caves is the Ekvira Devi Temple, a popular pilgrimage spot for the Koli fishing community, adding a vibrant cultural dimension to the visit.

The Karla Caves stand as a remarkable testament to India’s Buddhist heritage, offering a rare glimpse into ancient art, religion, and trade. With their massive prayer hall, detailed carvings, and serene setting, they remain a must-visit destination for history lovers, architecture enthusiasts, and spiritual seekers alike.`,
    location: "Karla, near Lonavala, Pune district, Maharashtra",
    nearestCity: "Lonavala (~11 km away)",
    duration: "Exploration: ~1–2 hours",
    height: "622 m above sea level",
    gallery: [
      kg1,
      kg2,
      kg3,
      kg4,
      kg5,
      kg6
    ],
    activities: [
      "Explore Buddhist chaitya and vihara halls",
      "Admire ancient carvings and inscriptions",
      "Climb the scenic stairway to the caves",
      "Visit the Ekvira Devi temple nearby",
      "Enjoy panoramic views of the valley"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  bedse: {
    title: "BEDSE CAVES",
    mainImage: bedseMain,
    description: `The Bedse Caves, located near Kamshet in the Pune district of Maharashtra, are a lesser-known but historically rich set of Buddhist rock-cut caves dating back to the 1st century BCE. Believed to have been built during the Satavahana period, these caves form part of the same network of ancient Buddhist sites as the Karla and Bhaja Caves. Though smaller and less crowded, Bedse offers a peaceful and untouched atmosphere, making it ideal for travelers seeking history without the tourist rush. Perched on a hill about 9 km from Kamshet, the caves require a climb of around 400 well-laid stone steps, offering scenic views of the surrounding countryside, especially lush and vibrant during the monsoon.

The complex consists of two main caves—a Chaitya (prayer hall) and a Vihara (monastic dwelling). The Chaitya features a beautifully carved horseshoe-shaped arch at its entrance, allowing light to stream in and illuminate the stupa inside. The pillars and walls of this hall are adorned with simple yet elegant carvings of animals, floral designs, and human figures, reflecting the early style of Buddhist rock-cut architecture. The adjacent Vihara contains small monk cells with stone beds, where monks lived, meditated, and studied. Outside the caves are rock-cut water cisterns, an essential feature for sustaining life in the monastic settlement.

Inscriptions in the caves mention donations from merchants and devotees, highlighting the role of trade routes in spreading Buddhism. The location of Bedse along ancient trade paths made it a convenient stop for travelers and monks moving between the coast and the Deccan plateau.

The best time to visit Bedse Caves is from June to February. Monsoon months (June–September) cover the hills in greenery, with waterfalls dotting the surrounding landscape, while winter offers clear skies and cooler trekking conditions. As the caves are less frequented, there are no food stalls at the top, so visitors should carry water and snacks.

Bedse Caves stand as a quiet reminder of Maharashtra’s Buddhist heritage. Their combination of spiritual history, simple yet graceful architecture, and scenic surroundings makes them a hidden gem worth exploring—especially for those who prefer serene, crowd-free historical sites over busier tourist destinations.`,
    location: "Bedse village, Maval taluka, Pune district, Maharashtra",
    nearestCity: "Talegaon (~15 km away)",
    duration: "Hike and explore: ~1–2 hours",
    height: "550 m above sea level",
    gallery: [
      bg1,
      bg2,
      bg3,
      bg4,
      bg5,
      bg6
    ],
    activities: [
      "View beautifully sculpted pillars and stupas",
      "Enjoy peaceful hiking trail to caves",
      "Photograph ancient rock-cut architecture",
      "Observe natural beauty and rural surroundings",
      "Escape touristy crowds"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  elephanta: {
    title: "ELEPHANTA CAVES",
    mainImage: elephantaMain,
    description: `Elephanta Caves, located on Elephanta Island about 11 km off the coast of Mumbai in Maharashtra, are a UNESCO World Heritage Site and one of India’s most celebrated examples of rock-cut architecture. Dating back to between the 5th and 8th centuries CE, these caves are believed to have been built by the Kalachuri or Chalukya rulers and were later patronized by various dynasties. The island was originally known as Gharapuri (meaning “city of caves”), but it was renamed “Elephanta” by the Portuguese in the 16th century after they found a large stone elephant statue near the shore, which now resides in Mumbai’s Jijamata Udyan.

The site comprises two groups of caves—five large Hindu caves and two smaller Buddhist caves—carved directly into basalt rock. The Hindu caves are primarily dedicated to Lord Shiva and contain some of the most exquisite stone sculptures in Indian art. The most famous among them is the Maheshmurti, a 20-foot-high, three-headed bust of Shiva representing his aspects as Creator, Preserver, and Destroyer. Other notable panels depict scenes from Shaivite mythology, including Ardhanarishvara (half-male, half-female form of Shiva), Gangadhara (the descent of the Ganga), and Kalyanasundara (Shiva’s marriage to Parvati). The caves also house pillared halls, sanctums, and intricate carvings that display a blend of artistic mastery and spiritual symbolism.

The Buddhist caves, though smaller and simpler, feature stupas and meditation chambers that reflect the island’s early Buddhist influence before it became a Shaivite stronghold. Many parts of the caves were damaged during Portuguese occupation, as they reportedly used the site for target practice, but much of the grandeur still survives.

To reach Elephanta Caves, visitors take a one-hour ferry ride from Mumbai’s Gateway of India, offering scenic views of the harbor. From the island’s jetty, a short toy train ride and a climb of about 120 steps lead to the caves. The best time to visit is between November and March, when the weather is pleasant; monsoon visits can be risky due to rough seas. Facilities on the island include small eateries, souvenir shops, and guided tours.

Elephanta Caves stand as a magnificent blend of art, history, and devotion. Their colossal sculptures, rich mythology, and unique island setting make them not just a historical monument but a journey into India’s spiritual and artistic past, leaving visitors in awe of the craftsmanship achieved more than a thousand years ago.`,
    location: "Elephanta Island, Mumbai Harbour, Maharashtra",
    nearestCity: "Mumbai (~11 km by boat)",
    duration: "Boat trip + visit: ~3–4 hours",
    height: "Sea level",
    gallery: [
      eg1,
      eg2,
      eg3,
      eg4,
      eg5,
      eg6
    ],
    activities: [
      "Take ferry ride from Gateway of India",
      "Explore majestic Shiva sculptures",
      "Hike through island paths",
      "Shop local handicrafts at stalls",
      "Learn history at Elephanta museum"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  ellora: {
    title: "ELLORA CAVES",
    mainImage: elloraMain,
    description: `ChatGPT said:
Ellora Caves, located near Aurangabad in Maharashtra, are one of the largest and most remarkable rock-cut cave complexes in the world and a UNESCO World Heritage Site. Dating from around the 6th to 10th centuries CE, Ellora is unique for its coexistence of three major religions—Buddhism, Hinduism, and Jainism—reflected in its 34 monasteries and temples carved into the basalt cliffs of the Charanandri Hills. This cultural harmony, combined with breathtaking artistry, makes Ellora a shining example of India’s religious tolerance and architectural brilliance during the ancient and medieval periods.

The complex is divided into three sections:

Buddhist Caves (1–12): These are the oldest, dating from the 6th–7th centuries, and include viharas (monastic halls), chaityas (prayer halls), and exquisite carvings of the Buddha, bodhisattvas, and celestial beings. Notable among them is Cave 10, the Visvakarma Cave or “Carpenter’s Cave,” with its grand chaitya hall and ribbed stone ceiling designed to resemble wooden beams.

Hindu Caves (13–29): Built between the 7th and 9th centuries, these are the most elaborate, filled with massive sculptures and intricate carvings depicting scenes from Hindu epics like the Ramayana and Mahabharata. The crown jewel is Cave 16 – Kailasa Temple, an awe-inspiring monolithic structure carved from a single rock, representing Mount Kailash, the abode of Lord Shiva. It is considered the largest rock-cut monolithic structure in the world and showcases incredible precision, with detailed sculptures of deities, animals, and mythological scenes.

Jain Caves (30–34): Built in the 9th–10th centuries, these caves are smaller but noted for their detailed carvings, intricate pillars, and serene representations of Jain Tirthankaras. Cave 32, the Indra Sabha, is particularly famous for its ornate ceiling work and finely carved figures.

Ellora’s architecture is not only a marvel of engineering but also a testament to artistic devotion—craftsmen painstakingly carved temples and halls from top to bottom, creating structures that blend seamlessly with the natural rock face. The site was an important religious center and a hub for trade and cultural exchange along ancient routes.

Located about 30 km from Aurangabad, Ellora is easily accessible by road, and the best time to visit is from October to March when the weather is cooler. Visitors should set aside at least half a day, preferably a full day, to explore the vast complex.

Ellora Caves remain a timeless symbol of India’s rich cultural heritage, where stone transforms into poetry, and faith takes form in some of the most extraordinary carvings and monuments ever created. Standing within its halls, one can feel the echoes of centuries of devotion, artistry, and spiritual vision`,
    location: "Verul, near Aurangabad, Maharashtra",
    nearestCity: "Aurangabad (~30 km away)",
    duration: "Exploration: ~3–4 hours",
    height: "700 m above sea level",
    gallery: [
      elg1,
      elg2,
      elg3,
      elg4,
      elg5,
      elg6
    ],
    activities: [
      "Visit Kailasa temple – carved from a single rock",
      "Explore Buddhist, Hindu & Jain cave clusters",
      "Admire sculptures and murals",
      "Take guided historical tours",
      "Visit nearby Daulatabad Fort"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  pandavleni: {
    title: "PANDAVLENI CAVES",
    mainImage: pandavleniMain,
    description: `
Pandavleni Caves, also called Trirashmi Caves, are a remarkable set of 24 rock-cut caves situated on Trirashmi Hill, about 8 km from Nashik city in Maharashtra. These caves date back nearly 2,000 years, with construction spanning from the 1st century BCE to the 3rd century CE. They were primarily carved by Buddhist monks during the Hinayana phase of Buddhism, serving as viharas (monastic dwellings) and chaityas (prayer halls). The caves are not directly related to the Pandavas from the Mahabharata—despite the name—but the title “Pandavleni” became popular over time due to local folklore.

The caves are renowned for their intricate rock-cut architecture and inscriptions in the Brahmi script, which provide valuable historical evidence of ancient trade and religious patronage in the region. Many of these inscriptions record donations made by local kings, traders, and devotees, indicating that Nashik was once an important Buddhist learning and trade center. The interiors feature exquisitely carved pillars, stone benches for monks, water tanks, and artistic doorways, reflecting the skill and devotion of ancient craftsmen.

The location of Pandavleni Caves offers not only historical richness but also scenic beauty. Perched on a hill, the site provides a panoramic view of the city of Nashik and its surroundings. Visitors often combine the historical exploration with a short trek to reach the caves, enjoying the peaceful and meditative environment. The natural rock formations, along with the carefully planned water management system of the caves, showcase the practical ingenuity of the Buddhist monastic community.

Today, Pandavleni Caves are a protected monument under the Archaeological Survey of India (ASI) and attract historians, archaeologists, spiritual seekers, and tourists alike. They serve as a reminder of Maharashtra’s Buddhist heritage and the cultural exchanges that took place along ancient trade routes. The blend of spiritual calm, architectural brilliance, and natural beauty makes Pandavleni Caves one of the most fascinating historical sites in the state.

.`,
    location: "Trimbak Road, Nashik, Maharashtra",
    nearestCity: "Nashik (~8 km away)",
    duration: "Hike and explore: ~1–2 hours",
    height: "300 m above Nashik",
     gallery: [
      pg1,
      pg2,
      pg3,
      pg4,
      pg5,
      pg6
    ],
    activities: [
      "Hike up to caves with panoramic view",
      "Explore viharas, stupas, and inscriptions",
      "Photograph rock-cut architecture",
      "Enjoy peaceful ambiance",
      "Visit Jain temple nearby"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  pitalkhora: {
    title: "PITALKHORA CAVES",
    mainImage: pitalkhoraMain,
    description: `The Pitalkhora Caves, situated in the Satmala Hills of Maharashtra’s Aurangabad district, are believed to date back to the 2nd century BCE and are among the earliest examples of rock-cut Buddhist architecture in India. They form a group of 14 rock-cut monuments, with some serving as chaitya-grihas (prayer halls) and others as viharas (monastic living quarters). These caves are carved out of fragile basalt rock, which has caused significant weathering over centuries, but the artistry and scale of the surviving structures still convey their former grandeur.

The site is remarkable for its sculptural richness—intricate carvings of elephants, lions, yakshas, and floral patterns decorate the pillars and walls. These motifs are not merely decorative but also carry symbolic meaning within Buddhist art, representing strength, protection, and spiritual guardianship. The caves also contain Brahmi script inscriptions, which provide valuable historical records of donors, monastic communities, and rulers who supported the site.

Historically, Pitalkhora was positioned near major ancient trade routes connecting the Deccan Plateau with western coastal ports. This strategic location made it a vital hub for Buddhist monks who relied on merchant patronage. Travelers and traders often stopped here, making the caves both a religious and social gathering place. The presence of water reservoirs carved into the rock indicates advanced planning to support monastic life throughout the year.

From an architectural perspective, the caves showcase a transition in Buddhist art from the early Hinayana phase—where Buddha was represented symbolically—to the Mahayana phase, which introduced anthropomorphic images. While many sculptures have suffered due to erosion, archaeologists note that the scale of the chaitya hall and the refinement of pillar designs influenced later, more famous cave sites like Ajanta and Ellora.

Today, despite being less popular than other heritage sites in Maharashtra, Pitalkhora remains a treasure trove for historians, archaeologists, and travelers seeking a peaceful, offbeat destination. Surrounded by greenery and seasonal waterfalls, the caves offer not just an insight into early Buddhist architecture but also a serene retreat into nature.`,
    location: "Satmala hills, Aurangabad district, Maharashtra",
    nearestCity: "Aurangabad (~78 km away)",
    duration: "Hike and explore: ~2–3 hours",
    height: "800 m above sea level",
    gallery: [
      pk1,
      pk2,
      pk3,
      pk4,
      pk5,
      pk6
    ],
    activities: [
      "Visit ancient Buddhist caves",
      "Trek through lush valleys and forest trail",
      "Explore rock-cut inscriptions",
      "Watch seasonal waterfalls",
      "Enjoy secluded and natural surroundings"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  }
};

const CavesDetails = () => {
  const { caveId } = useParams();
  const cave = caveData[caveId];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!cave) return <h2 className="not-found">❌ Cave Not Found</h2>;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => setCurrentImageIndex((prev) => (prev - 1 + cave.gallery.length) % cave.gallery.length);
  const showNext = () => setCurrentImageIndex((prev) => (prev + 1) % cave.gallery.length);

  return (
    <div className="fort-details-container">
      <div className="title-wrapper">
        <div className="title-line"></div>
        <h1 className="fort-title">{cave.title}</h1>
        <div className="title-line"></div>
      </div>

      <img className="fort-main-img" src={cave.mainImage} alt={cave.title} />

      <div className="content-section">
        <div className="fort-description">
          <p>{cave.description}</p>
        </div>
        <div className="fort-info">
          <ul>
            <li><strong>📍 Location:</strong> {cave.location}</li>
            <li><strong>🏙️ Nearest City:</strong> {cave.nearestCity}</li>
            <li><strong>⏱ Visit Duration:</strong><br />{cave.duration}</li>
            <li><strong>🗻 Elevation:</strong> {cave.height}</li>
          </ul>

          <div className="map-container" dangerouslySetInnerHTML={{ __html: cave.mapEmbed }}></div>
        </div>
      </div>

      {cave.gallery.length > 0 && (
        <>
          <h3 className="section-heading">Gallery</h3>
          <div className="fort-gallery">
            {cave.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${cave.title} view ${index + 1}`}
                className="gallery-img"
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </>
      )}

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>✖</button>
          <button className="nav-btn left" onClick={showPrev}>⟨</button>
          <img src={cave.gallery[currentImageIndex]} alt="Full View" className="lightbox-img" />
          <button className="nav-btn right" onClick={showNext}>⟩</button>
        </div>
      )}

      <div className="activities-section">
        <div className="activities-heading">Activities</div>
        <ul className="activities-list">
          {cave.activities.map((activity, i) => (
            <li key={i}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CavesDetails;
