import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import { AVStack } from "../AV/AVSections";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            I'm <strong>Lucky Parihar</strong>, an techie based out of India who has programmed the rooms and also pitched them. I work hands-on across Crestron, Q-SYS, Biamp, AMX and AV over IP, from DSP and control code to site commissioning and customer demos.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            That depth is what I bring to Application Engineering and Market Development. I know where a product shines, where it breaks, and how to explain both to a customer. I have run 100+ demos a month, designed BOQs and schematics, led multi-crore projects, and trained 100+ students.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            B.Tech in Electronics and Communication, JEC Jabalpur. Football captain, TEDx anchor, General Secretary and Smart India Hackathon finalist, so I am as comfortable leading a room as wiring one.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <strong>Things you will find in me :</strong> Application Engineer and Market Development roles where deep product knowledge turns into wins.
              <div className="tagline2">
                What I know inside out:
              </div>
            </ScrollAnimation>

            <AVStack />
            <div className="tagline2">Software I also write:</div>

            <Technologies>
              {stackList.filter((t) => ["JavaScript","ReactJS","Python","C++","MySQL","MongoDB","Git","Flask"].includes(t.name)).map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
