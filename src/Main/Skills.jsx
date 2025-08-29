import React from "react";
import "../Style/Skills.scss";

const Skills = () => {
    const skills = [
        { id:1, img: "/img/skill-photoshop.png", name: "photoshop" },
        { id:2, img: "/img/skill-illustrator.png", name: "illustrator" },
        { id:3, img: "/img/skill-premierepro.png", name: "PremierePro" },
        { id:4, img: "/img/skill-github.png", name: "github" },
        { id:5, img: "/img/skill-firebase.png", name: "firebase" },
        { id:6, img: "/img/skill-html.png", name: "html" },
        { id:7, img: "/img/skill-css.png", name: "css" },
        { id:8, img: "/img/skill-javascript.png", name: "javascript" },
        { id:9, img: "/img/skill-react.png", name: "react.js" },
        { id:10, img: "/img/skill-visualstudiocode.png", name: "visual studio code" },
        { id:11, img: "/img/skill-gsap.png", name: "gsap" },
        { id:12, img: "/img/skill-tailwind.png", name: "tailwind" },
        { id:13, img: "/img/skill-pigma.png", name: "pigma" },
        { id:14, img: "/img/skill-xd.png", name: "xd" },
        { id:15, img: "/img/skill-chatgpt.png", name: "chatgpt" },
        { id:16, img: "/img/skill-cursor.png", name: "cursor" },
        { id:17, img: "/img/skill-copilot.png", name: "copilot" },

    ]

   return (
    <div className="skill">
        <h2>무얼 사용하나요?</h2>
        <div className="skills-wrapper">
        <div className="skills-track">
            {/* 무한 스크롤 효과 위해 skills 배열을 두 번 반복 */}
            {[...skills, ...skills].map((skill) => (
            <div className="skill-item" key={skill.id + Math.random()}>
                <img src={skill.img} alt={skill.name} />
                <span className="skill-name">{skill.name}</span>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}

export default Skills;
