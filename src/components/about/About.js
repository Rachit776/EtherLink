import React, { useEffect, useState } from "react";
import "./about.css";

const developers = [
  {
    username: "Rachit776",
    linkedin: "https://www.linkedin.com/in/rachitkumar776/",
    discord: "https://discord.com/users/479167760128278538", // replace with actual
    portfolio: "https://portfolio-rachit776s-projects.vercel.app/", // replace with your portfolio
    bio: "Hello, I'm Rachit Kumar Choudhary, a passionate web development enthusiast with strong problem-solving skills. I enjoy building dynamic web applications and continuously expanding my knowledge in modern web technologies.",
  },
];

function About() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDeveloper() {
      try {
        const dev = developers[0];
        const res = await fetch(`https://api.github.com/users/${dev.username}`);
        const data = await res.json();
        setProfile({
          ...data,
          linkedin: dev.linkedin,
          discord: dev.discord,
          portfolio: dev.portfolio,
          bio: dev.bio,
        });
      } catch (error) {
        console.error("Error fetching developer profile:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDeveloper();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "2rem" }}></div>;
  }

  return (
    <div className="about-container">
      <h2 className="about-title">EtherLink</h2>
      <div className="about-card hover-animate">
        <img
          src={profile.avatar_url}
          alt={`${profile.name || profile.login}'s avatar`}
          className="about-avatar"
        />
        <h3 className="about-name">{profile.name || profile.login}</h3>
        <div className="about-links">
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href={profile.discord} target="_blank" rel="noreferrer">
            <i className="fab fa-discord fa-2x"></i>
          </a>
        </div>
        <div className="about-bio">
          <p>{profile.bio || "No bio available."}</p>
        </div>
        <a
          href={profile.portfolio}
          target="_blank"
          rel="noreferrer"
          className="portfolio-button"
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
}

export default About;
