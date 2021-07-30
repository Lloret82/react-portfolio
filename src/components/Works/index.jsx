import "./style.css";
import cv from "./cv-dev.pdf"

const About = () => {
  return (
    <div className="wrap">
      <a href={cv} class="btn-slide" download>
  <span class="circle"><i class="fa fa-download"></i></span>
  <span class="title">Download</span>
  <span class="title-hover">Click here</span>
</a>
    </div>
  );
};

export default About;
