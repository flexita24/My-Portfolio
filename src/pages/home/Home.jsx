import { Link } from "react-router-dom";
import Profile from "/img/Mehriniso (1).png";
import "./home.css";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm J.Mehriniso.</span> Frontend Developer
          </h1>
          <p className="home__description">
            I am a highly skilled and experienced frontend developer with a
            passion for creating visually appealing and user-friendly websites.
            With a strong background in HTML, CSS, and JavaScript.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
