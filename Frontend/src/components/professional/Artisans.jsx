import React from 'react';
import { motion } from 'framer-motion';
import artisan1Img from '../../assets/artisan_1.png';
import artisan2Img from '../../assets/artisan_2.png';

const artisans = [
  {
    id: 1,
    name: "Elena Vance",
    specialty: "Botanical Therapy",
    image: artisan1Img,
    rating: "4.9",
    reviews: 124
  },
  {
    id: 2,
    name: "Marcus Sterling",
    specialty: "Master Barber",
    image: artisan2Img,
    rating: "5.0",
    reviews: 215
  },
  {
    id: 3,
    name: "James Thorne",
    specialty: "Skin & Esthetics",
    image: artisan2Img,
    rating: "4.8",
    reviews: 98,
    flip: true
  }
];

const Artisans = () => {
  return (
    <section className="collections" id="artisans" style={{ background: '#f5f2eb' }}>
      <div className="container">
        <div className="collections__header">
          <div>
            <motion.span 
              className="section-eyebrow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              Meet The Masters
            </motion.span>
            <motion.h2 
              className="collections__title"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Curated<br />
              <motion.em
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Artisans
              </motion.em>
            </motion.h2>
          </div>
          <motion.a 
            href="#" 
            className="btn-ghost"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            VIEW ALL ARTISANS
          </motion.a>
        </div>

        <div className="collections__grid">
          {artisans.map((artisan, index) => (
            <motion.div 
              key={artisan.id}
              className="collection-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="collection-card__img-wrap" style={{ aspectRatio: '1/1' }}>
                <img 
                  src={artisan.image} 
                  alt={artisan.name} 
                  className={`collection-card__img ${artisan.flip ? '-scale-x-100' : ''}`}
                />
              </div>
              <div className="collection-card__info">
                <span className="collection-card__cat">{artisan.specialty}</span>
                <h3 className="collection-card__title">{artisan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '12px' }}>★</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--sage)' }}>{artisan.rating}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(31, 74, 63, 0.4)' }}>({artisan.reviews} reviews)</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artisans;
