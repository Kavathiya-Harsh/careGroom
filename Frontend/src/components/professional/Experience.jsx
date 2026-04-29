import React from 'react';
import { motion } from 'framer-motion';
import experienceImg from '../../assets/experience.png';

const Experience = () => {
  return (
    <section className="philosophy" id="experience" style={{ background: '#f0ede5' }}>
      <div className="container philosophy__inner" style={{ direction: 'rtl' }}>
        <motion.div 
          className="philosophy__text"
          style={{ direction: 'ltr' }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">THE STANDARD</span>
          <h2 className="philosophy__title">
            The CareGroom<br />
            <motion.em
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Experience
            </motion.em>
          </h2>
          <p className="philosophy__body">
            Every appointment is an opportunity for renewal. From hot towel treatments infused with pure botanical oils to the option of a 'Silent Service' for complete mental reset, we ensure your time is truly your own. 
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['Private Executive Suites', 'Curated Botanical Products', 'Silent Service Option'].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                style={{ fontSize: '14px', fontWeight: '500', color: 'var(--sage)', display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }}></div>
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.a 
            href="#book" 
            className="btn-outline"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            EXPERIENCE IT YOURSELF
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="philosophy__image"
          style={{ direction: 'ltr', aspectRatio: '4/5' }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={experienceImg} alt="The CareGroom Experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="philosophy__image-overlay" />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
