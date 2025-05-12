import React, { useState, useEffect } from 'react';
import './App.css';
import BirdIcon from './BirdIcon';
import SimpleDiamond from './SimpleDiamond';
import handshakeGif from './assets/handshake.gif';
import goalHero from './assets/hikers.jpg';
import monsterGif from './assets/monster2.gif';
import personHero from './assets/person.jpg';
import passionHero from './assets/passion.jpg';
import profeshHero from './assets/profesh.jpg';
import arrowsHero from './assets/arrows.jpg';
import commsHero from './assets/comms.jpg';
import prepHero from './assets/prep.jpg';
import prezzoHero from './assets/prezzo.jpg';
import binary from './assets/binary.jpg';
import easy from './assets/easy.jpg';
import winning from './assets/winning.jpg';

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
        <p>It's our mindset above anything else that defines people at OP, and what sets us apart as a collective. Maintaining that mindset across the agency, as we grow, is vital to our ongoing success. We've found that in this world there are three types of mindset that lead to very different ways of showing up and contributing. This results in A-Players, B-Players, and C-Players. At Open Partners we only have room only for A-Players, and B-Players who will become our A-Players of the future. A-Players are meticulous, precise, coachable, intelligent, learn from their mistakes, avoid excuses, believe in our potential, and excel as the best in their field. A-Players know what excellence is, and they apply it to everything they do. B-Players are the A-Players of the future. They are new and require training to become A-Players, which we are committed to doing. They are hungry to grow, value feedback and are willing to put in the work to make progress. C-Players, while competent, aren't exceptional - they do the minimum, lack drive, and don't prioritise growth for themselves, their clients, or their partners. C-Players take the easy option, they miss opportunities to innovate, harm the team dynamic, and should be transitioned out promptly with appropriate support to ease their exit. A-Players are what have made this business what it is today. They are committed to excellence, have a 'win at all costs' mentality, leave their egos at the door, and focus on teamwork to get where they want to be. These people dedicate themselves to work, and being the best at their job is a huge part of their personal identity. They feel like they've never arrived, they are not content with the status quo, and are always focused on whatever comes 'next'. Now we know that not everyone is like that - the vast majority of people aren't - but at Open Partners, that's us, a leadership business made up of A-Players whose clients and partners look to us to tell them what they should do next.</p>
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
    cta: 'Have passion'
  },
  {
    title: 'A passion for who we are, what we do, and who we work with.',
    content: (
      <>
        <p>Whilst clients expect professionalism, it's our passion that moves them. Lots of businesses are professional, but very few combine it with genuine passion like we do. Successful people at Open Partners are genuinely passionate about what they and we do. That passion is almost impossible to fake, and it's the emotion above any other that makes people 'feel'. The old adage really is true - people may not remember exactly what you said, but they will remember how you made them feel. Passion shows you're all in, and that you believe. It's contagious, it's exciting and it's memorable. It starts with being passionate about us. About Open Partners, who we are, and what we do. Knowing and being passionate about why we're different and better. Do you? Can you recite our mission, our purpose, and our values? What's our agency origin story? Who was our first client? What's been our most recent pitch? What's your favourite case study and why? Why are we smarter, faster and better than any other agency on the planet? That goes for our clients too. Pretty much every person at Open Partners works on clients, so if you're working on a client, you need to be as passionate about their business as you are about ours. That starts with reading our pitch that won the account, and our most recent quarterly review to that client. What's the story? What are we trying to achieve? How are we getting on? Then you need to do more. Being passionate means you always go the extra mile, so leaders at OP go to their client's stores, visit their websites, download their apps, buy their products, and generally experience their business as potential consumers would. They put themselves in their client's and their client's customer's shoes, and prioritise getting a strong opinion about improvement. They ask themselves, "if this was my business what would I do", and take pride in being the person who is the catalyst for making those changes happen. If they're not the target audience, they'll know someone who is, and they'll ask them. They do the same with their client's competitors, and know the difference for themselves. They live and breathe it. As I've already said, at Open Partners your time is your own, and I want you to use it. You're in control. So work from your client's or partner's offices. Visit their stores. You can't do your job properly unless you're 'in it', so show everyone you are.</p>
      </>
    ),
    cta: '24/7 results'
  },
  {
    title: 'We are a 24/7 results business ',
    content: (
      <>
        <p>The work we do at Open Partners is 'on' 24/7. Sometimes things go wrong and stuff needs fixing, and waiting until tomorrow morning isn't an option. Sometimes things happen that are out of our control and we have to react. Opportunities knock, and taking them before anyone else is what Open Partners is all about, regardless of when it is. Pitches happen, sometimes more than one at the same time, and our job isn't done until the job is done. We pride ourselves on being faster, more agile, and more committed than any of our competitors. What I'm saying is that if you work for Open Partners and want to grow with us, you're going to be ok being 'on call'. Now that doesn't mean that you'll always BE called. If people are doing the stuff I'm saying in this note it should be pretty rare that things go wrong.  If you are working weekends consistently you need to have a look around and ask whether the people around you are also the A-people like you. People who take ownership who don't watch the clock. Who know what the job is, and will do whatever it takes to get it done. Who understand their priorities, who are protective about their relationships with their clients and partners, have a razor-sharp focus on the outcomes they're responsible for, and are always vigilant about whatever's coming 'next'. They focus hard on their own personal and professional growth, and they don't get distracted. With this type of person you don't need to tell them when or where to work. All they care about is the right outcome, and they never shirk responsibility or hide. It's for that reason that from the start at Open Partners we decided we would never tell people where or when they needed to work. We're a results business that's been built on trust; our clients trust us to deliver, and we do the same with our staff. In our business, outcomes are all that matter. At Open Partners, I guarantee that you will be judged 100% based on results, not hours. Your clients and colleagues will love you if you take responsibility, get it done, and then put your hand up to do more. We're really not interested in presenteeism, and whilst grind shows you care and we appreciate it, if you can get the outcomes needed without grinding, do it. We're into smart before hard, but both are what almost guarantee success. So stop talking and start doing. Deliver results now, and refine the process later. We thrive when we're agile, and action is our lifeblood. Bureaucracy? It's a slow poison we refuse to tolerate. Yes, processes have their place, but they must be simple, efficient, and never mistaken as the goal in and of themselves. Ruthless prioritisation is what separates the impactful from the irrelevant. When priorities are set, nothing - and I mean nothing - should derail you. Distraction is the silent assassin of progress. So shut off the noise. Turn off alerts. Keep your phone on for emergencies, but focus your energy on what truly matters. </p>
      </>
    ),
    cta: 'Do it right'
  },
  {
    title: 'We are a communications business, and we do it right.',
    content: (
      <>
        <p>We're still mainly a remote business, and we're not planning on changing that anytime soon. It's been one of our superpowers, as it means we can access talent wherever it is, and also keep our costs low and our rates competitive. We don't need to charge our clients for our massive offices - we don't have them! But remote businesses have their own unique set of challenges, specifically around communication. In a remote business it's easy to communicate badly. Either not at-all - which is the worst - or only marginally better by diarising meeting after meeting of 'check-ins' which leave you no better off than when you arrived. So constant communication and extreme ownership are what we do here. You don't get to brief work in and set a reminder in 5 days and not talk to them for 5 days. If it's your responsibility, it's your responsibility. Don't leave room for error. Check in daily, and know weeks in advance if there's a problem. Not days. When communicating with each-other, use higher forms of communication. Slack and Email ain't it. Real life is. The lower the form of communication the more miscommunication you will face. As I'm typing this you have no idea if I'm laughing, smiling, happy, or sad. You can't read my body language or my face, and because of that it's not guaranteed that you'll understand what I'm conveying. Need a drink order for a meeting? A Slack message is probably fine for that. One week out from a pitch and the thing you are working on just went south? Minimum a multi-way call with the heads of the pitch. Ideally grab them in real life. We have multiple offices that are there 100% for this kind of thing, so use them. The higher the complexity of what needs to be said, the higher the form of the communication you should use. Call first then text if they don't answer. If a colleague, client or supplier calls you, answer it. If they email you, acknowledge it, even if you don't have the answer yet. If they Slack, text, or Whatsapp you, read it and respond, even if you don't have the answer yet. Show them you're on it. Give them a 'yes chef' (you don't actually have to say that!), and do it straight away. Don't leave anyone hanging. Since we are on the topic of communication, written communication also does not constitute communication unless they confirm they read it! Always respect communication lines. There is always someone responsible for everything, and if multiple people are responsible for the same thing, then that's a problem and needs to be fixed immediately. When communicating across departments you go up and then over, don't go directly across. It will mean that no-one knows that's going on!</p>
      </>
    ),
    cta: 'Prepare!'
  },
  {
    title: 'Preparation is everything.',
    content: (
      <>
        <p>If you turn up to a meeting without an opinion, an idea, a solution, or generally have nothing to say, don't bother. Because if you don't, other people will feel like it's ok to be a passenger too. Psychology is contagious, so show everyone else you've prepared. Be the example you want to set. Put in a long shift weeks before the meeting so you don't have to in the days before the meeting. Use every tool at your disposal to prepare brilliantly. AI and outside experts are hacks for this, so don't reinvent the wheel when someone else has the right answers or has been in the situation you're in before. Hack faster solutions and prepare better. The smartest people leverage others' expertise, so be one of them. Demand a good brief, re-read it, decide what your angle is, script specifically what you're going to say, predict the challenges you're going to face, and practice practice practice. Great prep shows you really are the best at what you do, but more than that, it shows you're bang up for it. It's where your passion comes through. So build in buffers, give yourself room to breathe, and prepare better than anyone else in that room.  It's harder to be nervous before a meeting when you know you've prepared brilliantly.</p>
      </>
    ),
    cta: 'Every slide counts'
  },
  {
    title: 'Presentations make meetings, and meetings make growth.',
    content: (
      <>
        <p>Every meeting you run is a show, and every show needs a script. That's what a presentation is. Every presentation is a script, and every one without exception has to be exciting. That means every slide has to count. It might sound like an exaggeration, but our business has been built on knockout slide decks. Beautiful, elegant slide decks that tell compelling business stories built on crisp insights with killer recommendations. I have a 'no dull slide rule'. When I get a killer deck that looks great, tells a great business story, including rock solid insights, great ideas, and clear, actionable recommendations, I get excited. I guarantee our clients do too. People who have been here for a while know that I have extremely high standards when it comes to slide decks, and it's because I know that it's those that have been the foundation of making our business successful. Each great presentation is like a foundation stone. "That's the best presentation I've ever seen" has been a common remark from clients since we started, and that's what you need to aim for every time. Why? Because great presentations live on forever. They make our clients and partners feel something, and can be used as rally points, and adapted for other clients, so that we can be better than we were yesterday. The best presentations are the foundation for the best meetings. Of the best meeting performances. Build a great deck, and - as long as you created it yourself and know the content inside-out - you're almost guaranteed to deliver a great meeting performance. Alongside great decks, the other thing that will deliver a guaranteed amazing meeting is if you ask amazing questions. Great questions not only show that you're a great listener, they also show that you get it, so make sure you ask at least one killer question in every meeting. Great performances lead to impressed clients, and impressed clients lead to trust, confidence, investment, growth, and love.</p>
      </>
    ),
    cta: 'Reviews and proposals'
  },
  {
    title: 'Our presentations are binary.',
    content: (
      <>
        <p>We only have two types of presentation; Reviews, and Proposals. Reviews are about assessing performance versus meaningful benchmarks, identifying strengths, weaknesses, opportunities and threats, and deriving actionable insights for the future. Proposals are the documentation of our ideas to hit the client's objectives, and include costs, measurable benefits, timings, and stakeholders. We don't produce anything other than Reviews and Proposals at Open Partners. Reviews feed Proposals, and Proposals feed Reviews, and the story you tell, and the way you tell it, is 100% based on your audience. The good news is that all of our clients are pretty similar - Performance Marketers looking to us to accelerate performance - so give it to them! Remember that the reason our clients work with us is simple - to accelerate their growth and make them look good. We only grow if they do, so let that be the foundation of every single presentation you do.</p>
      </>
    ),
    cta: 'Being Open isn\'t easy'
  },
  {
    title: 'Being Open isn\'t easy.',
    content: (
      <>
        <p>At Open Partners our collective ambition is bigger than anyone else's, and that's why our path to becoming iconic has already begun. Our positioning is perfect, and our headroom is almost limitless, but Open Partners isn't a comfort zone. If you're in yours, it's a sign something needs to change. This is the front line, and we are a group of people who identify with going all in and being more comfortable in discomfort than anyone else. Growth comes from sorting out the stuff that's wrong, not patting ourselves on the back for the stuff we've done right, so we make a point of saying the negatives fast and loud. We don't just tell people on our team why something is good. It's infinitely more valuable to tell each-other why it's not good. I'd rather you guys be honest with each other than nice to each other. It's not personal. Our resilience comes from taking knocks, making mistakes, and coming back from them. It doesn't come from talking to each-other about how hard things are. Every day we move fast, break things, take punishment, and pivot, and every day it's making us stronger, not weaker. Change is our business, and adapting is what we do. Change is hard, but we love it, and mistakes are the fuel of improvement. Mistakes aren't just acceptable - they're necessary! Mistakes are proof you're pushing boundaries and taking risks, and that's what we're all about. But learning from them is non-negotiable. We will never punish mistakes, but repeat mistakes show you're not learning, so please don't do that.</p>
      </>
    ),
    cta: 'Winning'
  },
  {
    title: "How to know you're winning.",
    content: (
      <>
        <p>So the things that matter to us above everything else are client, partner, and colleague delight. Nail those and everything else that's good follows - retained clients, walk-in referrals, special access and generally huge and positive tail-winds. Relationships are your lifeline. Your clients, partners and colleagues are your critical components, and protecting those relationships is non-negotiable. Build trust, stay upstream, and anticipate their needs before they know them themselves. Your ability to connect and collaborate defines your value. So be a pleasure to work with. Make things easy - so easy that working with you feels like a relief. Don't burden clients, suppliers or colleagues with unnecessary tasks. Make yourself more responsible. For instance, if you need a briefing form, don't make them fill it out. You do the heavy lifting. Target getting messages of thanks as your main KPI. Receiving Christmas Cards. Getting wedding invites. A 'wow' note to Elliot, Michael or I. Long-term success is built on rock solid personal connections, and those are built on consistently strong delivery. Their satisfaction is your job, and their loyalty beyond their current job will be your reward. The people you deal with are your contacts, not the businesses they work for, and if you build and nurture the relationships with them right they will last for your whole career. So be dynamic, be funny, and tackle the hard topics head-on. Never sell to people, but give them solutions to their problems. Pre-empt problems they're going to face, and solve them before they happen. Make everyone around you look fantastic. Make them happy. If you do, you'll be impossible to replace, and so will we.</p>
      </>
    ),
    cta: 'Sign off'
  },
  {
    title: 'Final note',
    content: (
      <>
        <p>So, thanks for reading. There's a lot there, and some of it might seem quite intense. It's supposed to. We are intense here. We are a high-growth business and we're always looking forward. We need more leaders in the company. More A-Players. People who are passionate, coachable, intelligent, and driven, that can step up and take some of our leadership spots over the coming years.</p>
        <p>Every single department has an opportunity for you to grow in, and you're in luck because we don't save things up for yearly reviews, we give on the job feedback so you can improve as you go. Progress doesn't follow a calendar. If you want to become a Senior Partner, tell us, and ask why you're not good enough, and ask how you can become better.</p>
        <p>We deeply believe in rewarding the people that help this business get where it needs to be.</p>
        <p>This isn't a bureaucratic corporate company. You don't have to do something for 5 years to get a promotion. The more responsibility you take, the more risk you help us navigate, and the more indispensable you are, the more you will lead OP. That obviously means more money, but it also means more purpose, and more stories to tell.</p>
        <p>If you want more of any of that we will gladly help train you to receive it. There is infinite room for you to grow here. This isn't a stepping stone, this is your final destination.</p>
        <p>We will win and we are going to build something truly amazing. I see a world where this company sets the marketing agenda, and it's the legacy we will leave that really matters. Your opportunity is to not just be a part of it, but to lead it.</p>
        <p>I want nothing more than for you to go all in, dedicate every day to becoming indispensable, and to make your clients, partners and colleagues love you.</p>
        <p>It's time for 'next' - make that be you.</p>
      </>
    ),
    cta: 'Sign off'
  }
];

