import React, { useState } from 'react';
import './FortDetails.css';
import { useParams } from 'react-router-dom';

import mainimg from './images/forts/FortsMain/Rajgad-to-torna-4.jpg';
import tornaMain from './images/forts/FortsMain/tornamain.webp';
import Shivmain from './images/forts/FortsMain/shivneri.jpg';
import murudMain from './images/forts/FortsMain/Murud-Janjira-Fort.jpg';
import Sinhagadmain from './images/forts/FortsMain/sinhagad fort.jpg';
import raigadMain from './images/forts/FortsMain/Raigad.jpg';


import Gallery1 from './images/forts/Rajgad/Gallery1.jpeg';
import Gallery2 from './images/forts/Rajgad/Gallery2.jpeg';
import Gallery3 from './images/forts/Rajgad/Gallery3.jpeg';
import Gallery4 from './images/forts/Rajgad/Gallery4.jpeg';
import Gallery5 from './images/forts/Rajgad/Gallery5.jpeg';
import Gallery6 from './images/forts/Rajgad/Gallery6.jpeg';


import tg1 from './images/forts/Torna/tg1.jpg';
import tg2 from './images/forts/Torna/tg2.jpg';
import tg3 from './images/forts/Torna/tg3.jpeg';
import tg4 from './images/forts/Torna/tg4.jpg';
import tg5 from './images/forts/Torna/tg5.jpg';
import tg6 from './images/forts/Torna/tg6.jpg';

import sg1 from './images/forts/Shivneri/sg1.webp';
import sg2 from './images/forts/Shivneri/sg2.jpg';
import sg3 from './images/forts/Shivneri/sg3.jpg';
import sg4 from './images/forts/Shivneri/sg4.jpg';
import sg5 from './images/forts/Shivneri/sg5.jpg';
import sg6 from './images/forts/Shivneri/sg6.jpg';


import rag1 from './images/forts/Raigad/rag1.jpg';
import rag2 from './images/forts/Raigad/rag2.jpg';
import rag3 from './images/forts/Raigad/rag3.jpg';
import rag4 from './images/forts/Raigad/rag4.jpg';
import rag5 from './images/forts/Raigad/rag5.jpg';
import rag6 from './images/forts/Raigad/rag6.jpg';

import jg1 from './images/forts/janjira/jg1.jpeg';
import jg2 from './images/forts/janjira/jg2.jpeg';
import jg3 from './images/forts/janjira/jg3.jpeg';
import jg4 from './images/forts/janjira/jg4.jpeg';
import jg5 from './images/forts/janjira/jg5.jpeg';
import jg6 from './images/forts/janjira/jg6.jpeg';

import sig1 from './images/forts/Sinhagad/sig1.avif';
import sig2 from './images/forts/Sinhagad/sig2.webp';
import sig3 from './images/forts/Sinhagad/sig3.jpg';
import sig4 from './images/forts/Sinhagad/sig4.jpg';
import sig5 from './images/forts/Sinhagad/sig5.jpg';
import sig6 from './images/forts/Sinhagad/sig6.webp';

