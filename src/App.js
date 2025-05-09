import React, { useState, useEffect } from 'react';
import './App.css';
import BirdIcon from './BirdIcon';
import SimpleDiamond from './SimpleDiamond';
import handshakeGif from './assets/handshake.gif';
import goalHero from './assets/hikers.jpg';
import monsterGif from './assets/monster2.gif';
import personHero from './assets/person.jpg';

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
        <p>Open Partners launched in 2017, and you'll hopefully know the story about our growth? In case you don't, we're officially one of the top 100 fastest growing companies in the UK (Sunday Times), and unofficially the fastest growing Independent media agency in the UK (Google). </p>
        <p>We now have over 50 clients, 140 staff, more than £70m annual turnover, and offices in Manchester, London, Liverpool, Bristol, Toronto, and Melbourne. What we're doing isn't normal and our rise has been meteoric, growing more than 50% every year since we launched in 2017. So from that perspective we're special. I wanted to start this memo by sharing what we think the reasons are for that.</p>
      </>
    ),
    cta: 'Our positioning'
  },
  {
    title: 'The Agency of Next.',
    content: (
      <>
        <p>In 2017 we started off as a Media Agency, but we're not that anymore. We adapted, and now call ourselves the 'Agency of Next'. As the Agency of Next we deliver Marketing Transformations. We came to our brand positioning after asking our clients why they chose to work with us. Consistently they told us that it was because they trusted us more than anyone else, felt that the best place to be was by our side, and it was our ability to successfully adapt to the rapidly changing market that genuinely set us apart from the rest. Many of our clients have followed us from our previous agency and are still with us today, in many cases trusting in us for more than 15 years. There's something very special about the capabilities we have built and the way we combine them together. Our vision as Founders was that marketing success today is now digital-first and underpinned by Media that's optimised for attention, Creative that's specialist and 'fit-for-platform', and Data that's of the highest quality, enabling us to target audiences more accurately and measure performance more precisely. Over the past 7 years we have built the agency to have specialist expertise in each of these three 'Disciplines' - Media, Creative and Data - and by integrating them all under one roof we have created a one-stop-shop for clients making it smarter, faster and better to just use us.</p>
      </>
    ),
    cta: 'No compromises'
  },
  {
    title: 'A no-compromise choice.',
    content: (
      <>
        <p>Before launching Open Partners we came from a Network agency, and we set OP up to be a better alternative to our old employer for a certain type of client. The Network's business models - the likes of MediaCom, Dentsu, Havas, et al - whatever they might say, are designed to handle global accounts and those spending more than £20m per year. For mega clients like that the networks are a good choice, but the reality for clients who aren't spending that much is that they'll end up with a watered down solution which basically won't work. The networks integrate capabilities for their biggest clients by pulling people from teams and creating an 'agency in the agency', e.g. 'team P&G', but they can't afford to do that for more than 1 or 2 or their biggest clients, and the rest get a totally dysfunctional solution that doesn't unlock any of the benefits (efficiencies and effectiveness) of integration. We have built a business that delivers integration for every client regardless of size because our capabilities (strategy, search, social, programmatic, etc) are integrated at the point of use.The alternative to Networks for clients spending less than £20m per year is Independent agencies like us, of which there are many options, but all involve a compromise. All, that is, except us. As it stands today, other Independents are almost all polarised between Digital Performance and Traditional media specialists, and none offer fully integrated Data Management and Creative Production into their operating models like we do. So for clients spending less than £20m who want great performance and everything under one roof, we are the only 'no-compromise' option, and we see that as a MASSIVE gap in the market.</p>
      </>
    ),
    cta: 'Better for everyone'
  },
  {
    title: 'Set up to be "Better for Everyone".',
    content: (
      <>
        <p>At Open Partners we care as much about our Staff and our industry Partners as we do about our Clients. I say Partners very deliberately as I hate the word 'Suppliers'. It makes them seem below us, and they're not - we 100% wouldn't exist without them. So we have three equal stakeholder groups that we care deeply about; Our Clients, our Partners, and our People, and as Founders we set out to create an agency that's 'Better for everyone'. Better for our Clients, better for our Partners, and better for our People. We set up in this way because agencies are essentially businesses that are built on reputation and relationships, so it's pretty obvious that if EVERYONE we're dealing with is rooting for us that we'll create the biggest possible tail-wind to propel us forward. And that's what's happened. Since launch we've smashed it because we've focused equally on making our clients rave about us (meaning they won't move their accounts,  will appoint us wherever they go, and tell all their friends about us), our Partners call out how great we are to work with, and our People shout from the rooftops about what a fantastic place to work Open Partners is. The rest of this memo is all about that, describing what makes - and what it takes - to be one of those 'Open Partners'. Explaining how the people here work smarter, faster, and better than anyone else, leading our Clients and Partners to feel like there's no better agency in the world to be working with.</p>
      </>
    ),
    cta: 'Your goal at OP'
  },
  {
    title: 'Your goal at OP.',
    content: (
      <>
        <p>Your goal at Open Partners is to make your clients, your partners, and your colleagues love and respect you. That's the number one priority for every single member of staff here. To be better than any other person in the world for your clients, for your partners, and your colleagues. Our plan is obviously to become more profitable, to maintain our 50%+ headline revenue growth, and to outperform the competition, BUT they're just outputs. All are super important - but if your clients, your partners, and your colleagues love and respect you, the rest will follow automatically.</p>
      </>
    ),
    cta: 'Mindset monsters'
  },
  {
    title: 'We are mindset monsters.',
    content: (
      <>
        <p>Your goal at Open Partners is to make your clients, your partners, and your colleagues love and respect you. That's the number one priority for every single member of staff here. To be better than any other person in the world for your clients, for your partners, and your colleagues. Our plan is obviously to become more profitable, to maintain our 50%+ headline revenue growth, and to outperform the competition, BUT they're just outputs. All are super important - but if your clients, your partners, and your colleagues love and respect you, the rest will follow automatically.</p>
      </>
    ),
    cta: 'Full service people'
  },
  {
    title: 'You are a full service person.',
    content: (
      <>
        <p>As I've already mentioned, at Open Partners we do things differently; We do Media, Creative, and Data all perfectly packaged together, so if you're reading this, the expectation is that you are - or are dedicated to become - an expert in all three disciplines as quickly as possible. To become what we call a 'Full Service Person', with expertise across all of our agency Disciplines. For example, you might work in the Media Discipline - maybe in Paid Search - but your job (and what will set you apart) is that you are an expert in the Data and the Creative that delivers the best performance possible in that channel. It's not easy, which is why we provide  a) lots of time to train, and b) specific training for each person to become - and stay - a Full Service Person. It's critical that you use it. There is A LOT to learn, plus it's always changing, so first get on top of your training, and then improve your general 'information diet'. You're going to need both. At Open Partners you're in control, so consume information on a daily basis that will make you better at your job. Set up news feeds and block out time to read and contemplate what they mean for us, for our clients, and for our partners. Make sure the information you consume improves the way you think, and what you think will then improve the way you perform, guaranteed. The better your information diet, the better Full Service Person you'll become, and don't forget that regardless of how far you get with us, your training is never finished. </p>
      </>
    ),
    cta: 'Be professional'
  },
  {
    title: 'We are a professional services business, so be professional.',
    content: (
      <>
        <p>This stuff is bread and butter for us and it doesn't cost a thing. We're always on time. We're respectful. We're kind, and we're fair. We avoid gossip, offensive language, and inappropriate jokes. We communicate clearly, politely, effectively and use appropriate language and tone. We dress appropriately for the environment or occasion, and adhere to dress codes or norms with clients and partners. We're dependable by meeting deadlines, keeping commitments, and knowing that if you show up on time you're a few minutes late. We take pride in demonstrating expertise and skill in our field. We show a willingness to learn and adapt when needed. We maintain appropriate boundaries with colleagues and clients, avoid unprofessional relationships, and handle challenges calmly and constructively. We avoid drama or placing blame. We own our mistakes, correct them, and learn from them without deflecting responsibility. We follow ethical practices, including honesty, transparency, and adherence to rules or policies. We keep our personal emotions in check, even under pressure, and remain composed and courteous at all times. Humility isn't optional - it's foundational. Respect and courtesy aren't just for the boardroom; they extend to everyone you meet. Greet receptionists with the same warmth as you would a CEO. Learn everyone's name. Clean up after yourself - better yet, clean up after others. True character shows in the smallest actions, and it sets the tone for how we operate.  </p>
      </>
    ),
    cta: 'Be professional'
  }
];

// Preload images
const preloadImages = () => {
  const images = [
    handshakeGif,
    goalHero,
    monsterGif,
    personHero
  ];
  
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

function App() {
  const [page, setPage] = useState(0);
  const [fade, setFade] = useState(false);

  // Preload images on initial load
  useEffect(() => {
    preloadImages();
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
                style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                onLoad={(e) => e.target.style.opacity = 1}
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
                style={{ width: '100%', borderRadius: '20px', marginBottom: '-125px', opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                onLoad={(e) => e.target.style.opacity = 1}
              />
            </div>
          )}
          {page === 6 && (
            <div className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
              <img
                src={monsterGif}
                alt="Mindset Monster"
                style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                onLoad={(e) => e.target.style.opacity = 1}
              />
            </div>
          )}
          {page === 7 && (
            <div className="hero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '220px' }}>
              <img
                src={personHero}
                alt="Full service person"
                style={{ height: '500px', opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                onLoad={(e) => e.target.style.opacity = 1}
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
