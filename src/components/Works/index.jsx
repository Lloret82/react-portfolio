import "./style.css";

const About = () => {
  return (
    <div className="works">
      <h1>Work Experience</h1>
      <h2>University of Manchester</h2>
      <h3>Bootcamp</h3>
      <p>Date: 2020 - 2021</p>
      <p>
        <li>Learned HTML, CSS, Javascript</li>
        <li>Created a Javascript web app for weather forecast</li>
        <li>
          Learned NodeJs, Express and MongoDB and created a fitness tracker
        </li>
        <li>
          Learned React and created a web app to keep trace of personal finance
          and a more complex one to plan a wedding.
        </li>
        <li>Learned cloud function (AWS, Heroku)</li>
        <li>
          Learned different libraries and framework as Boostrap, Bulma, Material
          UI, NextJS
        </li>
        <li>Learned GIT and how it fits into an AGILE workflow</li>
      </p>
      <br />
      <h2>Faith in Nature</h2>
      <h3>SEO Executive</h3>
      <p>Date: 2018 - 2020</p>
      <p>
        <li> Tracking Rankings, Traffic and Conversion Rates</li>
        <li> On-site Optimization</li>
        <li> Monitoring competitors websites</li>
        <li> Collaborating with internal developing and marketing team</li>
        <li> Link building</li>
        <li>
          {" "}
          Keyword Research using different platform as Semrush, Alexa, Google
          Keyword Planner
        </li>{" "}
        <li> Keep daily reports based on Google Analytics</li>
        <li> Knowledge of ranking factors and search engine algorithms</li>
        <li>
          {" "}
          Up-to-date with the latest trends and best practices in SEO and SEM
        </li>
        <br />
      </p>
      <h2>ADBwebSERVICE</h2>
      <h3>Wordpress Developer</h3>
      <p>Date: 2016 - 2018</p>
      <p>
        <li> Implementing pre-made and bespoke theme</li>
        <li> Page builder (Elementor, WPBakery, Divi, Salient) </li>
        <li> Implementing pre-made and bespoke Plugins </li>
        <li> Collaborating with graphic designer team</li>
        <li> Maintain database and hosting with Bluehost</li>
        </p>
    </div>
  );
};

export default About;
