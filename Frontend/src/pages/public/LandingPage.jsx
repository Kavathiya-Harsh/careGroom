import React from 'react';
import Navbar from '../../components/common/Navbar';
import Hero from '../../components/common/Hero';
import Philosophy from '../../components/common/Philosophy';
import Experience from '../../components/professional/Experience';
import Collections from '../../components/common/Collections';
import Artisans from '../../components/professional/Artisans';
import Journal from '../../components/common/Journal';
import Testimonial from '../../components/common/Testimonial';
import CTA from '../../components/common/CTA';
import Footer from '../../components/common/Footer';

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Experience />
        <Collections />
        <Artisans />
        <Journal />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
export default LandingPage;
