import React, { useState, useEffect } from 'react';
import './App.css';
import BirdIcon from './BirdIcon';

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

const pages = [
  {
    title: "Hi, I'm Joe 👋 Co-founder and Executive Chair at Open Partners.",
    content: (
      <>
        <p>As our agency has grown, the Founders (myself, Michael and Elliot) have had less time to connect directly with everyone like we could in the early days. Back then, the first team members had unhampered access to our vision, energy, and insights, which, due to scale, isn't the case anymore. So to help bridge that gap we've put together this guide to share the key lessons and principles that we believe have underpinned our success. We want to share it with you, the people we think have what it takes to lead our business in future.</p>
<p>This website is designed to help you quickly understand our values, approach, and broadly speaking, how we tackle challenges... "How we do things round here". So if you've been asked to read it, take it as a compliment, and take the time to digest it properly. If you do, you'll be better equipped to thrive here… and ensure we keep building something amazing.</p>
      </>
    ),
    cta: "Let's go!"
  },
  {
    title: 'Welcome to the rocket ship',
    content: (
      <>
        <p>Open Partners launched in 2017, and you'll hopefully know the story about our growth in case you don't: we're officially one of the top 100 fastest growing companies in the UK. What we're doing isn't normal and our rise has been meteoric.</p>
      </>
    ),
    cta: 'Our positioning'
  },
  {
    title: 'The Agency of Next.',
    content: (
      <>
        <p>We are not just a Media Agency. We adapted, and now call ourselves the Agency of Next. We deliver Marketing Transformations. We came to our brand positioning after asking our clients why they chose to work with us.</p>
      </>
    ),
    cta: 'No compromises'
  },
  {
    title: 'A no-compromise choice.',
    content: (
      <>
        <p>Before launching Open Partners we came from a network agency, and we set out to be a better alternative to our old employer for a certain type of client.</p>
      </>
    ),
    cta: 'Better for everyone'
  },
  {
    title: 'Set up to be "Better for Everyone".',
    content: (
      <>
        <p>At Open Partners we care as much about our staff and our industry partners as we do about our clients. We deliberately set up to be better for our Clients, Partners, and our People.</p>
      </>
    ),
    cta: 'No compromises'
  }
];

function App() {
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(false);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      setPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
    }, 400);
  };

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
