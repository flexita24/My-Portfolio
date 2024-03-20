import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discuss new
            projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">jurayevamehriniso1@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+998957073216</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100094519990104"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/flexita__24"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/mehriniso-jurayeva-9a7536282/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/mehriniso_umidovna/"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form action="mailto:jurayevamehriniso1@gmail.com" method="post" enctype="text/plain" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <div className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
