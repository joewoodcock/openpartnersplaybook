import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import './Diamond.css';

gsap.registerPlugin(MorphSVGPlugin);

const Diamond = () => {
  const containerRef = useRef(null);
  const mainSVGRef = useRef(null);
  const neonGroupRef = useRef(null);
  const wholeDiamondGroupRef = useRef(null);

  useEffect(() => {
    const select = (s) => document.querySelector(s);
    const selectAll = (s) => document.querySelectorAll(s);
    const container = containerRef.current;
    const mainSVG = mainSVGRef.current;
    const neonGroup = neonGroupRef.current;
    const wholeDiamondGroup = wholeDiamondGroupRef.current;

    const facetMPath = 'M299,166 L299,244.9,299,435';
    const facetLPath = 'M202,165.5 L140,244.5,300,435';
    const facetRPath = 'M300,435 L460,244.5,398,165.5';

    const facetL = select('#facetL');
    const facetR = select('#facetR');
    const lineMoveL0 = select('#lineMoveL0');
    const lineMoveLRev0 = select('#lineMoveLRev0');
    const lineMoveR0 = select('#lineMoveR0');
    const lineMoveRRev0 = select('#lineMoveRRev0');
    const lineMoveL1 = select('#lineMoveL1');
    const lineMoveRRev1 = select('#lineMoveRRev1');
    const lineMoveR1 = select('#lineMoveR1');

    const sparkleArr = [];
    let sparkleCount = 0;
    let updateCount = 0;
    const updateCountMax = 200;

    // Center the container
    gsap.set(container, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      xPercent: -50,
      yPercent: -50
    });

    gsap.set('svg', { visibility: 'visible' });

    const mainTl = gsap.timeline();

    const l0 = gsap.timeline({ repeat: -1, onUpdate: mainRepeat });
    l0.to(lineMoveL0, 2, {
      morphSVG: { shape: facetLPath },
      ease: 'none'
    });

    const l1 = gsap.timeline({ repeat: -1 });
    l1.to(lineMoveL1, 2, {
      morphSVG: { shape: facetLPath },
      ease: 'none'
    });

    const r0 = gsap.timeline({ repeat: -1 });
    r0.to(lineMoveR0, 2, {
      morphSVG: { shape: facetMPath },
      ease: 'none'
    });

    const r1 = gsap.timeline({ repeat: -1 });
    r1.to(lineMoveR1, 2, {
      morphSVG: { shape: facetMPath },
      ease: 'none'
    });

    // Reverse animations
    const lRev0 = gsap.timeline({ repeat: -1 });
    lRev0.to(lineMoveLRev0, 2, {
      morphSVG: { shape: facetMPath },
      ease: 'none'
    });

    const lRev1 = gsap.timeline({ repeat: -1 });
    lRev1.to(lineMoveLRev1, 2, {
      morphSVG: { shape: facetMPath },
      ease: 'none'
    });

    const rRev0 = gsap.timeline({ repeat: -1 });
    rRev0.to(lineMoveRRev0, 2, {
      morphSVG: { shape: facetRPath },
      ease: 'none'
    });

    const rRev1 = gsap.timeline({ repeat: -1 });
    rRev1.to(lineMoveRRev1, 2, {
      morphSVG: { shape: facetRPath },
      ease: 'none'
    });

    const rShrink = gsap.timeline({ repeat: -1, yoyo: true });
    rShrink.to(facetR, 0.5, {
      morphSVG: { shape: '#facetRShrink' },
      ease: 'none'
    })
    .to('#facetTop', 0.5, {
      attr: { x2: '-=10' },
      ease: 'none'
    }, '-=0.5')
    .to('#horizontalFacet', 0.5, {
      attr: { x2: '-=10' },
      ease: 'none'
    }, '-=0.5');

    const lShrink = gsap.timeline({ repeat: -1, yoyo: true });
    lShrink.to(facetL, 0.5, {
      morphSVG: { shape: '#facetLShrink' },
      ease: 'none'
    })
    .to('#facetTop', 0.5, {
      attr: { x1: '+=10' },
      ease: 'none'
    }, '-=0.5')
    .to('#horizontalFacet', 0.5, {
      attr: { x1: '+=10' },
      ease: 'none'
    }, '-=0.5');

    mainTl.add(lShrink, 0);
    mainTl.add(rShrink, 1);
    mainTl.add(l0, 0);
    mainTl.add(l1, 1);
    mainTl.add(r0, 0);
    mainTl.add(r1, 1);
    mainTl.add(lRev0, 0);
    mainTl.add(lRev1, 1);
    mainTl.add(rRev0, 0);
    mainTl.add(rRev1, 1);

    mainTl.seek(30);
    mainTl.timeScale(1);

    // Create sparkles
    for (let i = 0; i < 10; i++) {
      const sparkleTl = gsap.timeline({ paused: true });
      const sparkle = select('#sparkle').cloneNode(true);
      neonGroup.appendChild(sparkle);
      gsap.set(sparkle, {
        rotation: randomBetween(0, 45),
        transformOrigin: '50% 50%'
      });

      sparkleTl.fromTo(sparkle.getElementsByTagName('line'), 0.7, {
        drawSVG: '-1% -1%',
        strokeWidth: 6,
        ease: 'none'
      }, {
        drawSVG: '30% 80%',
        strokeWidth: 4,
        ease: 'none'
      })
      .to(sparkle.getElementsByTagName('line'), 1, {
        drawSVG: '101% 101%'
      })
      .to(sparkle.getElementsByTagName('line'), 0.8, {
        alpha: 0,
        ease: 'power2.in'
      }, '-=1')
      .fromTo(sparkle.getElementsByTagName('circle'), 3, {
        attr: { r: 0 }
      }, {
        attr: { r: 30 },
        ease: 'sine.inOut'
      }, '-=1.8')
      .to(sparkle.getElementsByTagName('circle'), 1, {
        alpha: 0,
        ease: 'power1.in'
      }, '-=1.8');

      sparkleTl.timeScale(1.3);
      sparkleArr.push({ el: sparkle, tl: sparkleTl });
    }

    function mainRepeat() {
      updateCount++;
      if (updateCount % 32 === 0) {
        const initX = randomBetween(220, 420);
        const initY = randomBetween(150, 260);

        gsap.fromTo(sparkleArr[sparkleCount].el, 2, {
          x: initX,
          y: initY,
          rotation: sparkleArr[sparkleCount].el._gsTransform.rotation
        }, {
          x: initX - 150,
          rotation: sparkleArr[sparkleCount].el._gsTransform.rotation + 360,
          ease: 'none'
        });
        sparkleArr[sparkleCount].tl.play(0);

        sparkleCount++;
        if (sparkleCount >= sparkleArr.length) {
          sparkleCount = 0;
        }

        if (updateCount > updateCountMax) {
          updateCount = 0;
        }
      }
    }

    function randomBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return () => {
      mainTl.kill();
      sparkleArr.forEach(sparkle => sparkle.tl.kill());
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <svg className="mainSVG" width="600px" height="600px" viewBox="0 0 600 600" ref={mainSVGRef}>
        <defs>
          <g id="sparkle" stroke="#FFF" strokeLinecap="round">
            <line fill="none" strokeWidth="6" x1="39" y1="38.8" x2="39" y2="64.5"/>
            <line fill="none" strokeWidth="6" x1="39" y1="38.8" x2="39" y2="13"/>
            <line fill="none" strokeWidth="6" x1="39" y1="38.8" x2="65" y2="38.8"/>
            <line fill="none" strokeWidth="6" x1="39" y1="38.8" x2="13" y2="38.8"/>
            <circle fill="none" strokeWidth="0" strokeLinecap="round" strokeMiterlimit="10" cx="39" cy="38.8" r="30"/>
          </g>
          
          <filter id="glow" y="-50%" height="180%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="neon" y="-50%" height="180%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="6"/>
            <feGaussianBlur stdDeviation="6 6" result="coloredBlur"/>
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.41"/>
              <feFuncG type="table" tableValues="0.71"/>
              <feFuncB type="table" tableValues="1"/>
              <feFuncA id="dropFlicker" type="linear" slope="0.6"/>
            </feComponentTransfer>
            <feComposite in="SourceGraphic" operator="over"/>
          </filter>
          
          <filter id="drop" x="-150%" y="-150%" width="280%" height="280%">
            <feGaussianBlur id="gblur" in="offOut" stdDeviation="23" result="blur"/>
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.21"/>
              <feFuncG type="table" tableValues="0.31"/>
              <feFuncB type="table" tableValues="1"/>
              <feFuncA id="dropFlicker" type="linear" slope="1"/>
            </feComponentTransfer>
            <feComposite in="SourceGraphic" operator="over"/>
          </filter>
        </defs>
        
        <g className="wholeDiamondGroup" ref={wholeDiamondGroupRef}>
          <g className="revGroup" opacity="0.05" stroke="#ddeeFF" strokeLinecap="round" strokeWidth="6" fill="none">
            <polyline id="lineMoveLRev0" points="202,165.5 140,244.5 300,435"/>
            <polyline id="lineMoveLRev1" points="202,165.5 140,244.5 300,435"/>
            <polyline id="lineMoveRRev0" strokeMiterlimit="10" points="299,166 299,244.9 299,435"/>
            <polyline id="lineMoveRRev1" strokeMiterlimit="10" points="299,166 299,244.9 299,435"/>
          </g>
          
          <g className="neonGroup" filter="url(#neon)" ref={neonGroupRef}>
            <g className="frontGroup" stroke="#ddeeFF" strokeLinecap="round" strokeWidth="6" fill="none" filter="url(#drop)">
              <line id="facetTop" strokeMiterlimit="10" x1="202" y1="165" x2="398" y2="165"/>
              <polyline id="facetM" stroke="none" strokeMiterlimit="10" points="299,166 299,244.9 299,435"/>
              <polyline id="facetR" points="300,435 460,244.5 398,165.5"/>
              <polyline id="facetRShrink" stroke="none" strokeMiterlimit="10" points="300,435 450,244.5 388,165.5"/>
              <polyline id="facetL" points="202,165.5 140,244.5 300,435"/>
              <polyline id="facetLShrink" stroke="none" strokeMiterlimit="10" points="212,165.5 150,244.5 300,435"/>
              <polyline id="lineMoveL0" points="299,166 299,244.9 299,435"/>
              <polyline id="lineMoveL1" points="299,166 299,244.9 299,435"/>
              <polyline id="lineMoveR0" points="300,435 460,244.5 398,165.5"/>
              <polyline id="lineMoveR1" points="300,435 460,244.5 398,165.5"/>
              <line id="horizontalFacet" x1="140" y1="245" x2="460" y2="245"/>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Diamond; 