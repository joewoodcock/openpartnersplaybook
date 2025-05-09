import React, { useState, useEffect } from 'react';
import './App.css';
import BirdIcon from './BirdIcon';
import SimpleDiamond from './SimpleDiamond';
import handshakeGif from './assets/handshake.gif';
import goalHero from './assets/hikers.jpg';
import monsterGif from './assets/monster2.gif';
import personHero from './assets/person.jpg';

// Preload images
const preloadImages = () => {
  const images = [
    handshakeGif,
    goalHero,
    monsterGif,
    personHero
  ];
  
  return Promise.all(
    images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
};

const RocketBgIcon = () => (
  <svg width="135" height="130" viewBox="0 0 135 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="rocket-bg-icon">
    <path d="M135 130H134.399C131.62 116.307 119.514 106 105 106H60C43.4315 106 30 92.5685 30 76V30C30 13.4315 16.5685 0 0 0H135V130Z" fill="white"/>
  </svg>
);

const RocketScene = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="hero rocket-hero">
      <div className={`scene${visible ? ' rocket-fade-in' : ''}`}>
        <div className="wing-left"></div>
        <div className="wing-right"></div>
        <div className="exhaust"></div>
        <div className="capsule">
          <div className="top">
            <div className="shadow"></div>
          </div>
          <div className="base"></div>
        </div>
        <div className="window-big"></div>
        <div className="window-small"></div>
        {[1,2,3,4].map(i => <div key={`fire-${i}`} className={`fire-${i}`}></div>)}
        {[1,2,3,4].map(i => <div key={`spark-${i}`} className={`spark-${i}`}></div>)}
        {[...Array(16)].map((_,i) => <div key={`star-${i+1}`} className={`star star--${i+1}`}></div>)}
      </div>
    </div>
  );
};

