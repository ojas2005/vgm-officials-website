import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="about">
        <h2>About Us</h2>
        <p>
        We are <strong>VGM OFFICIALS</strong>, a passionate and dedicated esports organization relentlessly focused on conquering the competitive BGMI scene. With over five years of deep-rooted experience in the world of esports, we’ve evolved not just as players but as a powerful community striving for excellence. Our mission is clear — to build a legacy of tactical brilliance, fearless gameplay, and unbreakable team synergy.

At VGM OFFICIALS, we don’t just play the game — we live it. We are willing to work as hard as it takes, pushing every boundary to bring glory to our name. Our roster is filled with some of the most talented and driven individuals, whether it's in esports, content creation, strategy, design, or editing. Together, we form a powerhouse of creativity, dedication, and unstoppable passion.

As an ever-growing community, we take pride in nurturing raw talent, inspiring ambition, and supporting each other on and off the battlefield. Our vision is to elevate Indian esports to global stages, while creating a family-like environment where every gamer feels empowered and recognized.

Our ultimate goal is to make this community stronger, more connected, and full of opportunity — to become a hub where enthusiastic gamers, creators, and dreamers unite under one banner: VGM OFFICIALS.
        </p>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <div className="achievement-gallery">
          <img src="/assets/achievement1.jpg" alt="Achievement 1" />
          <img src="/assets/achievement2.jpg" alt="Achievement 2" />
          <img src="/assets/achievement3.jpg" alt="Achievement 3" />
        </div>
        <p>We have qualified for major national-level tournaments, emerged victorious in multiple local and regional events, and steadily gained respect and recognition within the competitive BGMI community. Our consistent performance, strategic gameplay, and relentless grind have made us a team to watch, earning shoutouts from well-known esports personalities and organizations. Each milestone we achieve fuels our hunger to go even further — to rise, compete, and dominate on bigger stages.
            Some of our major achievements are:
            <br></br>
            <br></br>
            Greater Noida LAN #1(Venue:-Shiv Nadar University)<br></br>
            Mathura LAN #1(Venue:- GLA University)<br></br>
            Chandigarh LAN #2(Venue:- Chandigarh University)<br></br>
            Jaipur lan #3(Venue:- JECRC Jaipur)<br></br>
            Esl 2024 R4<br></br>
            Skyesports championship 5.0 R4<br></br>
            BGIS R2(2024 and 2025) etc.<br></br>
            And we are willing to improve more

        </p>
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