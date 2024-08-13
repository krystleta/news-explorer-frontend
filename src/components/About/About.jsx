import "./About.css";
import avatar from "../../assets/avatar.jpg";

function About() {
    return (
      <div className="about__section">
        <div className="about__section-image">
            <img className="about__image" src={avatar} alt="Krystle Ta" />
        </div>
        <div className="about__information">
            <h2 className="about__title">About the author</h2>
            <p className="about__content">Krystle is a Software Engineer currently living in Orange County, California. After previously working as a Web Developer and Manager for 9 years, primarily in the Content Management System space, Krystle took an 8 year hiatus during which she moved countries and became a restaurant owner and mother of 3 boys.</p>
            <p className="about__content">Now making another pivot back to the world of technology, Krystle is about to complete the Software Engineering course at TripleTen to brush up her skills, learn new technologies and gain the confidence to persue her passion for working in the technology space.</p>
        </div>
      </div>
    );
  }
  
  export default About;