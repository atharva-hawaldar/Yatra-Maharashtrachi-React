import React, { useState } from 'react';
import './FortDetails.css';
import { useParams } from 'react-router-dom';

import ganmain from './images/beaches/beachesmain/ganapatipule-beach (1).jpg';
import tarmain from './images/beaches/beachesmain/tarkali.jpg';
import divmain from './images/beaches/beachesmain/divegar.jpg';
import shrimain from './images/beaches/beachesmain/Harihareshwar1.jpg';
import bordmain from './images/beaches/beachesmain/bori.jpg';
import velmain from './images/beaches/beachesmain/velneshwar.jpg';

import gng1 from './images/beaches/ganpatipule/gng (1).png';
import gng2 from './images/beaches/ganpatipule/gng (2).png';
import gng3 from './images/beaches/ganpatipule/gng (3).png';
import gng4 from './images/beaches/ganpatipule/gng (4).png';
import gng5 from './images/beaches/ganpatipule/gng (5).png';
import gng6 from './images/beaches/ganpatipule/gng (6).png';

import tg1 from './images/beaches/tarkali/tg (1).png';
import tg2 from './images/beaches/tarkali/tg (2).png';
import tg3 from './images/beaches/tarkali/tg (3).png';
import tg4 from './images/beaches/tarkali/tg (4).png';
import tg5 from './images/beaches/tarkali/tg (5).png';
import tg6 from './images/beaches/tarkali/tg (6).png';

import dg1 from './images/beaches/Div/dg (1).png';
import dg2 from './images/beaches/Div/dg (2).png';
import dg3 from './images/beaches/Div/dg (3).png';
import dg4 from './images/beaches/Div/dg (4).png';
import dg5 from './images/beaches/Div/dg (5).png';
import dg6 from './images/beaches/Div/dg (6).png';

import sig1 from './images/beaches/shri/sig (1).jpeg';
import sig2 from './images/beaches/shri/sig (2).jpeg';
import sig3 from './images/beaches/shri/sig (3).jpeg';
import sig4 from './images/beaches/shri/sig (4).jpeg';
import sig5 from './images/beaches/shri/sig (5).jpeg';
import sig6 from './images/beaches/shri/sig (6).jpeg';

import bdg1 from './images/beaches/bordi/bdg (1).png';
import bdg2 from './images/beaches/bordi/bdg (2).png';
import bdg3 from './images/beaches/bordi/bdg (3).png';
import bdg4 from './images/beaches/bordi/bdg (4).png';
import bdg5 from './images/beaches/bordi/bdg (5).png';
import bdg6 from './images/beaches/bordi/bdg (6).png';

import vg1 from './images/beaches/veleshwar/vg (1).jpeg';
import vg2 from './images/beaches/veleshwar/vg (1).png';
import vg3 from './images/beaches/veleshwar/vg (2).png';
import vg4 from './images/beaches/veleshwar/vg (3).png';
import vg5 from './images/beaches/veleshwar/vg (4).png';
import vg6 from './images/beaches/veleshwar/vg (5).png';

