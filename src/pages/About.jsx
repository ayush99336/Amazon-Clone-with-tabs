import "./css/About.css";

function AboutContent() {
  const faceImgPath = "other_images/pp.jpeg";
  const iconsDir = "icons_&_logos/";
  const icons = [
    {
      imgPath: iconsDir + "twitter.png",
      link: "https://twitter.com/ayush99336",
    },
    {
      imgPath: iconsDir + "linkedin.png",
      link: "https://www.linkedin.com/in/ayushkaushik-ism/",
    },
    {
      imgPath: iconsDir + "instagram.png",
      link: "https://www.instagram.com/thestonedphilosopherr/?hl=en",
    },
    {
      imgPath: iconsDir + "whatsapp.png",
      link: "https://wa.me/+918225051479",
    },
  ];
  function Icon({ icon }) {
    return (
      <a id="social-icon" href={icon.link}>
        <img src={icon.imgPath} alt="" />
      </a>
    );
  }
  return (
    <div id="a-ac">
      <div id="ac-about-card">
        <span>
          <img src={faceImgPath} alt="" />
        </span>
        <p>Admin</p>
        <p>Ayush Kaushik</p>
        <p>IIT Dhanbad</p>
        <hr />
        <div id="ac-icons-flex">
          {icons.map((icon, index) => (
            <Icon icon={icon} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div id="about">
      <AboutContent />
    </div>
  );
}

export default About;
