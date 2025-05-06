'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import styles from '../page.module.scss';

// Define the project type
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

  // Initial projects to display
  const initialProjects: Project[] = [
    {
      id: 1,
      title: 'Barcaffe Shop',
      year: '2024',
      image: '/placeholder.jpg',
      tags: ['Webflow Dev', 'Custom Code'],
    },
    {
      id: 2,
      title: 'Farmacia',
      year: '2024',
      image: '/placeholder.jpg',
      tags: ['Web Design', 'Wireframing'],
    },
    {
      id: 3,
      title: 'Končar',
      year: '2024',
      image: '/placeholder.jpg',
      tags: ['Web Design', 'Wireframing'],
    },
  ];

  // Additional projects to show when "See more" is clicked
  const additionalProjects: Project[] = [
    {
      id: 4,
      title: 'Digital Agency',
      year: '2024',
      image: '/placeholder.jpg',
      tags: ['UI Design', 'Development'],
    },
    {
      id: 5,
      title: 'Tech Solutions',
      year: '2024',
      image: '/placeholder.jpg',
      tags: ['Branding', 'Web Design'],
    },
    {
      id: 6,
      title: 'Creative Studio',
      year: '2024',
      image: '/placeholder.jpg',
      tags: ['UX Research', 'Development'],
    },
  ];

  // State to track if additional projects are shown
  const [showMore, setShowMore] = useState(false);

  // All projects to display
  const displayedProjects = showMore
    ? [...initialProjects, ...additionalProjects]
    : initialProjects;

  // Function to handle "See more" button click
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
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className={styles.projectImage}
                  width={500}
                  height={600}
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
