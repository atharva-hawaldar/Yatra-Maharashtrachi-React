import React, { useState } from 'react';
import './FortDetails.css';
import { useParams } from 'react-router-dom';

import shivMain from './images/temples/templesMain/ShivaTemple .png';
import adasamain from './images/temples/templesMain/adasa.jpeg';
import ganpatimain from './images/temples/templesMain/ganpatipule.jpg';
import panchgangamain from './images/temples/templesMain/PanchgangaTemple.png';
import deekshabhoomimain from './images/temples/templesMain/deekshabhoomi.jpg';
import iskconmain from './images/temples/templesMain/iskcon.png';


import shg1 from './images/temples/shivtemple/shg (1).jpeg';
import shg2 from './images/temples/shivtemple/shg (2).jpeg';
import shg3 from './images/temples/shivtemple/shg (3).jpeg';
import shg4 from './images/temples/shivtemple/shg (4).jpeg';
import shg5 from './images/temples/shivtemple/shg (5).jpeg';
import shg6 from './images/temples/shivtemple/shg (6).jpeg';

import adg1 from './images/temples/adasa/adg (1).jpeg';
import adg2 from './images/temples/adasa/adg (2).jpeg';
import adg3 from './images/temples/adasa/adg (3).jpeg';
import adg4 from './images/temples/adasa/adg (4).jpeg';
import adg5 from './images/temples/adasa/adg (5).jpeg';
import adg6 from './images/temples/adasa/adg (6).jpeg';

import gpg1 from './images/temples/ganpatipule/gpg (1).jpeg';
import gpg2 from './images/temples/ganpatipule/gpg (2).jpeg';
import gpg3 from './images/temples/ganpatipule/gpg (3).jpeg';
import gpg4 from './images/temples/ganpatipule/gpg (4).jpeg';
import gpg5 from './images/temples/ganpatipule/gpg (5).jpeg';
import gpg6 from './images/temples/ganpatipule/gpg (6).jpeg';

import pg1 from './images/temples/panch/pg (1).jpeg';
import pg2 from './images/temples/panch/pg (2).jpeg';
import pg3 from './images/temples/panch/pg (3).jpeg';
import pg4 from './images/temples/panch/pg (4).jpeg';
import pg5 from './images/temples/panch/pg (5).jpeg';
import pg6 from './images/temples/panch/pg (6).jpeg';

import dkg1 from './images/temples/Deeksha Bhoomi/dkg (1).jpeg';
import dkg2 from './images/temples/Deeksha Bhoomi/dkg (2).jpeg';
import dkg3 from './images/temples/Deeksha Bhoomi/dkg (3).jpeg';
import dkg4 from './images/temples/Deeksha Bhoomi/dkg (4).jpeg';
import dkg5 from './images/temples/Deeksha Bhoomi/dkg (5).jpeg';
import dkg6 from './images/temples/Deeksha Bhoomi/dkg (6).jpeg';

import ig1 from './images/temples/iskcon/ig (1).jpeg';
import ig2 from './images/temples/iskcon/ig (2).jpeg';
import ig3 from './images/temples/iskcon/ig (3).jpeg';
import ig4 from './images/temples/iskcon/ig (4).jpeg';
import ig5 from './images/temples/iskcon/ig (5).jpeg';
import ig6 from './images/temples/iskcon/ig (6).jpeg';

