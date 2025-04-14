import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are <strong>VGM OFFICIALS</strong>, a dedicated esports organization focused on conquering the competitive BGMI scene. Our mission is to build a legacy of tactical brilliance and fearless gameplay.
        </p>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <div className="achievement-gallery">
          <img src="/assets/achievement1.jpg" alt="Achievement 1" />
          <img src="/assets/achievement2.jpg" alt="Achievement 2" />
          <img src="/assets/achievement3.jpg" alt="Achievement 3" />
        </div>
        <p>We have qualified for major tournaments, won local events, and gained recognition in the competitive community.</p>
      </section>

      <section className="goals">
        <h2>Future Goals</h2>
        <p>
          Our future goals include qualifying for national-level BGMI championships, growing our online content presence, and expanding the VGM family into other esports titles.
        </p>
      </section>
    </div>
  );
}

export default Home;