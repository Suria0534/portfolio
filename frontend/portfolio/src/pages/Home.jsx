// import DeveloperOrbit from '../components/DeveloperOrbit';

// function Home() {
//   return (
//     <section className="hero container" id="home">
//       <div>
//         <p className="home-kicker">
//   <span>hello</span>
//   <span>i</span>
//   <span>am</span>
// </p>

// <h1 className="home-name">Suraiya Sultana</h1>
//         <p className="identity-line"><span className="identity-dot" /> Software engineer · she / her</p>
//         <p className="hero-intro">
//           A woman in tech who turns complex ideas into clear, useful and
//           memorable digital experiences.
//         </p>
//         <div className="hero-actions">
//           <a href="#projects" className="button button-dark">Explore selected work <span aria-hidden="true">↗</span></a>
//           <a href="#about" className="button button-soft">More about me</a>
//         </div>
//       </div>

//       <div className="hero-visual-wrap" aria-label="Developer illustration">
//         <div className="hero-art">
//           <div className="art-grid" />
//           <div className="art-stamp">SURAIYA<br />DIGITAL STUDIO</div>
//           <DeveloperOrbit />
//           <div className="art-badge"><strong>01</strong><br />curious by default</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;



import DeveloperOrbit from '../components/DeveloperOrbit';

function Home() {
  return (
    <section className="hero container" id="home">

      {/* LEFT SIDE - TEXT CONTENT */}
      <div className="hero-copy">

        {/* Hello I Am Animation */}
        <p className="home-kicker">
          <span>Hello</span>
          <span>I</span>
          <span>am</span>
        </p>

        {/* Animated Name */}
        <h1 className="home-name">
          Suria Sultana
        </h1>

        {/* Identity */}
        <p className="identity-line">
          <span className="identity-dot"></span>
          Software engineer 
        </p>

        {/* Introduction */}
        <p className="hero-intro">
          A woman in tech who turns complex ideas into clear, useful and
          memorable digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="button button-dark">
            Explore selected work
            <span aria-hidden="true">↗</span>
          </a>

          <a href="#about" className="button button-soft">
            More about me
          </a>
        </div>

      </div>

      {/* RIGHT SIDE - DEVELOPER ILLUSTRATION */}
      <div
        className="hero-visual-wrap"
        aria-label="Developer illustration"
      >
        <div className="hero-art">

          <div className="art-grid"></div>

          <div className="art-stamp">
            SURIA SULTANA
            <br />
            {/* DIGITAL STUDIO */}
          </div>

          <DeveloperOrbit />

          {/* <div className="art-badge">
            <strong>01</strong>
            <br />
            curious by default
          </div> */}

        </div>
      </div>

    </section>
  );
}

export default Home;