const beachData = {
  ganpatipule: {
    title: "GANPATIPULE BEACH",
    mainImage: ganmain,
    description: `Ganpatipule Beach is a stunning coastal destination located in the Ratnagiri district of Maharashtra, along the scenic Konkan coastline. Known for its pristine golden sands, clear turquoise waters, and unspoiled surroundings, it is one of the most popular beach getaways in the state. What makes Ganpatipule truly unique is its spiritual significance — it is home to the 400-year-old Swayambhu Ganpati Temple, which houses a naturally formed idol of Lord Ganesha. The temple faces the Arabian Sea, creating a rare and divine setting where the waves seem to offer prayers to the deity. This combination of spirituality and natural beauty draws thousands of visitors every year, making it a favorite spot for both pilgrims and tourists.
Spiritual Significance and Culture
The Swayambhu Ganpati Temple is the heart of Ganpatipule. Unlike other idols that are man-made, the idol here is believed to have emerged naturally from the earth, making it a sacred place for devotees. The temple’s architecture blends beautifully with the surrounding coastal landscape, and festivals like Ganesh Chaturthi are celebrated here with immense enthusiasm. During such occasions, the beach comes alive with colorful decorations, cultural programs, and a festive crowd. The region also reflects traditional Konkani culture, evident in its local cuisine, language, attire, and warm hospitality.
Natural Beauty and Serenity
Ganpatipule Beach stretches for several kilometers, offering a peaceful and clean environment far from the hustle and bustle of city life. The soft sand, gentle waves, and swaying coconut palms make it a perfect place to relax and rejuvenate. The sunsets here are breathtaking, as the golden rays reflect on the calm sea, creating a postcard-perfect view. Because the beach is less commercialized compared to other tourist spots, it retains its natural charm and is ideal for people who prefer tranquility over crowded attractions.
Adventure and Activities
Apart from relaxation, Ganpatipule Beach offers various activities for adventure seekers. Water sports like jet skiing, banana boat rides, and parasailing are available during the tourist season, usually from November to May. Visitors can also take long walks along the shore, indulge in horse or camel rides, or go cycling through the nearby villages. Nature lovers can explore nearby attractions such as Jaigad Fort, the lighthouse at Jaigad, Prachin Konkan Museum, and Bhandarpule Beach, which is just a short distance away and offers a quieter coastal experience.
Local Experiences and Cuisine
Ganpatipule is not only about the beach — the nearby Malgund village, the birthplace of the famous Marathi poet Kavi Keshavsut, is a cultural delight for literature lovers. Local markets offer authentic Konkani items, including handicrafts, souvenirs, and cashew products. The cuisine here is a treat for food lovers, with fresh seafood, traditional Maharashtrian thalis, and delicious sweets like Modak, which is closely associated with Lord Ganesha. Homestays and resorts often serve freshly cooked local meals, allowing visitors to experience the warm and homely hospitality of the Konkan region.
Best Time to Visit and Accessibility
The best time to visit Ganpatipule Beach is between November and February when the weather is pleasant and ideal for sightseeing and water sports. The summer months are hotter, while the monsoon season, though lush and beautiful, brings rough seas and high tides. Ganpatipule is easily accessible by road from major cities like Mumbai, Pune, and Ratnagiri, and the nearest railway station is Ratnagiri, about 30 km away. Accommodation options range from budget hotels to luxury resorts, catering to all types of travelers.

`,
    location: "Ganpatipule, Ratnagiri district, Maharashtra",
    nearestCity: "Ratnagiri (~32 km away)",
    duration: "Beachfront walk or sightseeing: ~1–2 hours",
    height: "Sea level",
    gallery: [
      gng1,
      gng2,
      gng3,
      gng4,
      gng5,
      gng6
    ],
    activities: [
      "Visit the Swayambhu Ganpati Temple",
      "Stroll along the sandy beach",
      "Watch vibrant Konkan sunsets",
      "Enjoy local Konkani cuisine",
      "Relax under Casuarina trees"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.950690983449!2d73.31407867447338!3d16.655868155148175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2121187e2cc1d%3A0xcae2600a5040f5ca!2sGanpatipule%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1754580000000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  tarkarli: {
    title: "TARKARLI BEACH",
    mainImage: tarmain,
    description: `Tarkarli Beach, located in the Sindhudurg district of Maharashtra, is renowned for its crystal-clear waters, long stretches of white sand, and serene surroundings. This beach is often referred to as the "Maldives of Maharashtra" due to its cleanliness and stunning turquoise-blue sea. The combination of scenic beauty and a peaceful environment makes it a perfect escape for couples, families, and adventure seekers alike.

One of Tarkarli's biggest attractions is its rich marine life. The waters here are ideal for scuba diving and snorkeling, allowing visitors to witness vibrant corals, colorful fish, and other fascinating sea creatures. Tarkarli is one of the few places in India where you can experience such underwater beauty without traveling abroad. Trained instructors and certified diving schools make it accessible even for beginners.

Beyond water sports, Tarkarli offers other exciting activities like parasailing, jet skiing, and boat rides to spot dolphins. The sight of dolphins gracefully leaping out of the water is a magical experience for tourists. The backwaters of the Karli River nearby also provide an opportunity for houseboat stays and peaceful boat rides through mangrove-covered waterways.

The village around Tarkarli retains a rustic charm, with narrow lanes, homestays, and friendly locals. Malvani cuisine, famous for its rich spices and coconut-based gravies, is a highlight here. Dishes like Malvani fish curry, kombdi vade, and solkadhi are must-tries for food lovers. Small eateries along the beach serve fresh seafood that perfectly complements the coastal vibe.

Tarkarli is also close to several historical and cultural attractions, including the Sindhudurg Fort built by Chhatrapati Shivaji Maharaj on a small island. The fort offers panoramic views of the sea and a glimpse into Maharashtra’s glorious maritime history. Nature lovers can also visit nearby Devbagh Beach or take a boat ride to Tsunami Island, known for its water sports.

The best time to visit Tarkarli is from October to March, when the weather is pleasant and the water visibility is at its best. Whether you want to relax under the shade of coconut palms, explore marine life, or soak in history, Tarkarli offers a complete travel experience.`,
    location: "Tarkarli, Sindhudurg district, Maharashtra",
    nearestCity: "Malvan (~10 km away)",
    duration: "Water‑sports: ~1–2 hours; Beach visit: ~2–3 hours",
    height: "Sea level",
    gallery: [
       tg1,
      tg2,
      tg3,
      tg4,
      tg5,
      tg6
    ],
    activities: [
      "Snorkeling and scuba diving",
      "Glass‑bottom boat rides",
      "Relax on white sandy beach",
      "Try Malvani seafood delicacies",
      "Visit nearby Sindhudurg Fort"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.4021793901785!2d73.48702557492455!3d16.285435154691148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1c6ea19194f31%3A0x812a8e099739fd3e!2sTarkarli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1754580000001!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  diveagar: {
    title: "DIVEAGAR BEACH",
    mainImage: divmain,
    description: `Diveagar Beach, located in the Raigad district of Maharashtra, is a pristine stretch of golden sand along the Konkan coastline. Known for its calm and unspoiled beauty, the beach is a favorite among travelers seeking peace away from the usual tourist rush. The sound of gentle waves, swaying coconut trees, and a refreshing sea breeze create a soothing atmosphere. The shoreline is clean and ideal for long walks, making it a perfect spot for nature lovers and those looking for a quiet escape.

The village of Diveagar is equally charming, with narrow lanes, traditional Konkani houses, and a welcoming local community. Apart from the beach, the place is famous for the Suvarna Ganesh Mandir, which once housed a golden idol of Lord Ganesha (now replaced with a silver one for security reasons). Pilgrims and tourists often combine their beach visit with a spiritual stop at the temple.

Diveagar also offers a glimpse into the local Konkan culture through its cuisine. Freshly caught seafood like pomfret, surmai, and prawns are cooked in traditional spices, and vegetarian dishes flavored with coconut and kokum are equally delicious. The beach area also has small eateries where you can savor these delicacies while enjoying the sea view.

For adventure enthusiasts, water sports such as parasailing, banana boat rides, and ATV rides are available during peak season. Birdwatchers will also enjoy spotting various coastal and migratory birds in the surrounding areas. The beach is especially beautiful at sunset, when the sky transforms into shades of orange and pink.

Accessibility is convenient, with Diveagar being around 170 km from Pune and about 200 km from Mumbai, making it an ideal weekend getaway. Many visitors also explore nearby beaches like Shrivardhan and Harihareshwar as part of their trip. The mix of spirituality, scenic beauty, and adventure makes Diveagar a versatile destination..`,
    location: "Devkar, Raigad district, Maharashtra",
    nearestCity: "Shrivardhan (~10 km away)",
    duration: "Relaxation or sunset views: ~1–2 hours",
    height: "Sea level",
    gallery: [
       dg1,
      dg2,
      dg3,
      dg4,
      dg5,
      dg6
    ],
    activities: [
      "Swim in calm waters",
      "Walk along serene beach",
      "Watch the sunset in solitude",
      "Picnic under coconut palms",
      "Explore nearby Shrivardhan town"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.815374939432!2d73.04902097495176!3d18.195678332437488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beacutefff%3A0xb1234567890abcdef!2sDevkar%20Beach!5e0!3m2!1sen!2sin!4v1754580000002!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  shrivardhan: {
    title: "SHRIVARDHAN BEACH",
    mainImage:shrimain,
    description: `Shrivardhan Beach – Shrivardhan is a serene coastal town located in the Raigad district of Maharashtra, known for its golden sandy beach, historical significance, and peaceful ambiance. The beach is famous for its clean shoreline, gentle waves, and long stretch of sand that makes it perfect for morning and evening walks. It is less commercialized compared to other beaches in Maharashtra, making it an ideal spot for travelers who prefer a quiet and relaxing escape. The town is also closely associated with the Peshwas of the Maratha Empire, as it is believed to be the hometown of Balaji Vishwanath, the first Peshwa of Chhatrapati Shahu Maharaj.

The beach offers a mix of natural beauty and historical charm. On one side, you have the Arabian Sea with its breathtaking sunsets, and on the other, you have small fishing villages that give a glimpse into the simple coastal lifestyle. Fishing is still a primary occupation here, and visitors can witness traditional fishing boats, colorful nets, and the local fish markets. The waves are calm, making the beach safe for swimming and water sports, especially during the non-monsoon months.

Shrivardhan is also surrounded by other tourist attractions. A short drive away, you can explore Harihareshwar, known as ‘Dakshin Kashi’ for its ancient Shiva temple, and Diveagar, famous for its golden beach and Suvarna Ganesh Temple. These three places—Shrivardhan, Harihareshwar, and Diveagar—form a popular weekend circuit for travelers from Mumbai and Pune. The route between them is filled with scenic views of coconut and betel nut plantations, winding coastal roads, and hill ranges touching the sea.

Culturally, Shrivardhan reflects the rich heritage of the Konkan region. The local cuisine is a delightful mix of spicy curries, fresh seafood, and traditional Konkani sweets like modak and kokum sherbet. Homestays and small resorts in the area give tourists a chance to experience warm Konkan hospitality, often accompanied by home-cooked meals made from freshly caught fish.

Adventure seekers also find Shrivardhan interesting as it offers boating, jet skiing, and parasailing during the tourist season. Nature lovers can explore nearby trekking routes and small hills offering panoramic views of the coastline. Early mornings here are especially magical, with the sound of waves blending with the calls of seabirds, creating a tranquil environment perfect for meditation or photography.

Overall, Shrivardhan Beach is not just a destination for leisure but also a place that offers a slice of history, culture, and natural beauty. Whether you are looking for a weekend getaway, a photography trip, or a deep dive into the coastal traditions of Maharashtra, Shrivardhan has something for everyone. It remains one of the Konkan coast’s most treasured hidden gems, attracting visitors who value authenticity and peace over crowds and commercialization.

`,
    location: "Shrivardhan, Raigad district, Maharashtra",
    nearestCity: "Roha (~60 km away)",
    duration: "Beach stroll and dipping: ~1–2 hours",
    height: "Sea level",
    gallery: [
      sig1,
      sig2,
      sig3,
      sig4,
      sig5,
      sig6
    ],
    activities: [
      "Swim and wade in calm waters",
      "Walk along soft sandy beach",
      "Visit local temples",
      "Bike or stroll through fishing village",
      "Take boat rides or dolphin spotting"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.331456123456!2d73.0701235749512!3d18.15067831234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3beabced1234567%3A0xabcdef1234567890!2sShrivardhan%20Beach!5e0!3m2!1sen!2sin!4v1754580000003!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  bordidahanu: {
    title: "BORDI‑DAHANU BEACH",
    mainImage: bordmain,
    description: `ChatGPT said:
Bordi–Dahanu – Bordi and Dahanu are twin coastal towns in the Palghar district of Maharashtra, famous for their tranquil beaches, chikoo orchards, and Parsi heritage. Located just a few kilometers apart, these destinations together offer a mix of natural beauty, cultural charm, and historical significance.

Bordi Beach is known for its long stretch of soft sand, shaded by casuarina trees and coconut palms. The shallow waters make it ideal for swimming and safe for children. The beach is quiet and uncrowded, perfect for long walks, watching sunsets, or simply relaxing with the soothing sound of waves. The nearby chikoo farms add a rustic charm, and many locals welcome visitors for farm tours where you can taste fresh fruit, chikoo milkshakes, or even unique products like chikoo chips.

Dahanu Beach, a few kilometers from Bordi, offers a similar peaceful coastal vibe but is also known for its slightly wider stretch of sand and more vibrant local markets. Dahanu is historically important as a settlement area for the Parsi community, who migrated here over a century ago. Their influence is seen in the old colonial-style houses, fire temples, and Parsi cuisine available in the region.

Beyond the beaches, Bordi–Dahanu is dotted with attractions such as Bahrot Caves, sacred to Zoroastrians as the only cave temple in India housing a holy fire, and Asavli Dam, a picturesque picnic spot surrounded by greenery. For history enthusiasts, Dahanu Fort, built during the Portuguese era, offers a glimpse into the region’s strategic maritime past.

The region is also popular among nature lovers and birdwatchers. In the winter months, the wetlands and coastal belt host various migratory birds, making it a hotspot for photography. Cycling through chikoo orchards, exploring local fishing villages, and trying authentic coastal Maharashtrian and Parsi dishes like dhansak, patrani machhi, and seafood curries are must-do activities.

With its combination of peaceful beaches, rich history, agricultural charm, and cultural diversity, Bordi–Dahanu makes for a perfect weekend getaway from Mumbai or Gujarat. It’s a place where time slows down, allowing you to soak in both the natural beauty and the warm hospitality of its people.`,
    location: "Bordi‑Dahanu, Palghar district, Maharashtra",
    nearestCity: "Palghar (~20 km away)",
    duration: "Beachwalk among orchards: ~1–2 hours",
    height: "Sea level",
    gallery: [
      bdg1,
bdg2,
bdg3,
bdg4,
bdg5,
bdg6

    ],
    activities: [
      "Walk through chikoo orchards by the beach",
      "Relax on quiet sands",
      "Buy local chikoot delicacies",
      "Watch traditional fishing activity",
      "Sunrise or sunset beach walks"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1234567890123!2d72.73600012345678!3d19.98412345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9e123456789ab%3A0xbcdef123456789ab!2sBordi%20Beach!5e0!3m2!1sen!2sin!4v1754580000004!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  velneshwar: {
    title: "VELNESHWAR BEACH",
    mainImage: velmain,
    description: `Velneshwar Beach, located in the Ratnagiri district of Maharashtra, is a peaceful and scenic destination on the Konkan coastline. Known for its clean sands, swaying coconut palms, and calm waters, the beach is a perfect retreat for those looking to escape the chaos of city life. Unlike the more commercialized beaches, Velneshwar retains its untouched charm, making it a favorite among solitude seekers and nature lovers. The gentle waves make it ideal for swimming, sunbathing, and enjoying long, quiet walks along the shore. The surrounding green hills add to the picturesque beauty of this location, creating a perfect blend of sea and land.

One of the major attractions near Velneshwar Beach is the ancient Velneshwar Shiva Temple, situated just a short walk from the beach. This temple, believed to be over 1,000 years old, is an important pilgrimage spot, attracting devotees from different parts of Maharashtra. The temple’s traditional architecture and serene environment make it an excellent place for spiritual reflection. During the annual Maha Shivratri festival, the temple and beach area come alive with vibrant celebrations, drawing in large crowds of pilgrims and tourists.

Velneshwar is also popular for its water sports and boating activities, especially in recent years as tourism has grown. Visitors can enjoy activities like motorboat rides, banana boat rides, and kayaking. Despite these attractions, the beach still maintains a laid-back and relaxed vibe. Early mornings and evenings at Velneshwar are especially magical, with golden sunlight reflecting on the water and fishermen heading out to sea or returning with their catch.

For food lovers, Velneshwar offers authentic Konkani cuisine, including fresh seafood delicacies like fish curry, fried pomfret, and prawn masala. Homestays and small resorts near the beach often serve homemade meals prepared in traditional styles, giving visitors a taste of local flavors. The hospitality of the locals adds warmth to the experience, making tourists feel welcomed and at home.

Velneshwar Beach is also a great base for exploring nearby attractions such as Guhagar Beach, Hedvi Ganesh Temple, and Jaigad Fort. The scenic drives along the Konkan coast, passing through lush paddy fields, mango orchards, and small fishing villages, make the journey as enjoyable as the destination itself. Whether you are visiting for religious reasons, adventure activities, or simply to unwind, Velneshwar Beach offers something for everyone.

In essence, Velneshwar is not just a beach — it’s an experience of calmness, culture, and coastal beauty. Its balance of spirituality, natural charm, and local hospitality ensures that visitors leave with lasting memories. For travelers seeking a break from crowded tourist spots, Velneshwar is a hidden gem that promises peace, beauty, and an authentic slice of Konkan life.`,
    location: "Velneshwar, Ratnagiri district, Maharashtra",
    nearestCity: "Guhagar (~15 km away)",
    duration: "Relaxation or swim: ~1–2 hours",
    height: "Sea level",
    gallery: [
      vg1,
vg2,
vg3,
vg4,
vg5,
vg6

    ],
    activities: [
      "Swim in calm surf",
      "Sunbathe in peace",
      "Walk through coconut groves",
      "Capture serene views in solitude",
      "Visit nearby temples and villages"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.1234567890123!2d73.65412345678901!3d17.61912345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc240123456789ab%3A0xcdef123456789abc!2sVelneshwar%20Beach!5e0!3m2!1sen!2sin!4v1754580000005!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  }
};

const BeachesDetails = () => {
  const { beachId } = useParams();
  const beach = beachData[beachId];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!beach) return <h2 className="not-found">❌ Beach Not Found</h2>;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => setCurrentImageIndex((i) => (i - 1 + beach.gallery.length) % beach.gallery.length);
  const showNext = () => setCurrentImageIndex((i) => (i + 1) % beach.gallery.length);

  return (
    <div className="fort-details-container">
      <div className="title-wrapper">
        <div className="title-line" />
        <h1 className="fort-title">{beach.title}</h1>
        <div className="title-line" />
      </div>

      <img className="fort-main-img" src={beach.mainImage} alt={beach.title} />

      <div className="content-section">
        <div className="fort-description">
          <p>{beach.description}</p>
        </div>
        <div className="fort-info">
          <ul>
            <li><strong>📍 Location:</strong> {beach.location}</li>
            <li><strong>🏙️ Nearest City:</strong> {beach.nearestCity}</li>
            <li><strong>⏱ Visit Duration:</strong><br />{beach.duration}</li>
            <li><strong>🌊 Elevation:</strong> {beach.height}</li>
          </ul>

          <div className="map-container" dangerouslySetInnerHTML={{ __html: beach.mapEmbed }}></div>
        </div>
      </div>

      {beach.gallery.length > 0 && <>
        <h3 className="section-heading">Gallery</h3>
        <div className="fort-gallery">
          {beach.gallery.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${beach.title} ${idx + 1}`}
              className="gallery-img"
              onClick={() => openLightbox(idx)}
            />
          ))}
        </div>
      </>}

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>✖</button>
          <button className="nav-btn left" onClick={showPrev}>⟨</button>
          <img src={beach.gallery[currentImageIndex]} alt="Full View" className="lightbox-img" />
          <button className="nav-btn right" onClick={showNext}>⟩</button>
        </div>
      )}

      <div className="activities-section">
        <div className="activities-heading">Activities</div>
        <ul className="activities-list">
          {beach.activities.map((activity, i) => <li key={i}>{activity}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default BeachesDetails;
