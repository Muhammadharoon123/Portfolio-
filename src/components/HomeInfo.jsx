import { Link } from "react-router-dom";
import arrow from "../assets/3d/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center justify-center pointer-events-none px-6">
    <div className="glassmorphism py-6 px-5 text-white rounded-3xl shadow-2xl border border-white/10 text-center flex flex-col items-center gap-5 pointer-events-auto max-w-xl transition-all duration-300 ease-in-out">
      <p className="font-light sm:text-2xl leading-relaxed tracking-wide text-white/90">
        {text}
      </p>

      <Link
        to={link}
        className="group relative inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
      >
        {btnText}
        <img
          src={arrow}
          alt="arrow"
          className="w-4 h-4 object-contain group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </div>
  </div>
);

const HomeInfo = ({ currentStage }) => {
  const renderContent = {
    1: (
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center items-center pointer-events-none px-6">
        <h1 className="sm:text-2xl sm:leading-snug text-center glassmorphism py-6 px-12 text-white rounded-3xl shadow-2xl border border-white/10 pointer-events-auto font-light">
          Hi, I am{" "}
          <span className="font-bold bg-linear-to-r from-blue-200 to-white bg-clip-text text-transparent">
            Muhammad Haroon
          </span>{" "}
          👋
          <br />
          <span className="text-white/80 text-lg sm:text-xl">
            Software Engineer from Pakistan
          </span>
        </h1>
      </div>
    ),
    2: (
      <InfoBox
        text="Worked with diverse companies and mastered modern tech stacks along the way"
        link="/about"
        btnText="Discover my journey"
      />
    ),
    3: (
      <InfoBox
        text="From concept to deployment—exploring a portfolio of impactful digital solutions"
        link="/projects"
        btnText="View my work"
      />
    ),
    4: (
      <InfoBox
        text="Have a vision in mind? Let's collaborate and build something extraordinary"
        link="/contact"
        btnText="Get in touch"
      />
    ),
  };

  return renderContent[currentStage] || null;
};

export default HomeInfo;
