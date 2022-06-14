import meImage from "../images/me_image.jpg";
import emailIcon from "../images/email.png";
import linkedinIcon from "../images/linkedin.svg";

export default function Info() {
  return (
    <div className="info--container">
      <div className="info--img_container">
        <img className="info--img" src={meImage} alt="Myself" />
      </div>

      <div className="info--text">
        <h1 className="info--title">Jack Edmondson</h1>
        <h3 className="info--desc">Frontend Developer</h3>
        <a href="#">
          <p className="info--link">jackedmondson.website</p>
        </a>
      </div>

      <div className="info--buttons_container">
        <a href="mailto:edmondson.jackw@gmail.com" target="_blank">
          <button className="info--email">
            <img src={emailIcon} />
            Email
          </button>
        </a>

        <a href="https://www.linkedin.com/in/jackedmondson/" target="_blank">
          <button className="info--linkedin">
            <img src={linkedinIcon} />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
