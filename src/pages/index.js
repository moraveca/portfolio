import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/sportsChat.gif';
// import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/Flock-transparent.png';
import pic5 from '../assets/images/hangman.png';
import pic6 from '../assets/images/burger.gif';
import pic7 from '../assets/images/crystal.png';
import pic8 from '../assets/images/lakeBanner.png';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Adrian</strong>
              <br />
              a Full Stack Web Developer
            </h2>
            <p>See some projects I've worked on.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Here's some projects I've worked on:
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://sleepy-dusk-14317.herokuapp.com/" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Sports Chat</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://moraveca.github.io/giphy_app/" className="image fit">
                  <img src="https://media.giphy.com/media/xVropKV7bfh0A/giphy.gif" alt="" />
                </a>
                <header>
                  <h3>Giphy App</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item" id="flock-card">
                <a href="https://flock-51279.firebaseapp.com/" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Flock</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://moraveca.github.io/Word-Guess-Game/" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Hangman</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://vast-bastion-19663.herokuapp.com/" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>My Burger</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://moraveca.github.io/unit-4-game/" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Crystal Game</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
          My name is Adrian Moravec. In July 2019, I completed a Full Stack Coding
          Bootcamp at the University of Minnesota. I'm familiar and comfortable using
          a wide range of different technologies including, but not limited to:
          Javascript, Node.js, React, Firebase, Express, MySQL, MongoDB, HTML, and CSS.

          I grew up in a small town of 6,000 in Nebraska and moved to attend school
          in Minneapolis. I graduated from Augsburg College with a double major in
          Music and Film. I then went on to study and obtain a Master's Degree in
          Film Journalism at the University of Scotland.

          I currently reside in Brooklyn Park, MN where I watch as many movies as 
          I possibly can and try to find time to cook and bake (particularly cookies).
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            Feel free to contact me if there's any projects you need help with!
          </p>

          <form method="post" action="https://formspree.io/moraveca@gmail.com">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="email" name="_replyto" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
