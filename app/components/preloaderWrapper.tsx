import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderWrapperProps {
  children: ReactNode;
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading ? (
          <>
            <motion.div
              key='preloader-1'
              initial={{ opacity: 1 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                zIndex: 9995,
              }}
            />
            <motion.div
              key='preloader-2'
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 1, duration: 0.2, ease: 'easeIn' }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#C6FB50',
                zIndex: 9996,
              }}
            />
            <motion.div
              key='preloader-3'
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 1.3, duration: 0.2, ease: 'easeIn' }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#f5f5f5',
                zIndex: 9997,
              }}
            />
            <motion.div
              key='preloader-4'
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 1.6, duration: 0.2, ease: 'easeIn' }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                zIndex: 9998,
              }}
            />
            <motion.div
              key='preloader-5'
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 1.9, duration: 0.2, ease: 'easeIn' }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#C6FB50',
                zIndex: 9999,
              }}
            />
            <motion.div
              key='preloader-6'
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 2.2, duration: 0.2, ease: 'easeIn' }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#f5f5f5',
                zIndex: 10000,
              }}
            />
          </>
        ) : (
          children
        )}
      </AnimatePresence>
    </>
  );
}
