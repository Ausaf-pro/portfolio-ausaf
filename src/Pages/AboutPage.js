import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import gamelogo from "../img/gamelogo.png";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />

      {/* Education Section */}

      <Tittle title={"Education"} span={"Education"} />
      <div className="skill-container">
        <SkillsSection
          skill={"St. Xavier's HighSchool, (High School)"}
          progress={"9.4 CGPA"}
          width={"90%"}
        />
        <SkillsSection
          skill={"ODM PUBLIC SCHOOL (Sr. Secondary)"}
          progress={"72%"}
          width={"72%"}
        />
        <SkillsSection
          skill={"Silicon Institute of Technology, BBSR (B.TECH)"}
          progress={"8.3 CGPA"}
          width={"83%"}
        />
      </div>

      {/* Other Skills Section */}
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skill-container">
        <SkillsSection skill={"Javascript"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"C"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"C++"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"Python"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"OOPS"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"Java"} progress={"95%"} width={"95%"} />
        <SkillsSection skill={"HTML CSS"} progress={"100%"} width={"100%"} />
        <SkillsSection
          skill={"Competitive Coding"}
          progress={"15%"}
          width={"15%"}
        />
        <SkillsSection
          skill={"Data Structures and Algorithm"}
          progress={"40%"}
          width={"40%"}
        />
        <SkillsSection
          skill={"Database Management"}
          progress={"35%"}
          width={"35%"}
        />
      </div>

      <Tittle title={"Other Skills"} span={"Other Skills"} />
      <div className="services-container">
        <ServicesSection
          image={gamelogo}
          title={"Web design"}
          text={
            "Besides Coding, I also do web designing using React, and discover new techniques to implement in my web project and add these insane project to my git."
          }
        />
        <ServicesSection
          image={gamelogo}
          title={"Freelancing"}
          text={
            "As Freelancer I get my work through Fiverr.com, there's a lot to do here. I connect with people and many companies and get their work done with ease. "
          }
        />
        <ServicesSection
          image={gamelogo}
          title={"Gamer"}
          text={
            "Besides Programming world, I acknowledge myself in Gaming Indoor and Outdoor games. I Love doing gaming and Gym most often."
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