const templeData = {
  shiva: {
    title: "SHIVA TEMPLE, AMBAJHARI",
    mainImage: shivMain,
    description: `The Shiva Temple stands as a timeless symbol of devotion, architectural brilliance, and cultural heritage. Dedicated to Lord Shiva — one of the principal deities of Hinduism, known as the destroyer and transformer — the temple is not merely a place of worship but also a center for spiritual reflection and community gatherings. Often located in serene surroundings such as riverbanks, hilltops, or lush green valleys, these temples radiate peace and a sense of sacredness that draws devotees and travelers alike. The rhythmic chants of “Om Namah Shivaya” and the gentle sound of temple bells create an atmosphere that instantly uplifts the soul.

Architecturally, many Shiva temples in Maharashtra reflect a fusion of ancient Hemadpanti stonework and Maratha-era craftsmanship. Tall shikharas (temple spires), intricately carved pillars, and detailed sculptures of divine figures adorn the sanctum. The main shrine, called the garbhagriha, houses the Shivalinga — often decorated with flowers, bilva leaves, and offered abhishekam (ritual bathing) with milk, water, and honey. Surrounding mandapas (halls) allow space for devotees to gather, perform rituals, and participate in bhajans (devotional songs). Many temples also feature beautifully carved depictions of Nandi, the sacred bull and Lord Shiva’s vehicle, placed right in front of the main sanctum.

The temple becomes a hub of celebration during the festival of Maha Shivaratri, which attracts thousands of pilgrims from across the state. Devotees fast, chant hymns, and participate in night-long jagrans (devotional vigils), creating a deeply spiritual and vibrant atmosphere. In rural areas, fairs are often organized around temple grounds during these festivals, blending spirituality with folk culture. Many Shiva temples are also linked to legends from the Puranas and local folklore, making them historically and mythologically significant.

Beyond religion, the Shiva Temple plays an important role in preserving local traditions. It serves as a venue for storytelling, classical music performances, and even community decision-making in earlier times. The temple architecture often showcases local art forms — from stone carvings to wooden doors with brass embellishments — making it a living museum of craftsmanship. Some temples even have ancient inscriptions, giving historians clues about the social, political, and cultural life of earlier centuries.

The spiritual significance of the temple lies not only in rituals but also in the deep philosophy of Lord Shiva’s teachings — detachment, inner peace, and the cyclical nature of creation and destruction. Sitting in the temple courtyard, listening to the soft ringing of the bell and the murmuring prayers, one can feel a deep connection to the divine. The environment encourages introspection, meditation, and a break from the noise of daily life.

For travelers, visiting a Shiva Temple in Maharashtra is not just a religious experience but also a cultural journey. Whether it’s the majestic Trimbakeshwar Temple in Nashik, the cliffside Kaas Pathar Mahadev Mandir, or smaller hidden gems in rural villages, each has its own story to tell. They are places where history, spirituality, and artistry converge, offering visitors a chance to step into a world where time seems to stand still, and the eternal presence of Lord Shiva can be felt in every stone and prayer`,
    location: "Ambajhari, Nagpur, Maharashtra",
    nearestCity: "Nagpur",
    duration: "Open: 6 AM – 9 PM",
    height: "N/A",
    gallery: [
      shg1,
      shg2,
      shg3,
      shg4,
      shg5,
      shg6
    ],
    activities: [
      "Offer prayers to Shiva Lingam",
      "Attend Mahashivratri festivities",
      "Enjoy peaceful meditation time",
      "Witness traditional aarti rituals"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.6610604685856!2d79.0152623142315!3d21.119367485952417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c2b5cd44a9%3A0x1dfb65cfef5b5829!2sShiva%20Temple%2C%20Ambajhari!5e0!3m2!1sen!2sin!4v1754579000000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  adasa: {
    title: "ADASA GANESH TEMPLE",
    mainImage: adasamain,
    description: `The Shiva Temple stands as a timeless symbol of devotion, architectural brilliance, and cultural heritage. Dedicated to Lord Shiva — one of the principal deities of Hinduism, known as the destroyer and transformer — the temple is not merely a place of worship but also a center for spiritual reflection and community gatherings. Often located in serene surroundings such as riverbanks, hilltops, or lush green valleys, these temples radiate peace and a sense of sacredness that draws devotees and travelers alike. The rhythmic chants of “Om Namah Shivaya” and the gentle sound of temple bells create an atmosphere that instantly uplifts the soul.

Architecturally, many Shiva temples in Maharashtra reflect a fusion of ancient Hemadpanti stonework and Maratha-era craftsmanship. Tall shikharas (temple spires), intricately carved pillars, and detailed sculptures of divine figures adorn the sanctum. The main shrine, called the garbhagriha, houses the Shivalinga — often decorated with flowers, bilva leaves, and offered abhishekam (ritual bathing) with milk, water, and honey. Surrounding mandapas (halls) allow space for devotees to gather, perform rituals, and participate in bhajans (devotional songs). Many temples also feature beautifully carved depictions of Nandi, the sacred bull and Lord Shiva’s vehicle, placed right in front of the main sanctum.

The temple becomes a hub of celebration during the festival of Maha Shivaratri, which attracts thousands of pilgrims from across the state. Devotees fast, chant hymns, and participate in night-long jagrans (devotional vigils), creating a deeply spiritual and vibrant atmosphere. In rural areas, fairs are often organized around temple grounds during these festivals, blending spirituality with folk culture. Many Shiva temples are also linked to legends from the Puranas and local folklore, making them historically and mythologically significant.

Beyond religion, the Shiva Temple plays an important role in preserving local traditions. It serves as a venue for storytelling, classical music performances, and even community decision-making in earlier times. The temple architecture often showcases local art forms — from stone carvings to wooden doors with brass embellishments — making it a living museum of craftsmanship. Some temples even have ancient inscriptions, giving historians clues about the social, political, and cultural life of earlier centuries.

The spiritual significance of the temple lies not only in rituals but also in the deep philosophy of Lord Shiva’s teachings — detachment, inner peace, and the cyclical nature of creation and destruction. Sitting in the temple courtyard, listening to the soft ringing of the bell and the murmuring prayers, one can feel a deep connection to the divine. The environment encourages introspection, meditation, and a break from the noise of daily life.

For travelers, visiting a Shiva Temple in Maharashtra is not just a religious experience but also a cultural journey. Whether it’s the majestic Trimbakeshwar Temple in Nashik, the cliffside Kaas Pathar Mahadev Mandir, or smaller hidden gems in rural villages, each has its own story to tell. They are places where history, spirituality, and artistry converge, offering visitors a chance to step into a world where time seems to stand still, and the eternal presence of Lord Shiva can be felt in every stone and prayer.`,
    location: "Adasa Village, Nagpur District, Maharashtra",
    nearestCity: "Nagpur (~45 km)",
    duration: "20–30 min from base (easy)",
    height: "Approx. 1000 feet elevation",
    gallery: [
      adg1,
      adg2,
      adg3,
      adg4,
      adg5,
      adg6
    ],
    activities: [
      "Darshan of 12-foot Ganesha idol",
      "Climb 50+ steps to the hilltop temple",
      "Enjoy panoramic views",
      "Celebrate Ganesh Chaturthi festival"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.4513046173163!2d78.90556561454503!3d21.276354181237864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4dd1e0ccf7c1b%3A0xdbead6dcb9566d67!2sAdasa%20Ganesh%20Temple!5e0!3m2!1sen!2sin!4v1754579100000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  ganpatipule: {
    title: "GANPATIPULE TEMPLE",
    mainImage: ganpatimain,
    description: `Ganpatipule is a serene coastal town located on the Konkan coast of Maharashtra, about 375 km south of Mumbai. It is famous for its pristine beach with golden sands and clear blue waters, making it one of the most picturesque destinations in the state. The town gets its name from the 400-year-old Swayambhu (self-manifested) idol of Lord Ganesha, which is the main attraction here. Unlike other temples where the deity faces east, the Ganpatipule temple’s idol faces west, towards the sea, believed to protect the land and its people. The unique location of the temple on the shore creates a stunning backdrop for spiritual seekers and tourists alike.

Ganpatipule Beach is around 6 km long and is ideal for peaceful walks, relaxing, and enjoying the sea breeze. While the waters can be rough for swimming, visitors can indulge in water sports like jet skiing, banana boat rides, and parasailing. The beach is relatively less crowded compared to other popular beaches, which adds to its charm. Sunset views here are truly mesmerizing, with the horizon painted in shades of orange, pink, and purple, offering a picture-perfect moment for photographers and nature lovers.

The Ganpatipule Temple attracts thousands of pilgrims every year, especially during Ganesh Chaturthi and Magh Chaturthi festivals. Devotees believe that praying here fulfills wishes and brings prosperity. The temple complex also offers panoramic views of the Arabian Sea, making it a peaceful spot for meditation. The rhythmic sound of waves combined with the chanting of prayers creates a divine atmosphere that is hard to find elsewhere.

Apart from the beach and temple, Ganpatipule serves as a base to explore nearby attractions like Malgund, the birthplace of the famous Marathi poet Kavi Keshavsut, and Jaigad Fort, located about 20 km away. The Jaigad Fort offers historical insights and breathtaking views of the Jaigad Creek and the Arabian Sea. The nearby Prachin Konkan Museum is also worth visiting for a glimpse into the traditional lifestyle, culture, and history of the Konkan region.

Ganpatipule is also known for its coconut groves, mango orchards, and authentic Konkani cuisine. Local delicacies such as modak, solkadhi, fish curry, and coconut-based sweets are must-tries for visitors. The place offers a perfect blend of spirituality, natural beauty, and cultural richness, making it a must-visit destination for both pilgrims and leisure travelers. Whether you come here for divine blessings or a relaxing holiday, Ganpatipule leaves you with unforgettable memories of peace and beauty.`,
    location: "Ganpatipule, Ratnagiri, Maharashtra",
    nearestCity: "Ratnagiri (~25 km)",
    duration: "Visit duration: 1–2 hours",
    height: "Sea level",
    gallery: [
      gpg1,
      gpg2,
      gpg3,
      gpg4,
      gpg5,
      gpg6
    ],
    activities: [
      "Pray to Swayambhu Ganesha idol",
      "Relax at Ganpatipule Beach",
      "Enjoy coastal temple views",
      "Shop local Konkani sweets and crafts"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.451761432258!2d73.28069381482162!3d17.146012188206154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf156b4bd1ec3f%3A0x6b818f4081f05994!2sGanpatipule%20Temple!5e0!3m2!1sen!2sin!4v1754579150000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  panchganga: {
    title: "PANCHGANGA TEMPLE",
    mainImage: panchgangamain,
    description: `Panchganga Temple is one of the most sacred and historically significant temples in Maharashtra, located in the beautiful hill station of Mahabaleshwar. The temple is dedicated to Lord Krishna and is famous for being the origin point of five rivers – Krishna, Venna, Koyna, Savitri, and Gayatri – which flow out from a single spout shaped like a cow’s mouth, called Gaumukh. The name “Panchganga” literally means “five rivers,” and this unique confluence makes the temple a major pilgrimage site for devotees and a fascinating attraction for tourists. Built in the 13th century by the Seuna (Yadava) King Singhandeo, the temple is a fine example of ancient Hemadpanti architecture.

The main sanctum of the temple houses a beautifully carved stone structure, from which the sacred waters emerge. The Gaumukh spout is believed to be divinely blessed, and pilgrims consider the water to be holy. Many devotees collect it in copper vessels or bottles to take home as tirtha (holy water). The temple itself is made of black stone, with an intricately designed mandap (pillared hall) and sloping tiled roof, blending perfectly with the lush green surroundings of Mahabaleshwar. Over the centuries, the temple has been renovated and expanded by different rulers, including the Marathas, who considered it a site of great religious importance.

One of the temple’s most striking features is its peaceful and spiritual atmosphere. Surrounded by dense forests and the cool climate of the Western Ghats, the Panchganga Temple offers a serene environment for meditation and prayer. The sound of flowing water, the scent of incense, and the gentle ringing of temple bells create an ambiance that calms the mind and soul. Pilgrims often visit early in the morning to perform rituals and offer prayers, believing that bathing in or drinking the Panchganga water purifies the body and soul.

Historically, the Panchganga Temple has been associated with several legends. According to mythology, the rivers Krishna, Venna, Koyna, Savitri, and Gayatri were created by Lord Brahma and flowed underground until they emerged at Mahabaleshwar. Another legend says that Lord Krishna himself visited the site, blessing it with eternal sanctity. The temple also finds mention in old Marathi scriptures and local folklore, which speak of its divine origins and miraculous waters.

Apart from its religious significance, the temple is also a popular tourist attraction because of its proximity to Mahabaleshwar’s scenic viewpoints. Visitors often combine their trip to the Panchganga Temple with other nearby spots like Arthur’s Seat, Venna Lake, and Wilson Point. The cool weather, combined with the spiritual vibe, makes it a year-round destination for both devotees and travelers.

During festivals like Janmashtami and Mahashivratri, the Panchganga Temple comes alive with special rituals, devotional music, and large gatherings of pilgrims. The temple is illuminated beautifully, and the atmosphere becomes charged with spiritual energy. For anyone visiting Mahabaleshwar, the Panchganga Temple is not just a religious site but also a place to experience the unique blend of nature, history, and spirituality that defines this region.`,
    location: "Old Mahabaleshwar, Satara, Maharashtra",
    nearestCity: "Satara (~55 km)",
    duration: "Visit duration: 30–45 minutes",
    height: "4,400 feet above sea level",
   gallery: [
      pg1,
      pg2,
      pg3,
      pg4,
      pg5,
      pg6
    ],
    activities: [
      "View river origin from Gaumukh",
      "Explore Yadava-era temple architecture",
      "Take a holy dip during monsoon",
      "Visit nearby heritage temples"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.618143964636!2d73.6549274147565!3d17.932898889941444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc265bfd2f7d351%3A0x3c733946a7d4ec88!2sPanchganga%20Temple!5e0!3m2!1sen!2sin!4v1754579200000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  deekshabhoomi: {
    title: "DEEKSHABHOOMI",
    mainImage: deekshabhoomimain,
    description: `Deekshabhoomi is a sacred monument and one of the most important landmarks in Nagpur, Maharashtra. It holds deep historical and spiritual significance, especially for followers of Buddhism in India. This site marks the place where Dr. Babasaheb Ambedkar, the chief architect of the Indian Constitution and a social reformer, embraced Buddhism along with over half a million followers on 14th October 1956, in a historic mass conversion ceremony. The event was a turning point in Indian history, symbolizing the rejection of caste-based discrimination and the embrace of equality, compassion, and human dignity.

The architectural centerpiece of Deekshabhoomi is a grand stupa (dome-shaped monument), inspired by the Sanchi Stupa. The structure is a magnificent example of modern Buddhist architecture and is one of the largest hollow domes in the world without a supporting pillar. Made of marble and Dholpur sandstone, the stupa’s serene white exterior creates a peaceful and meditative atmosphere. Inside, the stupa houses a large bronze statue of Lord Buddha in a meditative posture, along with relics of the Buddha and Dr. Ambedkar’s ashes, making it a deeply revered pilgrimage site.

Deekshabhoomi is not just a monument; it is a living center of cultural and social activity. Every year on Dhamma Chakra Pravartan Din (the anniversary of Dr. Ambedkar’s conversion to Buddhism), millions of people from across India and abroad visit the site to pay their respects and participate in spiritual gatherings, chanting, and discourses. The atmosphere during this time is vibrant and filled with devotion, unity, and hope for social transformation.

The site is surrounded by beautiful gardens, wide open spaces, and pathways lined with Buddhist flags and inscriptions from the Dhammapada (Buddha’s teachings). The quiet ambiance makes it ideal for meditation and self-reflection. The architecture harmonizes with the environment, promoting peace and introspection for visitors. Various halls and libraries at Deekshabhoomi provide resources for studying Buddhism, Ambedkar’s works, and social justice movements.

Beyond its religious significance, Deekshabhoomi stands as a powerful symbol of equality, liberty, and fraternity. It represents Dr. Ambedkar’s lifelong struggle against social inequality and his vision for a more humane and inclusive society. The monument continues to inspire millions to follow the path of wisdom, ethical living, and compassion, as taught by the Buddha.

Visiting Deekshabhoomi is not just a spiritual experience but also a journey through an important chapter in India’s socio-political history. Whether one is a follower of Buddhism or simply an admirer of history and architecture, Deekshabhoomi leaves a lasting impression through its grandeur, historical weight, and message of universal brotherhood.

`,
    location: "Nagpur City, Maharashtra",
    nearestCity: "Nagpur",
    duration: "1–2 hours",
    height: "Stupa height: ~120 feet",
    gallery: [
      dkg1,
      dkg2,
      dkg3,
      dkg4,
      dkg5,
      dkg6
    ],
    activities: [
      "Visit the grand stupa",
      "Attend Ambedkar Jayanti & Dhamma Chakra Pravartan Din",
      "Study Buddhist teachings and Ambedkar's legacy",
      "Explore the on-site museum"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.6399162390916!2d79.07485791423202!3d21.121014585951176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c01c0b7a6a11%3A0xb36f4f6a244e63cd!2sDeekshabhoomi!5e0!3m2!1sen!2sin!4v1754579250000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  isckon: {
    title: "ISKCON TEMPLE NAGPUR",
    mainImage: iskconmain,
    description: `ISKCON NVCC Pune – A Spiritual Haven in the City
The ISKCON New Vedic Cultural Centre (NVCC) in Pune is one of the largest and most beautiful ISKCON temples in India. Situated on the serene Katraj–Kondhwa Road, away from the city’s noise, it offers a perfect blend of spirituality, architecture, and cultural richness. The temple was inaugurated in 2013 and has since become a prominent landmark for devotees and tourists alike.

Architecture and Design
Built with white marble and sandstone, the temple showcases intricate carvings and elegant domes that reflect traditional Indian temple architecture while incorporating modern design elements. The spacious interiors, beautifully decorated altars, and peaceful surroundings create an atmosphere of devotion and calmness. The temple complex also features lush green gardens that enhance its charm and provide visitors with a soothing environment.

Deities and Worship
The main deities worshipped here are Sri Sri Radha Vrindavanchandra, Sri Sri Gaur Nitai, and Sri Sri Jagannath, Baladeva, and Subhadra. The daily rituals include mangal aarti, darshan, and evening kirtans that fill the temple with divine energy. The rhythmic chanting of the Hare Krishna mantra and the vibrant bhajans create a spiritually uplifting experience for visitors.

Cultural and Educational Activities
ISKCON NVCC Pune is not just a place of worship but also a cultural hub. It organizes Bhagavad Gita study sessions, youth empowerment programs, spiritual retreats, and cultural festivals. The Sunday Feast, which includes delicious prasadam and spiritual discourses, is one of the most attended events. Major festivals such as Janmashtami, Gaura Purnima, and Ratha Yatra are celebrated here with grandeur and devotion, attracting thousands of devotees.

Facilities and Services
The temple complex houses Govinda’s Restaurant, which serves a variety of delicious vegetarian dishes prepared without onion and garlic. There is also a gift shop offering spiritual books, devotional music, handicrafts, and souvenirs. The well-maintained premises, courteous volunteers, and informative guided tours make the visit even more enjoyable for first-time visitors.

A Place for Peace and Inspiration
Whether you are a devotee seeking divine blessings, a tourist exploring Pune’s spiritual landmarks, or someone looking for peace and inspiration, ISKCON NVCC Pune offers an enriching experience. The combination of sacred ambience, cultural richness, and community service makes it a must-visit destination in Maharashtra`,
    location: "Hingna Road, Nagpur, Maharashtra",
    nearestCity: "Nagpur",
    duration: "Open: 4 AM – 9 PM",
    height: "N/A",
    gallery: [
      ig1,
      ig2,
      ig3,
      ig4,
      ig5,
      ig6
    ],
    activities: [
      "Attend daily Aarti and Bhajans",
      "Celebrate Janmashtami",
      "Eat delicious prasad",
      "Buy spiritual books and souvenirs"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.0892914010135!2d79.0177164142315!3d21.08893368601316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1012457ae7f%3A0xf5b7ff058c9e8c31!2sISKCON%20Temple%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1754579300000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  }
};

const TempleDetails = () => {
  const { templeId } = useParams();
  const temple = templeData[templeId];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!temple) return <h2 className="not-found">❌ Temple Not Found</h2>;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => setCurrentImageIndex((prev) => (prev - 1 + temple.gallery.length) % temple.gallery.length);
  const showNext = () => setCurrentImageIndex((prev) => (prev + 1) % temple.gallery.length);

  return (
    <div className="fort-details-container">
      <div className="title-wrapper">
        <div className="title-line"></div>
        <h1 className="fort-title">{temple.title}</h1>
        <div className="title-line"></div>
      </div>

      <img className="fort-main-img" src={temple.mainImage} alt={temple.title} />

      <div className="content-section">
        <div className="fort-description">
          <p>{temple.description}</p>
        </div>
        <div className="fort-info">
          <ul>
            <li><strong>📍 Location:</strong> {temple.location}</li>
            <li><strong>🏙️ Nearest City:</strong> {temple.nearestCity}</li>
            <li><strong>🕒 Timings:</strong><br />{temple.duration}</li>
            <li><strong>⛰️ Height:</strong> {temple.height}</li>
          </ul>

          <div className="map-container" dangerouslySetInnerHTML={{ __html: temple.mapEmbed }}></div>
        </div>
      </div>

      <h3 className="section-heading">Gallery</h3>
      <div className="fort-gallery">
        {temple.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Temple view ${index + 1}`}
            className="gallery-img"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>✖</button>
          <button className="nav-btn left" onClick={showPrev}>⟨</button>
          <img src={temple.gallery[currentImageIndex]} alt="Full View" className="lightbox-img" />
          <button className="nav-btn right" onClick={showNext}>⟩</button>
        </div>
      )}

      <div className="activities-section">
        <div className="activities-heading">Activities</div>
        <ul className="activities-list">
          {temple.activities.map((activity, i) => (
            <li key={i}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TempleDetails;
