import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Help from './Component/Help';
import Login from './Component/Login';
import Signup from './Component/Signup';
// Sections & Details
import FortsSection from './Component/FortsSection';
import FortDetails from './Component/FortDetails';

import CavesSection from './Component/CavesSection';
import CavesDetails from './Component/CavesDetails';

import BeachesSection from './Component/BeachesSection';
import BeachesDetails from './Component/BeachesDetails';

import TemplesSection from './Component/TemplesSection';
import TempleDetails from './Component/TempleDetails';

import WildlifeSection from './Component/WildlifeSection';
import WildlifeDetails from './Component/WildlifeDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
  {/* Home & General */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/help" element={<Help />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  {/* Forts */}
  <Route path="/forts" element={<FortsSection />} />
  <Route path="/fort/:fortId" element={<FortDetails />} />

  {/* Caves */}
  <Route path="/caves" element={<CavesSection />} />
  <Route path="/cave/:caveId" element={<CavesDetails />} />

  {/* Beaches */}
  <Route path="/beaches" element={<BeachesSection />} />
  <Route path="/beach/:beachId" element={<BeachesDetails />} />

  {/* Temples */}
  <Route path="/temples" element={<TemplesSection />} />
  <Route path="/temple/:templeId" element={<TempleDetails />} />

  {/* Wildlife */}
  <Route path="/wildlife" element={<WildlifeSection />} />
  <Route path="/wildlife/:wildlifeId" element={<WildlifeDetails />} />
</Routes>

    </div>
  );
}

export default App;