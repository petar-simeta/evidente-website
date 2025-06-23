'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const logoList1 = [
  { src: '/partner-logos/loreal-logo.svg', alt: "L'Oréal" },
  { src: '/partner-logos/sabor-logo.svg', alt: 'Hrvatski sabor' },
  { src: '/partner-logos/koncar-logo.svg', alt: 'Končar' },
  { src: '/partner-logos/stampar-logo.svg', alt: 'NZJZ “Dr. Andrija Štampar”' },
  { src: '/partner-logos/atlantic-logo.svg', alt: 'Atlantic Grupa' },
  { src: '/partner-logos/otp-logo.svg', alt: 'OTP banka' },
  { src: '/partner-logos/autohrvatska-logo.svg', alt: 'Auto Hrvatska' },
  { src: '/partner-logos/mzozt-logo.svg', alt: 'MZOZT' },
  { src: '/partner-logos/fruklab-logo.svg', alt: 'Fruklab' },
];

const logoList2 = [
  { src: '/partner-logos/cambridge-logo.svg', alt: 'University of Cambridge' },
  { src: '/partner-logos/santini-logo.svg', alt: 'Santini' },
  { src: '/partner-logos/barcaffe-logo.svg', alt: 'Barcaffe' },
  { src: '/partner-logos/ritosa-logo.svg', alt: 'Ritoša' },
  { src: '/partner-logos/pbz-logo.svg', alt: 'PBZ' },
  { src: '/partner-logos/farmacia-logo.svg', alt: 'Farmacia' },
  { src: '/partner-logos/perpetuum-logo.svg', alt: 'Perpetuum' },
  { src: '/partner-logos/pivac-logo.svg', alt: 'Pivac' },
  { src: '/partner-logos/kroko-logo.svg', alt: 'Kroko Tactical' },
];

export default function PartnerLogos() {
  const BLURS = 8;
  const [timestamp, setTimestamp] = useState(Date.now());
  const items = 9;
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