const FuturisticGrid = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={`hero grid-hero${visible ? ' grid-fade-in' : ''}`}>
      <div className="outer">
        <div className="wrapper">
          <div className="bg bg1">
            {[...Array(19)].map((_, i) => (
              <div key={`v1-${i}`} className="line vertical-line"></div>
            ))}
          </div>
          <div className="bg bg2">
            {[...Array(19)].map((_, i) => (
              <div key={`v2-${i}`} className="line vertical-line"></div>
            ))}
          </div>
          <div className="bg bg3">
            {[...Array(9)].map((_, i) => (
              <div key={`h1-${i}`} className={`line horizontal-line line${i+1}`}></div>
            ))}
          </div>
          <div className="bg bg4">
            {[...Array(9)].map((_, i) => (
              <div key={`h2-${i}`} className={`line horizontal-line line${i+1}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const pages = [
  {
    title: "Welcome to the Open Partners Playbook 👋",
    content: (
      <>
        <div className="hero" style={{ backgroundImage: `url(${handshakeGif})` }}></div>
        <p>This stuff is bread and butter for us and it doesn't cost a thing. We're always on time. We're respectful. We're kind, and we're fair. We avoid gossip, offensive language, and inappropriate jokes. We communicate clearly, politely, effectively and use appropriate language and tone. We dress appropriately for the environment or occasion, and adhere to dress codes or norms with clients and partners. We're dependable by meeting deadlines, keeping commitments, and knowing that if you show up on time you're a few minutes late. We take pride in demonstrating expertise and skill in our field. We show a willingness to learn and adapt when needed. We maintain appropriate boundaries with colleagues and clients, avoid unprofessional relationships, and handle challenges calmly and constructively. We avoid drama or placing blame. We own our mistakes, correct them, and learn from them without deflecting responsibility. We follow ethical practices, including honesty, transparency, and adherence to rules or policies. We keep our personal emotions in check, even under pressure, and remain composed and courteous at all times. Humility isn't optional - it's foundational. Respect and courtesy aren't just for the boardroom; they extend to everyone you meet. Greet receptionists with the same warmth as you would a CEO. Learn everyone's name. Clean up after yourself - better yet, clean up after others. True character shows in the smallest actions, and it sets the tone for how we operate.  </p>
      </>
    ),
    cta: "Next"
  },
  {
    title: "The Agency of Next.",
    content: (
      <>
        <div className="hero" style={{ backgroundImage: `url(${goalHero})` }}></div>
        <p>We're not just another agency. We're the agency that's always looking ahead, always pushing boundaries, and always delivering results that matter. Our approach is simple: we combine cutting-edge technology with creative thinking to create solutions that drive real business growth. We're not afraid to take risks, to challenge the status quo, or to think differently. Because in a world that's constantly changing, the only way to stay ahead is to be the agency of next.</p>
      </>
    ),
    cta: "Next"
  },
  {
    title: "No compromises.",
    content: (
      <>
        <div className="hero" style={{ backgroundImage: `url(${monsterGif})` }}></div>
        <SimpleDiamond />
        <p>We believe in excellence without compromise. Every project we take on is an opportunity to push the boundaries of what's possible. We don't cut corners, we don't settle for mediocrity, and we don't accept anything less than the best. Our team is made up of passionate professionals who are committed to delivering exceptional results, no matter the challenge. When you work with us, you're not just getting a service - you're getting a partner who's as invested in your success as you are.</p>
      </>
    ),
    cta: "Next"
  },
  {
    title: "The future is now.",
    content: (
      <>
        <div className="hero" style={{ backgroundImage: `url(${personHero})` }}></div>
        <p>The future isn't something we wait for - it's something we create. At Open Partners, we're not just adapting to change; we're driving it. We're constantly exploring new technologies, new methodologies, and new ways of thinking to ensure that our clients are always ahead of the curve. Our forward-thinking approach means that we're not just solving today's problems - we're anticipating tomorrow's challenges. Join us in shaping the future of digital innovation.</p>
      </>
    ),
    cta: "Get Started"
  }
];

function App() {
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images on initial load
  useEffect(() => {
    preloadImages()
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      });
  }, []);

  // Initialize page from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const pageNumber = parseInt(hash.replace('#page-', ''));
      if (!isNaN(pageNumber) && pageNumber >= 0 && pageNumber < pages.length) {
        setPage(pageNumber);
      }
    }
  }, []);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = (event) => {
      const newPage = event.state?.page || 0;
      setFade(true);
      setTimeout(() => {
        setFade(false);
        setPage(newPage);
        window.scrollTo(0, 0);
      }, 400);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      const nextPage = page < pages.length - 1 ? page + 1 : page;
      setPage(nextPage);
      // Update browser history
      window.history.pushState({ page: nextPage }, '', `#page-${nextPage}`);
      window.scrollTo(0, 0);
    }, 400);
  };

  // Initialize history state if no hash exists
  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState({ page: 0 }, '', '#page-0');
    }
  }, []);

  useEffect(() => {
    // Add loaded class to hero images after they're preloaded
    const heroElements = document.querySelectorAll('.hero');
    heroElements.forEach(hero => {
      hero.classList.add('loaded');
    });
  }, [page]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className={`mobile-app page-${page}`}>
      <BirdIcon className="bird-icon" />
      <div className={fade ? 'fade-out fade-wrapper' : 'fade-in fade-wrapper'}>
        <div className="page-content">
          {page === 0 && (
            <div className="hero">
              <RocketBgIcon />
            </div>
          )}
          {page === 1 && <RocketScene />}
          {page === 2 && <FuturisticGrid />}
          {page === 3 && (
            <div className="hero">
              <svg width="135" height="130" viewBox="0 0 135 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="rocket-bg-icon">
                <path d="M135 130H134.399C131.62 116.307 119.514 106 105 106H60C43.4315 106 30 92.5685 30 76V30C30 13.4315 16.5685 0 0 0H135V130Z" fill="#0a0e1a"/>
              </svg>
              <SimpleDiamond />
            </div>
          )}
          {page === 4 && (
            <div className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
              <img
                src={handshakeGif}
                alt="Handshake"
              />
            </div>
          )}
          {page === 5 && (
            <div className="hero" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
              <svg width="135" height="130" viewBox="0 0 135 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="rocket-bg-icon">
                <path d="M135 130H134.399C131.62 116.307 119.514 106 105 106H60C43.4315 106 30 92.5685 30 76V30C30 13.4315 16.5685 0 0 0H135V130Z" fill="#1d1d1d"/>
              </svg>
              <img
                src={goalHero}
                alt="People on a mountain summit"
                style={{ width: '100%', borderRadius: '20px', marginBottom: '-125px'}}
              />
            </div>
          )}
          {page === 6 && (
            <div className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
              <img
                src={monsterGif}
                alt="Mindset Monster"
              />
            </div>
          )}
          {page === 7 && (
            <div className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
              <img
                src={personHero}
                alt="Full service person"
                style={{ height: '500px' }}
              />
            </div>
          )}
          <h2>{page === 0
            ? (<span>Hi, I'm Joe 👋<br />Co-founder and Executive Chair at <br />Open Partners.</span>)
            : pages[page].title}
          </h2>
          <div>{pages[page].content}</div>
        </div>
        <button className="yellow-cta" onClick={handleNext} disabled={fade}>
          {pages[page].cta}
        </button>
      </div>
    </div>
  );
}

export default App;