// Preload images
const preloadImages = () => {
  const images = [
    handshakeGif,
    goalHero,
    monsterGif,
    personHero,
    passionHero,
    profeshHero,
    arrowsHero,
    commsHero,
    prepHero,
    prezzoHero
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
          {page === 8 && (
            <div
              className="hero"
              style={{
                minHeight: '220px',
                backgroundImage: `url(${profeshHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '30px'
              }}
            >
              <h2 style={{
                color: 'white',
                marginTop: '80px',
                borderRadius: '10px',
                padding: '0.5em 1em',
                margin: 0,
                position: 'relative',
                zIndex: 2
              }}>{pages[page].title}</h2>
            </div>
          )}
          {page === 9 && (
            <div
              className="hero"
              style={{
                minHeight: '320px',
                backgroundImage: `url(${passionHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <svg width="135" height="130" viewBox="0 0 135 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="rocket-bg-icon">
                <path d="M135 130H134.399C131.62 116.307 119.514 106 105 106H60C43.4315 106 30 92.5685 30 76V30C30 13.4315 16.5685 0 0 0H135V130Z" fill="#d2c9a4" />
              </svg>
            </div>
          )}
          {page === 10 && (
            <div
              className="hero"
              style={{
                minHeight: '420px',
                backgroundImage: `url(${arrowsHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '10px'
              }}
            />
          )}
          {page === 11 && (
            <div
              className="hero"
              style={{
                minHeight: '420px',
                backgroundImage: `url(${commsHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '10px'
              }}
            />
          )}
          {page === 12 && (
            <div
              className="hero"
              style={{
                minHeight: '420px',
                backgroundImage: `url(${prepHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '10px'
              }}
            />
          )}
          {page === 13 && (
            <div
              className="hero"
              style={{
                minHeight: '420px',
                backgroundImage: `url(${prezzoHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '10px'
              }}
            >
              <svg width="135" height="130" viewBox="0 0 135 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="rocket-bg-icon">
                <path d="M135 130H134.399C131.62 116.307 119.514 106 105 106H60C43.4315 106 30 92.5685 30 76V30C30 13.4315 16.5685 0 0 0H135V130Z" fill="#fedeab" />
              </svg>
            </div>
          )}
          {page === 14 && (
            <div
              className="hero"
              style={{
                minHeight: '420px',
                backgroundImage: `url(${binary})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '10px'
              }}
            >
            </div>
          )}
          {page === 15 && (
            <div
              className="hero"
              style={{
                minHeight: '420px',
                backgroundImage: `url(${easy})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '10px'
              }}
            >
            </div>
          )}
          {page === 16 && (
            <div
              className="hero"
              style={{
                minHeight: '420px',
                backgroundImage: `url(${winning})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right -50px center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                borderRadius: '25px',
                marginBottom: '0px'
              }}
              >
                <svg width="135" height="130" viewBox="0 0 135 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="rocket-bg-icon">
                  <path d="M135 130H134.399C131.62 116.307 119.514 106 105 106H60C43.4315 106 30 92.5685 30 76V30C30 13.4315 16.5685 0 0 0H135V130Z" fill="#2c609b" />
                </svg>
            </div>
          )}
          {page === 17 && (
            <div className="hero">
              <RocketBgIcon />
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
