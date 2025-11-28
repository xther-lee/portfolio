import React from "react";
import "../Style/Skills.scss";

import notion from '../img/skill-notion.png';
import photoshop from '../img/skill-photoshop.png';
import illustrator from '../img/skill-illustrator.png';
import premierepro from '../img/skill-premierepro.png';
import github from '../img/skill-github.png';
import firebase from '../img/skill-firebase.png';
import html from '../img/skill-html.png';
import css from '../img/skill-css.png';
import javascript from '../img/skill-javascript.png';
import reactjs from '../img/skill-react.png';
import vscode from '../img/skill-visualstudiocode.png';
import gsap from '../img/skill-gsap.png';
import tailwind from '../img/skill-tailwind.png';
import pigma from '../img/skill-pigma.png';
import xd from '../img/skill-xd.png';
import chatgpt from '../img/skill-chatgpt.png';
import cursor from '../img/skill-cursor.png';
import copilot from '../img/skill-copilot.png';


const Skills = () => {
    const skills = [
    { id:1, img: notion, name: "Notion" },
    { id:2, img: photoshop, name: "Photoshop" },
    { id:3, img: illustrator, name: "Illustrator" },
    { id:4, img: premierepro, name: "PremierePro" },
    { id:5, img: pigma, name: "Pigma" },
    { id:6, img: xd, name: "Xd" },
    { id:7, img: github, name: "Github" },
    { id:8, img: firebase, name: "Firebase" },
    { id:9, img: html, name: "HTML" },
    { id:10, img: css, name: "CSS" },
    { id:11, img: javascript, name: "JAVASCRIPT" },
    { id:12, img: reactjs, name: "React.js" },
    { id:13, img: vscode, name: "Visual studio code" },
    { id:14, img: gsap, name: "GSAP" },
    { id:15, img: tailwind, name: "Tailwind" },
    { id:16, img: chatgpt, name: "Chatgpt" },
    { id:17, img: cursor, name: "Cursor" },
    { id:18, img: copilot, name: "Copilot" },
];


   return (
    <div className="skill">
        <h2>무얼 사용할 수 있나요?</h2>
        <div className="skills-wrapper">
            <div className="skills-track">
                {/* 무한 스크롤 효과 위해 skills 배열을 4번 반복 */}
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                <div className="skill-item" key={`${skill.id}-${index}`}>
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
