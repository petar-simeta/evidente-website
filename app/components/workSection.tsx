'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import styles from '../page.module.scss';

interface Project {
  id: number;
  title: string;
  year: string;
  image: string;
  tags: string[];
}

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const initialProjects: Project[] = [
    {
      id: 1,
      title: 'Barcaffe Shop',
      year: '2024',
      image: '/barcaffe.jpeg',
      tags: ['Webflow Dev', 'Custom Code'],
    },
    {
      id: 2,
      title: 'OTP banka',
      year: '2024',
      image: '/otp.jpeg',
      tags: ['Web Design', 'Wireframing'],
    },
    {
      id: 3,
      title: 'Končar',
      year: '2024',
      image: '/koncar.jpeg',
      tags: ['Web Design', 'Wireframing'],
    },
  ];

  const additionalProjects: Project[] = [
    {
      id: 4,
      title: 'Auto Hrvatska',
      year: '2024',
      image: '/autohrvatska.jpeg',
      tags: ['UI Design', 'Development'],
    },
    {
      id: 5,
      title: 'Hrvatski Sabor',
      year: '2024',
      image: '/sabor.jpeg',
      tags: ['Branding', 'Web Design'],
    },
    {
      id: 6,
      title: 'Farmacia',
      year: '2024',
      image: '/farmacia.jpeg',
      tags: ['UX Research', 'Development'],
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const displayedProjects = showMore
    ? [...initialProjects, ...additionalProjects]
    : initialProjects;

  const handleSeeMore = () => {
    setShowMore(true);
  };

  return (
    <section id='work' className={styles.workSection}>
      <div className='container'>
        <h2 ref={ref}>
          <span>
            {'Featured Work'.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h2>

        <div className={styles.projectGrid}>
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                duration: 0.5,
                delay: index < 3 ? 0.5 + index * 0.4 : (index - 3) * 0.4,
                type: 'spring',
                bounce: 0.4,
              }}
            >
              <div className={styles.imageContainer}>
                <span className={styles.yearTag}>{project.year}</span>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  fill
                />
                <div className={styles.tagContainer}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </motion.div>
          ))}
        </div>

        {!showMore && (
          <div className={styles.buttonContainer}>
            <motion.button
              className={styles.seeMoreButton}
              onClick={handleSeeMore}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                duration: 0.5,
                delay: 1.7,
                type: 'spring',
                bounce: 0.4,
              }}
            >
              See more project
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
