import React, { useRef } from 'react';
import NavigationHeader from '../components/NavigationHeader'; 
import ExperienceSection from '../components/ExperienceSection';

function Portfolio() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const storyRef = useRef(null);
  const interestsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      {/* Navigation Header */}
      <NavigationHeader />

      {/* Sections */}
      <section ref={aboutRef} className="min-h-screen flex items-center gap-32">
        <div id="about-text" className="flex flex-col gap-[21px] px-20">
          <p
            className="w-[575px] h-[58px] flex justify-center text-black text-[40px] font-normal"
            style={{ fontFamily: "Young Serif" }}
          >
            Hello World, I'm Zanou Rih
          </p>
          <p
            className="w-[474px] text-black text-[16px] font-light px-3"
            style={{ fontFamily: "Averia Serif Libre" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
             mollit anim id est laborum.
          </p>
        </div>
        <div
          id="about-image"
          className="w-[429px] h-[368px] border border-[#BABABA] bg-[#F0F0F0]"
        >
          {/* image src goes here */}
        </div>
      </section>


      <section ref={portfolioRef} className="min-h-screen">
        <div className='section-title'>
            <p className='main-title'>Portfolio</p>
            <p className='subtitle'>A brief summary of my experience</p>
        </div>
        <div className="flex flex-col gap-32 px-20">
          <ExperienceSection companyName={"Intelcia S.A"} location={"Casablanca, Morocco"} jobTitle={"UX/Frontent Developer"} jobDescription={["Task 1", "Task 2"]} toolsImages={["path/to/image1.png", "path/to/image2.png"]} />
          <ExperienceSection companyName={"University of Ottawa"} location={"Ottawa, ON"} jobTitle={"Programmer Analyst"} jobDescription={["Task 1", "Task 2"]} toolsImages={["path/to/image3.png", "path/to/image4.png"]} />
          <ExperienceSection companyName={"University of Ottawa"} location={"Ottawa, ON"} jobTitle={"Employer Relations Assistant"} jobDescription={["Task 1", "Task 2"]} toolsImages={["path/to/image5.png", "path/to/image6.png"]} />
        </div>
        {/* Add Subsection for projects too */}
        {/* projects */}
      </section>

      <section ref={storyRef} className="min-h-screen">
      <div className='section-title'>
            <p className='main-title'>My Story</p>
            <p className='subtitle'>Get to know me and where I come from</p>
        </div>
      </section>

      <section ref={interestsRef} className="min-h-screen">
      <div className='section-title'>
            <p className='main-title'>My Interets</p>
            <p className='subtitle'>What keeps me entertained</p>
        </div>
      </section>

      <section ref={contactRef} className="min-h-screen">
      <div className='section-title'>
            <p className='main-title'>Contact Me</p>
            <p className='subtitle'>Get in touch with me</p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
