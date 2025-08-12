import React, { useState } from 'react';
import './FortDetails.css'; // Reusing the same CSS
import { useParams } from 'react-router-dom';

import bhimmain from './images/wildlife/wildlifemain/BhimashankarWildlifeSanctuary.png';
import kaasmain from './images/wildlife/wildlifemain/kaas.jpg';
import penchmain from './images/wildlife/wildlifemain/pennch.jpg';
import bormain from './images/wildlife/wildlifemain/bortiger.png';
import koynamain from './images/wildlife/wildlifemain/koyna-wildlife-sanctuary-safari_ezpqmo_3647008d0.jpg';
import smain from './images/wildlife/wildlifemain/sahydritiger.jpg';

import bg1 from './images/wildlife/bhimaskankar/bg (1).jpeg';
import bg2 from './images/wildlife/bhimaskankar/bg (2).jpeg';
import bg3 from './images/wildlife/bhimaskankar/bg (3).jpeg';
import bg4 from './images/wildlife/bhimaskankar/bg (4).jpeg';
import bg5 from './images/wildlife/bhimaskankar/bg (5).jpeg';
import bg6 from './images/wildlife/bhimaskankar/bg (6).jpeg';

import kg1 from './images/wildlife/kaas/kg (1).jpeg';
import kg2 from './images/wildlife/kaas/kg (2).jpeg';
import kg3 from './images/wildlife/kaas/kg (3).jpeg';
import kg4 from './images/wildlife/kaas/kg (4).jpeg';
import kg5 from './images/wildlife/kaas/kg (5).jpeg';
import kg6 from './images/wildlife/kaas/kg (6).jpeg';

import png1 from './images/wildlife/pench/png (1).jpeg';
import png2 from './images/wildlife/pench/png (2).jpeg';
import png3 from './images/wildlife/pench/png (3).jpeg';
import png4 from './images/wildlife/pench/png (4).jpeg'
import png5 from './images/wildlife/pench/png (5).jpeg';
import png6 from './images/wildlife/pench/png (6).jpeg';

import brg1 from './images/wildlife/bor/brg (1).jpeg';
import brg2 from './images/wildlife/bor/brg (2).jpeg';
import brg3 from './images/wildlife/bor/brg (3).jpeg';
import brg4 from './images/wildlife/bor/brg (4).jpeg';
import brg5 from './images/wildlife/bor/brg (5).jpeg';
import brg6 from './images/wildlife/bor/brg (6).jpeg'

import kog1 from './images/wildlife/koyna/kog (1).jpg';
import kog2 from './images/wildlife/koyna/kog (1).webp';
import kog3 from './images/wildlife/koyna/kog (2).jpg';
import kog4 from './images/wildlife/koyna/kog (3).jpg';
import kog5 from './images/wildlife/koyna/kog (4).jpg';
import kog6 from './images/wildlife/koyna/kog (5).jpg';

import syg1 from './images/wildlife/syt/syg (1).jpg';
import syg2 from './images/wildlife/syt/syg (1).webp';
import syg3 from './images/wildlife/syt/syg (2).jpg';
import syg4 from './images/wildlife/syt/syg (3).jpg';
import syg5 from './images/wildlife/syt/syg (4).jpg';
import syg6 from './images/wildlife/syt/syg (5).jpg';

