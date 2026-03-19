import {
  churchImg,
  russImg,
  randolphImg,
  garyImg,
  hunterImg,
  nickImg,
  brettImg,
  jamieImg,
  kimImg,
  colinMarneshaImg,
  jesusImg,
  allenImg,
  gavinImg,
  lousinRoseanneImg,
  reginaMathiasImg,
  amandaImg,
  makaylaImg,
  edenImg,
  sarahImg,
  jordanImg,
  reginaImg,
} from "../assets/images";

const groups = [
  {
    label: "Pastors",
    members: [
      { name: "Rev. Russ Hopkins", role: "Pastor", photo: russImg },
      {
        name: "Rev. Randolph Smith",
        role: "Care Pastor & Mens Ministry Director",
        photo: randolphImg,
      },
    ],
  },
  {
    label: "Elders",
    members: [
      { name: "Rev. Gary Washington", role: "Elder", photo: garyImg },
      { name: "Hunter Hopkins", role: "Elder", photo: hunterImg },
      {
        name: "Nick Henry",
        role: "Elder / Worship Leader",
        photo: nickImg,
      },
      {
        name: "Brett Whitney",
        role: "Elder / Sunday School Director",
        photo: brettImg,
      },
    ],
  },
  {
    label: "Ministry Directors",
    members: [
      {
        name: "Rev. Jamie Hopkins",
        role: "Womens Ministry Director",
        photo: jamieImg,
      },
      { name: "Kim Meek", role: "Kids Ministry Director", photo: kimImg },
      {
        name: "Colin & Marneisha Loughman",
        role: "Floodgates Kids Leaders",
        photo: colinMarneshaImg,
      },
      { name: "Jesus Vargas", role: "Media Ministry", photo: jesusImg },
      { name: "Allen McPherson", role: "Media Ministry", photo: allenImg },
      { name: "Gavin Todd", role: "Prayer Ministry", photo: gavinImg },
      {
        name: "Louis & Roseanne Richardson",
        role: "Usher Ministry",
        photo: lousinRoseanneImg,
      },
      {
        name: "Matthias & Regina Breyer",
        role: "Events & Hospitality",
        photo: reginaMathiasImg,
      },
      { name: "Amanda McPherson", role: "Nursery", photo: amandaImg },
    ],
  },
  {
    label: "Kids Ministry Leaders",
    members: [
      { name: "Makayla Hopkins", role: "Jr Kids", photo: makaylaImg },
      { name: "Eden Loughman", role: "Jr Kids", photo: edenImg },
      { name: "Sarah Vargas", role: "Gods Girls 8–12", photo: sarahImg },
      {
        name: "Jordan Hopkins",
        role: "Gods Girls 13–18",
        photo: jordanImg,
      },
      {
        name: "Regina Washington",
        role: "Jr Kids Sunday School",
        photo: reginaImg,
      },
    ],
  },
];

export default function Leadership() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div
          className="about-hero-bg leadership-hero-bg"
          style={{ backgroundImage: `url(${churchImg})` }}
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">The Floodgates Church</p>
          <h1 className="about-hero-title">Leadership</h1>
          <div className="about-hero-line" />
        </div>
      </section>

      {/* Intro */}
      <section className="beliefs-intro section-dark">
        <div className="beliefs-intro-inner">
          <p className="beliefs-intro-text">
            Our leadership team is dedicated to serving this congregation and
            community with humility, love, and purpose.
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="leadership-section section-dark">
        <div className="leadership-container">
          {groups.map((group) => (
            <div key={group.label} className="leadership-group">
              <div className="leadership-group-header">
                <span className="leadership-group-label">{group.label}</span>
                <div className="leadership-group-line" />
              </div>
              <div className="leadership-grid">
                {group.members.map((member) => (
                  <div key={member.name} className="leader-card">
                    <div className="leader-photo-wrap">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="leader-photo"
                      />
                    </div>
                    <div className="leader-info">
                      <h3 className="leader-name">{member.name}</h3>
                      <p className="leader-role">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
