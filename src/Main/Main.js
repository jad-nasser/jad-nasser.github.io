import Navbar from "../Navbar/Navbar";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import freeImagesPic from "../Project/FreeImages/images/home-page-large.jpg";
import freeLibraryPic from "../Project/FreeLibrary/images/home-page.png";
import sunglassesOnlineStorePic from "../Project/SunglassesOnlineStore/images/home-page.jpg";
import fromExcelToRelationalDatabasePic from "../Project/FromExcelToRelationalDatabaseConverter/images/database-diagram.png";
import freeImagesBlurPic from "../Project/FreeImages/images/blur/home-page-large-min.jpg";
import freeLibraryBlurPic from "../Project/FreeLibrary/images/blur/home-page-min.jpg";
import sunglassesOnlineStoreBlurPic from "../Project/SunglassesOnlineStore/images/blur/home-page-min.jpg";
import fromExcelToRelationalDatabaseBlurPic from "../Project/FromExcelToRelationalDatabaseConverter/images/blur/database-diagram-min.jpg";
import Footer from "../Footer/Footer";
import LazyImg from "../LazyImg/LazyImg";

function Main() {
  return (
    <div className="main">
      {/* Navbar */}
      <Navbar />

      {/* Intoduction */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong className="gold-gradient jad name">Jad</strong>{" "}
          <strong className="blue-gradient name">Nasser</strong>
        </h1>
        <h2 className="section__subtitle section__subtitle--intro">
          Software Developer
        </h2>
      </section>

      {/* My Services */}
      <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I Do</h2>
        <div className="services">
          <div className="service">
            <h3>Front End Web Developer</h3>
            <p className="service-paragraph">
              Able to develop the front end of a website using JavaScript,
              TypeScript, React js, HTML, CSS, and Bootstrap. Able to write Unit
              / Integration / e2e tests.
            </p>
          </div>{" "}
          {/* </service> */}
          <div className="service">
            <h3>Back End Web Developer</h3>
            <p className="service-paragraph">
              Able to develop the back end of a website using Node.js, Express
              js, JavaScript, and TypeScript, with databases like MongoDB and
              SQL Server. Able to write Unit / Integration / e2e tests.
            </p>
          </div>{" "}
          {/* </service> */}
          <div className="service">
            <h3>Other Skills</h3>
            <p className="service-paragraph">
              Familiar with Algorithms, Data Structures, and programming
              concepts like OOP and MVC. Able to write code using languages like
              Java, C, C++, C#, SWI-Prolog, GNU Octave, MATLAB.
            </p>
          </div>{" "}
          {/* </service> */}
        </div>{" "}
        {/* </services> */}
        <HashLink to="/#work" className="btn">
          My Work
        </HashLink>
      </section>

      {/* About Me */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I Am</h2>

        <div className="about-me__body">
          <p>
            I'm a passionate and persistent Software Developer. I've graduated
            with a Bachelor's degree in Computer Science.
          </p>
          <p>
            Always passionate about everything I do, especially in my
            profession. I love my work to be unique and excellent.
          </p>
          <p>
            Always persistent and patient about my profession. Ready at anytime
            to learn and learn and learn to achieve excellence. Because of this,
            I've learned many skills, programming languages and frameworks by
            myself.
          </p>
          <p>
            I'm now excited and ready to take a new step in my career and work
            for the first time in a company, to get to know and meet new people
            and collaborate with them to reach excellent results. I always love
            and accept to hear any note about me and my work because that
            improves me more.
          </p>
        </div>
      </section>

      {/* My Work */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>

        <div className="portfolio">
          {/* portfolio item 1 */}
          <Link className="portfolio__item" to="/free-images">
            <LazyImg
              placeholder={freeImagesBlurPic}
              src={freeImagesPic}
              alt="Free Images Website"
              className="portfolio__img"
              width={250}
              height={250}
            ></LazyImg>
            <span className="hoverable">Free Images Website</span>
          </Link>

          {/* portfolio item 2 */}
          <Link className="portfolio__item" to="/free-library">
            <LazyImg
              placeholder={freeLibraryBlurPic}
              src={freeLibraryPic}
              alt="Free Library Website"
              className="portfolio__img"
              width={250}
              height={250}
            ></LazyImg>
            <span className="hoverable">Free Library Website</span>
          </Link>

          {/* portfolio item 3 */}
          <Link className="portfolio__item" to="/sunglasses-online-store">
            <LazyImg
              placeholder={sunglassesOnlineStoreBlurPic}
              src={sunglassesOnlineStorePic}
              alt="Sunglasses Online Store Website"
              className="portfolio__img"
              width={250}
              height={250}
            ></LazyImg>
            <span className="hoverable">Sunglasses Online Store Website</span>
          </Link>

          {/* portfolio item 4 */}
          <Link
            className="portfolio__item"
            to="/from-excel-to-relational-database-converter"
          >
            <LazyImg
              placeholder={fromExcelToRelationalDatabaseBlurPic}
              src={fromExcelToRelationalDatabasePic}
              alt="From Excel to Relational Database Converter Program"
              className="portfolio__img"
              width={250}
              height={250}
            ></LazyImg>
            <span className="hoverable">
              From Excel to Relational Database Converter Program
            </span>
          </Link>
        </div>
        <div className="my-work-paragraph-div">
          <p className="my-work-paragraph">
            Also this website is one of my works. You can check out the{" "}
            <a href="https://github.com/jad-nasser/jad-nasser.github.io.git">
              repository
            </a>{" "}
            for more details.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Main;
