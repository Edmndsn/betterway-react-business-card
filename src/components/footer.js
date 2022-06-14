import facebookIcon from "../images/facebook_icon.png";
import instagramIcon from "../images/instagram_icon.png";
import twitterIcon from "../images/twitter_icon.png";
import githubIcon from "../images/github_icon.png";

export default function Footer() {
  return (
    <footer className="footer--container" target="_blank">
      <a href="https://twitter.com/home">
        <img className="footer--twitter" src={twitterIcon} alt="twitter-icon" />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <img
          className="footer--facebook"
          src={facebookIcon}
          alt="facebook-icon"
        />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <img
          className="footer--instagram"
          src={instagramIcon}
          alt="instagram-icon"
        />
      </a>
      <a href="https://github.com/Edmndsn" target="_blank">
        <img className="footer--github" src={githubIcon} alt="github-icon" />
      </a>
    </footer>
  );
}