const fortData = {
  rajgad: {
    title: "RAJGAD FORT",
   mainImage: mainimg,

    description: `Rajgad Fort, once the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj for nearly 26 years, is one of the most historically significant forts in Maharashtra. Situated about 60 km southwest of Pune and standing at a height of around 1,395 meters above sea level, the fort is located in the Sahyadri mountain ranges and offers breathtaking views of the surrounding valleys and peaks. Rajgad, meaning “Royal Fort,” was originally known as Murumbdev before being captured and rebuilt by Shivaji Maharaj, who transformed it into a massive stronghold with impressive architecture and strategic defenses. The fort is spread over a huge area and is famous for its unique layout, which consists of three main spurs—Suvela Machi, Sanjeevani Machi, and Padmavati Machi—each serving as a crucial defensive and residential section.

Padmavati Machi houses the Padmavati Temple, which serves as a rest spot for trekkers, and several ruins of administrative buildings. Sanjeevani Machi is an awe-inspiring fortified spur stretching for about 2.5 km with double-walled defenses, offering panoramic views of the Sahyadris, while Suvela Machi is known for its narrow pathways and hidden entrances. The fort also has significant landmarks like the Chor Darwaja (secret escape route), Pali Darwaja, and Gunjavane Darwaja, along with large water reservoirs such as the Chandrakor Talav. Its strategic location allowed Shivaji Maharaj to monitor trade routes and enemy movements effectively, making it a strong base for many Maratha campaigns.

The trek to Rajgad typically begins from villages like Gunjavane or Pali, each offering different routes ranging from moderate to difficult in difficulty level. The ascent can take 2.5–4 hours depending on the route chosen and fitness level. Monsoon season paints the fort in lush greenery with misty clouds, while winter offers clear skies and pleasant weather for exploration. Trekkers often combine Rajgad with nearby forts like Torna via a scenic connecting ridge for an extended adventure. Visitors should carry ample water, snacks, and sturdy trekking shoes, as the fort is vast and exploring all three machis can take an entire day.

Rajgad Fort stands as a testament to the Maratha Empire’s glory, blending rich history with natural beauty. Its massive walls, intricate gateways, and vantage points make it not just a trekking destination but a journey into Maharashtra’s golden era, where every bastion and pathway echoes tales of valor, leadership, and architectural brilliance.
`,
    location: "Gunjavane Village, Pune district, Maharashtra",
    nearestCity: "Pune (~60 km away)",
    duration: `Gunjavane route: ~2.5 to 3 hours\nPali route: ~1.5 to 2 hours`,
    height: "4,514 feet (1,376 meters) above sea level",
     gallery: [
      Gallery1,
      Gallery2,
      Gallery3,
      Gallery4,
      Gallery5,
      Gallery6
    ],
    activities: [
      "Pray at Kaundinya Eshwar Temple",
      "See Rajaram’s Tomb",
      "Witness the Tanaji Memorial and Samadhi",
      "Visit Hawa Point for scenic views",
      "Visit the Tilak Bungalow",
      "Pray at the Kali Temple"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.487335762952!2d73.43811537495557!3d18.23346788280522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8283eb38b1ce5%3A0xfc31826ad34a5b70!2sRaigad%20Fort!5e0!3m2!1sen!2sin!4v1754575071718!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
   
  },

  torna: {
    title: "TORNA FORT",
     mainImage: tornaMain,
    description: `Torna Fort, also known as Prachandagad, is the highest hill fort in Pune district, standing at 1,403 meters above sea level. Located around 60 km from Pune, the fort is reached via the base village of Velhe, from where the trek begins. This historically significant fort is believed to have been built in the 13th century during the Shilahar or Yadava period and holds special importance as it was the first fort captured by Chhatrapati Shivaji Maharaj in 1646 at the young age of 16, marking the beginning of the Maratha Empire’s expansion. The name Torna is thought to come from the wildflowers called Torana found in the region, while its alternate name, Prachandagad, means “Massive Fort,” reflecting its vast size. The fort is spread across a large area and is adorned with historical structures such as the Bini Darwaja, Kothi Darwaja, Zunjar Machi, Budhla Machi, and the Menghai Devi Temple, which is still a place of worship for trekkers and villagers.

The trek to Torna Fort covers roughly 2–3 km of steep and mixed terrain, with rocky patches, narrow ridges, and sections equipped with ladders and railings for safety. The ascent takes about 3–4 hours, and another 2–3 hours are needed to descend. During the monsoon season, the fort is surrounded by lush greenery, vibrant wildflowers, and small waterfalls, making it a scenic but slippery climb. Winter months from November to February offer clear skies and cooler weather, making the trek more comfortable. From the top, visitors are treated to panoramic views of other forts such as Rajgad, Raigad, Sinhagad, and the Lingana pinnacle. The fort’s vast expanse holds ruins of storerooms, water tanks, and bastions, reflecting its strategic importance in history.

Torna Fort has deep cultural roots, with locals believing that Menghai Devi, also called Torna Devi, is the protector of the fort and surrounding lands. The Navratri festival is celebrated here with special rituals, attracting villagers and trekkers alike. For safety, trekkers are advised to carry at least three liters of water as there is no potable water on the fort, along with snacks, sturdy trekking shoes, a raincoat during monsoon, and a first aid kit. Mobile signals are weak beyond Velhe, and it is best to inform locals about your plans before setting out. Torna is also connected to Rajgad Fort via a long ridge, making it a popular extended trek for experienced hikers. Combining physical challenge, breathtaking views, and rich history, Torna Fort remains one of Maharashtra’s most rewarding trekking destinations.`,
    location: "Velhe Village, Pune district, Maharashtra",
    nearestCity: "Pune (~50 km away)",
    duration: "Velhe route: ~2.5 to 3 hours (moderate to difficult)",
    height: "4,603 feet (1,403 meters) above sea level",
    gallery: [
      tg1,
      tg2,
      tg3,
      tg4,
      tg5,
      tg6
    ],
    activities: [
      "Explore Budhla Machi and Zunjar Machi",
      "Visit Mengai Devi Temple",
      "Enjoy panoramic ridge views",
      "Discover ancient water cisterns",
      "Camp overnight under stars"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7559.712721374479!2d73.6702467928211!3d18.278865345682328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2fbe3b51cdd49%3A0xe685bd96941d742e!2sTorna%20Fort!5e0!3m2!1sen!2sin!4v1754577712391!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  sinhagad: {
    title: "SINHAGAD FORT",
    mainImage: Sinhagadmain,
    description: `ChatGPT said:
Sinhagad Fort, meaning “Fort of the Lion,” is one of Maharashtra’s most famous hill forts, located about 35 km southwest of Pune. Perched at an elevation of around 1,312 meters above sea level in the Sahyadri range, the fort is known both for its strategic location and its association with the legendary Battle of Sinhagad in 1670. Originally known as Kondhana, it has a history dating back over 2,000 years, with evidence suggesting that it was built around the 2nd century AD, possibly by the Satavahanas. Over the centuries, it changed hands between various dynasties, including the Bahamanis, Nizam Shahi rulers, Mughals, and finally the Marathas. Its most famous moment in history came when Tanaji Malusare, a trusted general of Chhatrapati Shivaji Maharaj, led a daring night assault to recapture the fort from Mughal control. Although Tanaji lost his life in the battle, his bravery inspired Shivaji Maharaj to remark, “Gad ala, pan Sinha gela” (“The fort is won, but the lion is lost”), giving the fort its present name.

Sinhagad’s architecture showcases strong fortifications adapted to the steep cliffs surrounding it, with only two main entrances—Pune Darwaja and Kalyan Darwaja—positioned for defense. Inside, visitors can explore historical sites like Tanaji’s memorial, the Kaundinyeshwar Temple, Amruteshwar Temple, old military stables, and several water tanks that served the garrison. The fort offers panoramic views of the Khadakwasla Dam, Panshet Dam, and the lush valleys of the Sahyadris, making it a favorite spot for photographers and nature lovers. The surrounding slopes are rich with seasonal flora, especially vibrant during the monsoon months when waterfalls and mist add to its charm.

The trek to Sinhagad is relatively short and popular among beginners, with routes starting from the base villages of Donje or Atkarwadi. For those preferring a road trip, a motorable road leads right up to the fort’s entrance. Monsoon offers the most scenic trek, while winter provides pleasant weather for exploration. Apart from its historical importance, Sinhagad is also famous for its local food stalls at the top, serving traditional Maharashtrian snacks like pithla-bhakri, kanda bhaji, and curd. Visitors should carry water, wear sturdy footwear, and plan enough time to explore the fort’s many points of interest.

Sinhagad Fort remains a symbol of Maratha bravery and resilience, blending inspiring history with natural beauty. Whether for trekking, photography, or simply soaking in its legendary past, it offers a memorable experience that connects visitors deeply to Maharashtra’s heritage`,
    location: "Atkarwadi Village, Pune district, Maharashtra",
    nearestCity: "Pune (~35 km away)",
    duration: "Atkarwadi route: ~1 to 1.5 hours (easy to moderate)",
    height: "4,304 feet (1,312 meters) above sea level",
     gallery: [
      sig1,
      sig2,
      sig3,
      sig4,
      sig5,
      sig6
    ],
    activities: [
      "Visit Tanaji Malusare’s Memorial",
      "Explore the Kalyan Darwaza and Pune Darwaza",
      "Try local snacks like pithla-bhakri and kanda bhaji",
      "Enjoy views of Khadakwasla Dam",
      "Experience historical reenactments and events"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7554.425872104595!2d73.75512572666588!3d18.36677845644545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb2482c33fcd%3A0x6c91b6c7b4bc18d0!2sSinhagad%20Fort!5e0!3m2!1sen!2sin!4v1754577774033!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },
  
  raigad: {
  title: "RAIGAD FORT",
  mainImage: raigadMain,
  description: `Raigad Fort, often called the “Gibraltar of the East,” is one of the most important and majestic forts in Maharashtra’s history. Situated in the Sahyadri mountain range at an altitude of about 820 meters (2,700 feet) above sea level, it served as the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj from 1674 until his death in 1680. Located around 170 km from Pune and 140 km from Mumbai, the fort is perched on a steep hill, making it naturally defensible and almost inaccessible except through a few guarded approaches. Originally known as Rairi, it was captured by Shivaji Maharaj from the Chandrarao More of Jawali in 1656 and was extensively rebuilt into a grand capital with palaces, markets, and administrative buildings. It was at Raigad that Shivaji Maharaj was formally crowned as Chhatrapati in a grand ceremony, marking a key chapter in Maratha history.

The fort’s layout is both strategic and expansive, spread over several acres. Important structures include the Maha Darwaja (main entrance), which leads to the core area of the fort; the Raj Bhavan (royal palace); the Nagarkhana Darwaja; the Jagadishwar Temple where Shivaji Maharaj worshipped; and the Samadhi (tomb) of Shivaji Maharaj, which is a major site of reverence for visitors. The fort also features Takmak Tok, a high cliff used historically as an execution point, offering breathtaking views of the Konkan region. Large water reservoirs like the Ganga Sagar Lake ensured water supply for the fort’s residents, while the Bazar Peth (market street) reflects its role as a bustling administrative and trade center during its peak.

Reaching Raigad involves either a steep climb of about 1,700 steps from the base village of Pachad or a more convenient ropeway ride that transports visitors to the top in just a few minutes. The fort is best visited in the monsoon for lush greenery and dramatic clouds or in winter for clear skies and comfortable temperatures. Due to its size, exploring Raigad can take an entire day, and visitors are advised to carry water, snacks, and wear comfortable shoes.

Today, Raigad Fort is not just a historical monument but a symbol of Maratha pride, leadership, and architectural excellence. Standing atop its ramparts, one can almost imagine the grandeur of the Maratha court and the vision of Shivaji Maharaj, whose legacy still echoes across its stone walls and windswept plateaus.









Ask ChatGPT
`,
  location: "Pachad Village, Raigad district, Maharashtra",
  nearestCity: "Mahad (~25 km away), Pune (~140 km away)",
  duration: "Trek: ~2.5 to 3 hours via stone steps; Ropeway: ~4 minutes",
  height: "2,700 feet (820 meters) above sea level",
  gallery: [
      rag1,
      rag2,
      rag3,
      rag4,
      rag5,
      rag6
    ],
  activities: [
    "Climb the historic Maha Darwaja",
    "Visit the King’s Durbar and throne platform",
    "Explore Jagdishwar Temple",
    "Pay respects at Shivaji Maharaj’s Samadhi",
    "Walk through the queen’s quarters and market ruins",
    "Enjoy panoramic Konkan views from the fort walls"
  ],
  mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.613584856842!2d73.44115477494276!3d18.23424838278483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8283eb38b1ce5%3A0xfc31826ad34a5b70!2sRaigad%20Fort!5e0!3m2!1sen!2sin!4v1754692587591!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
},


  shivneri: {
    title: "SHIVNERI FORT",
    mainImage:Shivmain,
    description: `Shivneri Fort, located near Junnar in Pune district, is a site of immense historical importance as the birthplace of Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire. Perched at an elevation of around 1,050 meters (3,440 feet) above sea level, the fort stands on a hill in the rugged Sahyadri ranges, about 90 km from Pune. Its origins date back to the Satavahana period, and over the centuries it came under the control of several dynasties, including the Yadavas, Bahamanis, and Mughals. In the early 17th century, Shahaji Raje Bhosale, father of Shivaji Maharaj, was entrusted with the fort by the Adil Shahi Sultanate, and it was here, in 1630, that Jijabai gave birth to Shivaji Maharaj. This makes Shivneri not just a military stronghold but also a revered heritage site.

The fort’s structure is well-planned for defense, with high stone walls, bastions, and seven successive gates such as Mena Darwaja and Hathi Darwaja, which served as protective layers against invaders. Inside the fort, visitors can see the Shivkunj, a memorial marking the exact birthplace of Shivaji Maharaj, complete with a statue of young Shivaji and Jijabai. The fort also houses ancient water reservoirs like Ganga and Yamuna tanks, which provided a steady water supply. There are several temples and prayer halls, including one dedicated to Goddess Shivai, after whom Shivaji was named. The fort’s elevated position offers panoramic views of the surrounding valleys and the historic Junnar caves area.

Trekking to Shivneri Fort is relatively easy compared to other hill forts, with well-maintained stone steps and paths from the base village of Junnar, taking about 45 minutes to an hour to reach the top. The fort is especially beautiful during the monsoon, when the hills are covered in greenery, but it is also a great visit in winter for clear, pleasant weather. Visitors should carry water and light snacks, though small stalls are available near the base.

Today, Shivneri Fort stands as a symbol of Maratha pride and heritage. It is not only a monument of military architecture but also a place where history and legacy come alive, connecting visitors to the early life of one of India’s greatest leaders. Its blend of natural beauty, historical structures, and emotional significance makes it a must-visit for history enthusiasts, trekkers, and admirers of Chhatrapati Shivaji Maharaj’s legacy.`,
    location: "Junnar, Pune district, Maharashtra",
    nearestCity: "Pune (~90 km away)",
    duration: "Base to top: ~1 to 1.5 hours (easy)",
    height: "3,500 feet (1,067 meters) above sea level",
    gallery: [
      sg1,
      sg2,
      sg3,
      sg4,
      sg5,
      sg6
    ],
    activities: [
      "Visit Shivaji Maharaj's Birthplace",
      "Explore Ganga-Jamuna cisterns",
      "See life-size statues of Shivaji and Jijabai",
      "Take a heritage walk with guide",
      "Picnic with scenic views"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7534.634593076707!2d73.86624387492038!3d19.204199733932566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f6b245e132f3%3A0xf79db649f68d25f7!2sShivneri%20Fort!5e0!3m2!1sen!2sin!4v1754577840537!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  },

  murud: {
    title: "MURUD-JANJIRA FORT",
    mainImage: murudMain,
    description: `Shivneri Fort, located near Junnar in Pune district, is a site of immense historical importance as the birthplace of Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire. Perched at an elevation of around 1,050 meters (3,440 feet) above sea level, the fort stands on a hill in the rugged Sahyadri ranges, about 90 km from Pune. Its origins date back to the Satavahana period, and over the centuries it came under the control of several dynasties, including the Yadavas, Bahamanis, and Mughals. In the early 17th century, Shahaji Raje Bhosale, father of Shivaji Maharaj, was entrusted with the fort by the Adil Shahi Sultanate, and it was here, in 1630, that Jijabai gave birth to Shivaji Maharaj. This makes Shivneri not just a military stronghold but also a revered heritage site.

The fort’s structure is well-planned for defense, with high stone walls, bastions, and seven successive gates such as Mena Darwaja and Hathi Darwaja, which served as protective layers against invaders. Inside the fort, visitors can see the Shivkunj, a memorial marking the exact birthplace of Shivaji Maharaj, complete with a statue of young Shivaji and Jijabai. The fort also houses ancient water reservoirs like Ganga and Yamuna tanks, which provided a steady water supply. There are several temples and prayer halls, including one dedicated to Goddess Shivai, after whom Shivaji was named. The fort’s elevated position offers panoramic views of the surrounding valleys and the historic Junnar caves area.

Trekking to Shivneri Fort is relatively easy compared to other hill forts, with well-maintained stone steps and paths from the base village of Junnar, taking about 45 minutes to an hour to reach the top. The fort is especially beautiful during the monsoon, when the hills are covered in greenery, but it is also a great visit in winter for clear, pleasant weather. Visitors should carry water and light snacks, though small stalls are available near the base.

Today, Shivneri Fort stands as a symbol of Maratha pride and heritage. It is not only a monument of military architecture but also a place where history and legacy come alive, connecting visitors to the early life of one of India’s greatest leaders. Its blend of natural beauty, historical structures, and emotional significance makes it a must-visit for history enthusiasts, trekkers, and admirers of Chhatrapati Shivaji Maharaj’s legacy..`,
    location: "Murud, Raigad district, Maharashtra",
    nearestCity: "Alibaug (~55 km), Mumbai (~165 km)",
    duration: "Boat ride: ~20 mins + 1 hour exploration",
    height: "Sea level (approx. 90 ft fort walls)",
    gallery: [
      jg1,
      jg2,
      jg3,
      jg4,
      jg5,
      jg6
    ],
    activities: [
      "Take a boat ride to the sea fort",
      "Explore 19 bastions and massive canons",
      "Visit ancient mosques and palaces",
      "Enjoy panoramic views of the Arabian Sea",
      "Capture stunning sunset photography"
    ],
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12085.378394494816!2d72.97036952432463!3d18.296755120458305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be88aa9f6c07b2f%3A0x544ffefeb59de81e!2sMurud%20Janjira!5e0!3m2!1sen!2sin!4v1754577897356!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  }
};


const FortDetails = () => {
  const { fortId } = useParams();
  const fort = fortData[fortId];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!fort) return <h2 className="not-found">❌ Fort Not Found</h2>;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => setCurrentImageIndex((prev) => (prev - 1 + fort.gallery.length) % fort.gallery.length);
  const showNext = () => setCurrentImageIndex((prev) => (prev + 1) % fort.gallery.length);

  return (
    <div className="fort-details-container">
      <div className="title-wrapper">
        <div className="title-line"></div>
        <h1 className="fort-title">{fort.title}</h1>
        <div className="title-line"></div>
      </div>

      <img className="fort-main-img" src={fort.mainImage} alt={fort.title} />

      <div className="content-section">
        <div className="fort-description">
          <p>{fort.description}</p>
        </div>
        <div className="fort-info">
          <ul>
            <li><strong>📍 Location:</strong> {fort.location}</li>
            <li><strong>🏙️ Nearest City:</strong> {fort.nearestCity}</li>
            <li><strong>🕒 Trek Duration:</strong><br />{fort.duration}</li>
            <li><strong>⛰️ Height:</strong> {fort.height}</li>
          </ul>

          <div className="map-container" dangerouslySetInnerHTML={{ __html: fort.mapEmbed }}></div>
        </div>
      </div>

      <h3 className="section-heading">Gallery</h3>
      <div className="fort-gallery">
        {fort.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Rajgad view ${index + 1}`}
            className="gallery-img"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>✖</button>
          <button className="nav-btn left" onClick={showPrev}>⟨</button>
          <img src={fort.gallery[currentImageIndex]} alt="Full View" className="lightbox-img" />
          <button className="nav-btn right" onClick={showNext}>⟩</button>
        </div>
      )}

      <div className="activities-section">
        <div className="activities-heading">
          Activities
        </div>
        <ul className="activities-list">
          {fort.activities.map((activity, i) => (
            <li key={i}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FortDetails;