import React from "react";
import "../Style/Skills.scss";

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
    { id:1, img: photoshop, name: "photoshop" },
    { id:2, img: illustrator, name: "illustrator" },
    { id:3, img: premierepro, name: "PremierePro" },
    { id:4, img: github, name: "github" },
    { id:5, img: firebase, name: "firebase" },
    { id:6, img: html, name: "html" },
    { id:7, img: css, name: "css" },
    { id:8, img: javascript, name: "javascript" },
    { id:9, img: reactjs, name: "react.js" },
    { id:10, img: vscode, name: "visual studio code" },
    { id:11, img: gsap, name: "gsap" },
    { id:12, img: tailwind, name: "tailwind" },
    { id:13, img: pigma, name: "pigma" },
    { id:14, img: xd, name: "xd" },
    { id:15, img: chatgpt, name: "chatgpt" },
    { id:16, img: cursor, name: "cursor" },
    { id:17, img: copilot, name: "copilot" },
];


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
