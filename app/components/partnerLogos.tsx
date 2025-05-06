'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const logoList1 = [
  { src: '/partner-logos/atlantic-logo.svg', alt: 'Atlantic' },
  { src: '/partner-logos/loreal-logo.svg', alt: "L'Oreal" },
  { src: '/partner-logos/pbz-logo.svg', alt: 'PBZ' },
  { src: '/partner-logos/otp-logo.png', alt: 'OTP Banka' },
  { src: '/partner-logos/cambridge-logo.svg', alt: 'University of Cambridge' },
  { src: '/partner-logos/slatinska-logo.png', alt: 'Slatinska banka' },
  { src: '/partner-logos/autohrvatska-logo.png', alt: 'AutoHrvatska' },
  { src: '/partner-logos/koncar-logo.svg', alt: 'Končar' },
  { src: '/partner-logos/barcaffe-logo.svg', alt: 'Barcaffe' },
  { src: '/partner-logos/farmacia-logo.svg', alt: 'Farmacia' },
  { src: '/partner-logos/nzjz-logo.png', alt: 'NZJZ Dr. Andrija Štampar' },
  { src: '/partner-logos/ritosa-logo.png', alt: 'Ritoša' },
];
const logoList2 = [
  { src: '/partner-logos/sabor-logo.png', alt: 'Hrvatski Sabor' },
  { src: '/partner-logos/mingor-logo.png', alt: 'MINGOR' },
  { src: '/partner-logos/pivac-logo.png', alt: 'Pivac' },
  {
    src: '/partner-logos/fruklab-logo.svg',
    alt: 'Fruklab - University of Cambridge',
  },
  { src: '/partner-logos/rch-logo.svg', alt: 'Radiochirurgia' },
  { src: '/partner-logos/perpetuum-logo.svg', alt: 'Perpetuum' },
  { src: '/partner-logos/greenseeker-logo.png', alt: 'Greenseeker' },
  { src: '/partner-logos/malci-logo.png', alt: 'Malči Viola' },
  { src: '/partner-logos/kroko-logo.png', alt: 'Kroko tactical' },
  { src: '/partner-logos/santini-logo.png', alt: 'Santini' },
  { src: '/partner-logos/tis-logo.png', alt: 'TIS' },
  { src: '/partner-logos/bluebird-logo.png', alt: 'Bluebird' },
];

export default function PartnerLogos() {
  const BLURS = 8;
  const [timestamp, setTimestamp] = useState(Date.now());
  const items = 12;
  const blurring = true;

  useEffect(() => {
    setTimestamp(Date.now());
  }, [items]);

  return (
    <>
      <div
        data-translate='items'
        data-direction='horizontal'
        data-blurring={blurring}
        className='blurred-logo-marquee'
        data-play-state='running'
      >
        <div className='marquee-container'>
          <div className='blur--left mq-blur'>
            {new Array(BLURS).fill(undefined).map((_, index) => (
              <div
                key={index}
                style={{ '--index': index } as React.CSSProperties}
              />
            ))}
          </div>
          <ul>
            {logoList1.map((item, index) => {
              return (
                <li
                  key={`index-${timestamp}--${index}`}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <Image
                    src={item.src}
                    width={250}
                    height={50}
                    alt={item.alt}
                  />
                </li>
              );
            })}
          </ul>
          <div className='blur--right mq-blur'>
            {new Array(BLURS).fill(undefined).map((_, index) => (
              <div
                key={index}
                style={{ '--index': index + 1 } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        data-translate='items'
        data-direction='horizontal'
        data-blurring={blurring}
        className='blurred-logo-marquee blurred-logo-marquee-reverse'
        data-play-state='running'
      >
        <div className='marquee-container'>
          <div className='blur--left mq-blur'>
            {new Array(BLURS).fill(undefined).map((_, index) => (
              <div
                key={index}
                style={{ '--index': index } as React.CSSProperties}
              />
            ))}
          </div>
          <ul>
            {logoList2.map((item, index) => {
              return (
                <li
                  key={`index-${timestamp}--${index}`}
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <Image
                    src={item.src}
                    width={250}
                    height={50}
                    alt={item.alt}
                  />
                </li>
              );
            })}
          </ul>
          <div className='blur--right mq-blur'>
            {new Array(BLURS).fill(undefined).map((_, index) => (
              <div
                key={index}
                style={{ '--index': index + 1 } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