const wildlifeData = {
  bhimashankar: {
    title: "BHIMASHANKAR WILDLIFE SANCTUARY",
    mainImage: bhimmain,
    description: `Bhimashankar Wildlife Sanctuary, located in the Western Ghats of Maharashtra, is one of the most beautiful and ecologically rich regions in the state. Spread across the districts of Pune, Raigad, and Thane, the sanctuary is part of the Sahyadri mountain range, which is a UNESCO World Heritage Site. It is not only a haven for wildlife but also a place of spiritual significance, as it houses the famous Bhimashankar Temple — one of the 12 Jyotirlingas dedicated to Lord Shiva. The sanctuary’s high elevation, mist-covered hills, and dense forests make it a perfect retreat for both pilgrims and nature lovers.

The sanctuary is best known as the home of the Indian Giant Squirrel (Shekru), which is also the state animal of Maharashtra. These vibrant and acrobatic creatures can be spotted leaping between trees in the dense forests. Apart from the Shekru, Bhimashankar is home to leopards, sambar deer, barking deer, wild boar, langurs, and a variety of smaller mammals. The area is also a paradise for birdwatchers, with over 200 species of birds, including the Malabar whistling thrush, Quaker babbler, and various species of woodpeckers.

Flora in Bhimashankar is equally diverse. The sanctuary falls within the tropical evergreen and semi-evergreen forest zone, and its lush vegetation includes medicinal plants, rare orchids, and dense undergrowth of ferns and mosses. During monsoon, the forest transforms into a green wonderland, with numerous waterfalls, streams, and fog-draped landscapes creating a magical atmosphere. This biodiversity has made the sanctuary an important conservation area under the Wildlife Protection Act of 1972.

Bhimashankar is also recognized as part of the Western Ghats Biodiversity Hotspot, meaning it supports many endemic and endangered species found nowhere else in the world. Efforts are made to protect the delicate ecosystem here, and eco-tourism initiatives promote responsible travel. Visitors are encouraged to avoid littering, maintain silence, and respect wildlife habitats to preserve the sanctuary’s pristine nature.

Apart from wildlife, Bhimashankar offers adventure opportunities like trekking, hiking, and exploring forest trails. The popular Bhimashankar Trek passes through thick forest cover, gushing streams, and steep climbs, offering breathtaking views of valleys and hills. The combination of wildlife, natural beauty, and religious significance makes Bhimashankar Wildlife Sanctuary a unique destination where culture and nature exist in harmony..`,
    location: "Pune District, Maharashtra",
    nearestCity: "Pune (~110 km)",
    duration: "Trekking: 2–4 hours",
    height: "Approx. 3,250 feet",
    gallery: [
      bg1,
      bg2,
      bg3,
      bg4,
      bg5,
      bg6
    ],
    activities: [
      "Spot the Indian Giant Squirrel",
      "Nature photography",
      "Forest trekking",
      "Bird watching"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  kaas: {
    title: "KAAS PLATEAU RESERVED FOREST",
    mainImage: kaasmain,
    description: `Kaas Plateau – The Valley of Flowers of Maharashtra
Kaas Plateau, also known as Kaas Pathar, is a UNESCO World Natural Heritage Site located near Satara in Maharashtra. Sitting at an altitude of around 1,200 meters above sea level, this plateau is famous for its seasonal wildflowers that bloom in vibrant colors during the monsoon months, usually from late August to early October. The plateau is spread over approximately 1,000 hectares and is home to over 850 species of flowering plants, including many rare and endangered varieties. The stunning mix of colors across the green expanse gives it the nickname "Valley of Flowers of Maharashtra."

Biodiversity and Unique Flora
Kaas Plateau is recognized as a biodiversity hotspot under the Western Ghats. The flowers here are extremely delicate and have a short lifespan—sometimes just a few days—making every visit a unique experience. Some of the rare flowers found here include Smithia Hirsuta, Topli Karvi (which blooms once in 7 years), Drosera Indica (a carnivorous plant), and various species of orchids. The plateau’s ecosystem is so sensitive that even slight human interference can damage the flora, which is why strict rules are in place to protect it.

Best Time to Visit
The most beautiful time to visit Kaas Plateau is between late August and early October when the flowers are in full bloom. The monsoon rains play a crucial role in triggering the flowering season. During this time, the entire plateau turns into a colorful carpet with shades of yellow, pink, purple, and white spread across the landscape. Early mornings and evenings are the best times for photography, as the natural light enhances the vivid colors of the flowers.

Tourist Experience and Attractions Nearby
Visiting Kaas is not just about the flowers—it’s also about experiencing the serenity and natural beauty of the Western Ghats. The plateau is surrounded by dense forests, lakes, and hills, making it a great spot for nature lovers. Nearby attractions include Kaas Lake, Thoseghar Waterfalls, Sajjangad Fort, and Chalkewadi Windmill Farms, all of which add to the charm of the trip. There are also guided tours available for those who want to learn more about the biodiversity and conservation efforts in the area.

Conservation and Rules for Visitors
Because Kaas Plateau is an ecologically sensitive area, the number of daily visitors is strictly regulated. Plastic is banned, and tourists are not allowed to pluck flowers or step on the blooming patches. The Forest Department charges a nominal entry fee and has made arrangements like designated pathways to ensure minimal disturbance to the natural habitat. These measures are essential to preserve the plateau’s beauty for future generations.

Cultural and Ecological Importance
Kaas Plateau is not just a tourist destination—it holds ecological and cultural significance. Many of the plant species found here are used in traditional medicine and have been a part of local folklore for centuries. The plateau also supports a variety of insects, butterflies, and birds, making it a paradise for wildlife photographers and researchers. Its unique blend of natural beauty, biodiversity, and conservation awareness makes Kaas a must-visit for anyone interested in nature and environmental preservation.

`,
    location: "Satara District, Maharashtra",
    nearestCity: "Satara (~25 km)",
    duration: "Visit duration: 2–3 hours",
    height: "Approx. 4,000 feet",
   gallery: [
      kg1,
      kg2,
      kg3,
      kg4,
      kg5,
      kg6
    ],
    activities: [
      "Witness seasonal wildflowers",
      "Explore unique biodiversity",
      "Eco-walks and guided tours",
      "Nature photography"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  pench: {
    title: "PENCH NATIONAL PARK",
    mainImage: penchmain,
    description: `Pench National Park, straddling the borders of Maharashtra and Madhya Pradesh, is one of India’s most famous tiger reserves. It derives its name from the Pench River, which flows through the park from north to south, dividing it almost equally into two halves. The park is renowned for its rich biodiversity, lush landscapes, and significant tiger population, making it a paradise for wildlife enthusiasts. Pench also has a special literary connection—it inspired Rudyard Kipling’s timeless classic The Jungle Book, with characters like Mowgli, Bagheera, and Sher Khan believed to be inspired by its forests.

Spread over 758 sq km (with 299 sq km in Maharashtra), the park is home to dense teak forests, meadows, and hilly terrains, providing a perfect habitat for a variety of wildlife species. Apart from the majestic Bengal tiger, Pench is home to leopards, wild dogs (dholes), sloth bears, hyenas, jackals, and Indian wolves. The herbivore population is equally impressive, with chital, sambar, nilgai, gaur (Indian bison), and wild boar commonly sighted during safaris. The park also shelters over 325 bird species, including migratory ones, making it a birdwatcher’s dream.

One of the most attractive features of Pench is the Pench River, which sustains the park’s flora and fauna, especially in the drier months. Numerous waterholes and streams are spread throughout the forest, attracting animals for drinking water, thus increasing the chances of wildlife sightings during safaris. The terrain is mostly undulating, with a mix of open grasslands and dense vegetation, giving visitors a variety of scenic views. Seasonal flowers, climbers, and medicinal plants add to the park’s ecological richness.

Safaris in Pench can be enjoyed via jeeps or canters, and both morning and evening rides offer different experiences. Early mornings often bring misty landscapes and the sound of jungle calls, while evenings glow with golden sunlight filtering through the trees. The Maharashtra side of Pench is quieter and less crowded compared to the Madhya Pradesh side, offering a more peaceful safari experience. Experienced guides and trackers enhance the visit by sharing insights into animal behavior, plant species, and the park’s history.

Beyond wildlife, Pench offers a deep connection with nature and conservation. The park has several eco-tourism initiatives, and local communities are actively involved in protecting its biodiversity. Staying in eco-resorts or jungle lodges near the park offers an immersive experience, with nights filled with the sounds of the forest. The best time to visit is between November and April, when the weather is pleasant, though the summer months of April–June provide the highest chances of tiger sightings due to animals gathering near water sources.

In short, Pench National Park is not just a wildlife destination—it’s a living storybook of India’s natural heritage. From the roar of tigers to the songs of birds, every moment here is filled with the magic of the wild. It’s a place where literature, history, and conservation blend seamlessly, offering an unforgettable experience to every visitor.`,
    location: "Seoni-Nagpur border, Maharashtra",
    nearestCity: "Nagpur (~80 km)",
    duration: "Safari: 3–4 hours",
    height: "~1,800 feet",
    gallery: [
      png1,
      png2,
      png3,
      png4,
      png5,
      png6
    ],
    activities: [
      "Jeep safari to spot tigers and leopards",
      "Bird watching",
      "Camping and eco-tourism",
      "Nature trails"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  bor: {
    title: "BOR TIGER RESERVE",
    mainImage: bormain,
    description: `1. Introduction
Bor Tiger Reserve, located in Wardha district of Maharashtra, is one of the lesser-known yet ecologically rich tiger habitats in India. Spread over an area of approximately 138 square kilometers, it forms a crucial corridor connecting major tiger reserves like Pench, Tadoba, and Nagzira. This connectivity plays a vital role in maintaining genetic diversity among tiger populations. Declared a tiger reserve in 2014, Bor is not only home to the majestic Bengal tiger but also a variety of other wildlife species, making it a hidden treasure for nature lovers and wildlife enthusiasts.

2. Landscape and Climate
The landscape of Bor is a harmonious mix of dense teak forests, dry deciduous vegetation, and open grasslands. The Bor Dam, built on the Bor River, is the heart of the reserve and acts as a vital water source for the park’s wildlife. The climate here is typically tropical, with hot summers, moderate monsoons, and pleasantly cool winters. The months from November to March are considered the best time to visit, as the weather is favorable and animal sightings are more frequent.

3. Flora and Fauna
Apart from tigers, Bor Tiger Reserve shelters leopards, sloth bears, wild dogs (dholes), jungle cats, sambar deer, chital, and nilgai. The birdlife here is equally fascinating, with species like peacocks, grey hornbills, paradise flycatchers, and crested serpent eagles adding color and melody to the forest. The vegetation mainly comprises teak, bamboo, tendu, mahua, and other indigenous trees that provide food and shelter to the park’s inhabitants.

4. Importance for Tiger Conservation
Bor serves as a critical “stepping-stone” habitat for tigers migrating between larger reserves. Its strategic location within the Satpura–Maikal landscape makes it essential for sustaining tiger populations in central India. The creation of the reserve has not only increased the area under tiger protection but also improved anti-poaching measures and habitat management, leading to a noticeable rise in tiger sightings in recent years.

5. Tourism and Eco-Activities
Tourism in Bor is well-managed to ensure minimal disturbance to wildlife. Safari options include jeep rides through designated zones, where visitors can witness the beauty of the forest and, with some luck, spot tigers in the wild. Birdwatching, nature photography, and eco-trails are also popular among tourists. The serene Bor Dam and its surroundings add to the scenic beauty, making the reserve a peaceful getaway for city dwellers.

6. Community Involvement and Future Prospects
Local communities play a significant role in the conservation efforts of Bor Tiger Reserve. Eco-tourism initiatives have provided livelihood opportunities, encouraging villagers to support wildlife protection. With continued efforts in habitat restoration, awareness programs, and sustainable tourism practices, Bor has the potential to become one of Maharashtra’s top wildlife destinations in the coming years.

.`,
    location: "Wardha District, Maharashtra",
    nearestCity: "Nagpur (~65 km)",
    duration: "Safari: 2–3 hours",
    height: "Approx. 1,800 feet",
    gallery: [
      brg1,
      brg2,
      brg3,
      brg4,
      brg5,
      brg6
    ],
    activities: [
      "Wildlife safari",
      "Bird watching",
      "Explore forest trails",
      "Visit Bor Dam"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  koyna: {
    title: "KOYNA WILDLIFE SANCTUARY",
    mainImage: koynamain,
    description: `Koyana Wildlife Sanctuary is a beautiful and ecologically rich protected area located in the Satara district of Maharashtra. Spread across the rugged Western Ghats, the sanctuary is known for its dense evergreen forests, rolling hills, and the majestic Koyana Dam backwaters that add to its natural charm. It forms a part of the Sahyadri Tiger Reserve and serves as an important habitat for a variety of flora and fauna. The sanctuary’s altitude and varied landscapes create a unique blend of biodiversity, making it a haven for nature enthusiasts and wildlife lovers.

The sanctuary derives its name from the Koyana River, which flows through the region and plays a vital role in sustaining the ecosystem. The Koyana Dam, one of the largest hydroelectric projects in Maharashtra, lies adjacent to the sanctuary, creating vast backwaters that attract numerous bird species. The combination of river, forests, and hills makes this place not only a wildlife hotspot but also a scenic escape for travelers. During monsoon, the area transforms into a lush green paradise, with mist-covered peaks and waterfalls enhancing its beauty.

Koyana Wildlife Sanctuary is home to a wide range of wildlife, including tigers, leopards, sloth bears, sambar deer, barking deer, wild boars, and giant squirrels. It is also an excellent spot for birdwatching, with species like the Malabar pied hornbill, crested serpent eagle, and Indian paradise flycatcher often spotted here. The dense forests also shelter many reptiles and amphibians, some of which are endemic to the Western Ghats. The rich biodiversity here has made the sanctuary a critical zone for conservation efforts.

The vegetation in the sanctuary includes tropical evergreen, semi-evergreen, and moist deciduous forests. You can find trees like teak, ain, kinjal, hirda, and various medicinal plants. This diversity of plant life supports the entire food chain, from herbivores to apex predators. The sanctuary’s forest cover also plays a major role in maintaining the climate balance and ensuring water security in the region, as it is a significant watershed area.

Adventure seekers and nature lovers often visit Koyana Wildlife Sanctuary for trekking, jungle safaris, and photography. There are several trails that offer panoramic views of the Western Ghats and the shimmering Koyana backwaters. The sanctuary also provides opportunities for eco-tourism, with guided tours that focus on educating visitors about conservation and the importance of protecting wildlife. Staying in nearby eco-lodges or forest rest houses gives visitors a chance to experience the beauty and tranquility of this untouched wilderness.

Koyana Wildlife Sanctuary is not just a natural treasure but also a reminder of the delicate balance between humans and nature. While it attracts many visitors, efforts are continuously made to preserve its pristine environment and prevent disturbance to its wildlife. For anyone seeking peace, adventure, and a deep connection with nature, Koyana stands out as one of Maharashtra’s most captivating wildlife destinations.`,
    location: "Satara District, Maharashtra",
    nearestCity: "Satara (~55 km)",
    duration: "Trekking or jeep safari: 2–4 hours",
    height: "Varied (1,500–4,000 feet)",
     gallery: [
      kog1,
      kog2,
      kog3,
      kog4,
      kog5,
      kog6
    ],
    activities: [
      "Trekking and wildlife safari",
      "Spotting endemic birds and animals",
      "Visit Koyna Dam",
      "Photography and nature walks"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  sahyadri: {
    title: "SAHYADRI TIGER RESERVE",
    mainImage:smain,
    description: `Sahyadri Mountain Range – also known as the Western Ghats – is one of India’s most remarkable natural treasures, running parallel to the western coast of Maharashtra. Stretching for hundreds of kilometers, the Sahyadri range is a UNESCO World Heritage Site recognized for its exceptional biodiversity and rich cultural heritage. These mountains are a lifeline for Maharashtra, as they are the source of several major rivers like the Krishna, Godavari, and Koyna. They also act as a natural barrier, influencing the monsoon winds and providing fertile soil for agriculture in the region.

The Sahyadris are home to lush forests, rolling hills, and deep valleys, making them a paradise for nature lovers and adventure seekers. Numerous trekking trails pass through the range, leading to scenic viewpoints, ancient forts, and hidden waterfalls. Popular trekking destinations in the Sahyadris include Harishchandragad, Rajmachi, Torna, and Kalsubai – the highest peak in Maharashtra. During the monsoon season, the entire region transforms into a green wonderland with mist-covered peaks and gushing streams.

The biodiversity of the Sahyadris is extraordinary. They shelter countless species of flora and fauna, some of which are endemic to the region. Wildlife sanctuaries and national parks such as Bhimashankar, Koyna, Chandoli, and Tamhini are part of the Sahyadri ecosystem, protecting endangered species like the Indian giant squirrel, Malabar civet, and several species of snakes, birds, and amphibians. The forests also host rare medicinal plants, orchids, and dense evergreen vegetation.

Culturally, the Sahyadri range has been significant for centuries. Many forts built by Chhatrapati Shivaji Maharaj, such as Raigad, Sinhagad, and Pratapgad, stand proudly atop these mountains, narrating stories of Maratha valor. The region is dotted with ancient temples, Buddhist caves, and historical sites, blending spirituality with history. Villages nestled in the Sahyadris still maintain traditional lifestyles, offering visitors a glimpse into rural Maharashtra.

Tourism in the Sahyadris thrives all year round, but each season offers something unique. The monsoon is perfect for waterfalls and greenery, winter is ideal for trekking and camping, while summer evenings provide cool mountain breezes. Adventure activities like hiking, rock climbing, bird watching, and photography are popular here. Eco-tourism initiatives are also growing to preserve the delicate balance of nature and support local communities.

In essence, the Sahyadri range is more than just a mountain chain – it is the heart of Maharashtra’s natural beauty, cultural pride, and ecological wealth. Whether you’re seeking adventure, peace, or history, the Sahyadris have something to offer every traveler.`,
    location: "Western Ghats, Maharashtra",
    nearestCity: "Kolhapur (~90 km)",
    duration: "Exploration: Full day",
    height: "Varied elevations",
    gallery: [
      syg1,
      syg2,
      syg3,
      syg4,
      syg5,
      syg6
    ],
    activities: [
      "Tiger and leopard tracking",
      "Jungle camping",
      "Trekking and nature study",
      "Photography tours"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?..." width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  }
};

const WildlifeDetails = () => {
  const { wildlifeId } = useParams();
  const place = wildlifeData[wildlifeId];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!place) return <h2 className="not-found">❌ Wildlife Place Not Found</h2>;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => setCurrentImageIndex((i) => (i - 1 + place.gallery.length) % place.gallery.length);
  const showNext = () => setCurrentImageIndex((i) => (i + 1) % place.gallery.length);

  return (
    <div className="fort-details-container">
      <div className="title-wrapper">
        <div className="title-line" />
        <h1 className="fort-title">{place.title}</h1>
        <div className="title-line" />
      </div>

      <img className="fort-main-img" src={place.mainImage} alt={place.title} />

      <div className="content-section">
        <div className="fort-description">
          <p>{place.description}</p>
        </div>
        <div className="fort-info">
          <ul>
            <li><strong>📍 Location:</strong> {place.location}</li>
            <li><strong>🏙️ Nearest City:</strong> {place.nearestCity}</li>
            <li><strong>🕒 Duration:</strong><br />{place.duration}</li>
            <li><strong>⛰️ Height:</strong> {place.height}</li>
          </ul>
          <div className="map-container" dangerouslySetInnerHTML={{ __html: place.mapEmbed }}></div>
        </div>
      </div>

      {place.gallery.length > 0 && (
        <>
          <h3 className="section-heading">Gallery</h3>
          <div className="fort-gallery">
            {place.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${place.title} ${idx + 1}`}
                className="gallery-img"
                onClick={() => openLightbox(idx)}
              />
            ))}
          </div>
        </>
      )}

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>✖</button>
          <button className="nav-btn left" onClick={showPrev}>⟨</button>
          <img src={place.gallery[currentImageIndex]} alt="Full View" className="lightbox-img" />
          <button className="nav-btn right" onClick={showNext}>⟩</button>
        </div>
      )}

      <div className="activities-section">
        <div className="activities-heading">Activities</div>
        <ul className="activities-list">
          {place.activities.map((activity, i) => <li key={i}>{activity}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default WildlifeDetails;
