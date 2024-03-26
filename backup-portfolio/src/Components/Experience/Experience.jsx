import React from "react";
import styles from "./Experience.module.css";
import skills from "../../Data/Skill.json";
import historyData from "../../Data/History.json";
import swiftImage from "../../Assets/Skills/swift.png";
import JSImage from "../../Assets/Skills/js.png";
import reactImage from "../../Assets/Skills/react.png";
import pythonImage from "../../Assets/Skills/python_2.png";
import CImage from "../../Assets/Skills/csharp.png";
import railsImage from "../../Assets/Skills/rails.svg";
import ruby from "../../Assets/Skills/ruby.png";
import gitImage from "../../Assets/Skills/git_icon.png";
import unityImage from "../../Assets/Skills/unity.svg";
import trenditImage from "../../Assets/Skills/trendit_img.png";

const getImage = (imageSrc) => {
  switch (imageSrc) {
    case "Skills/swift.png":
      return swiftImage;
    case "Skills/js.png":
      return JSImage;
    case "Skills/react.png":
      return reactImage;
    case "Skills/python.png":
      return pythonImage;
    case "Skills/csharp.png":
      return CImage;
    case "Skills/rails.svg":
      return railsImage;
    case "Skills/ruby.png":
      return ruby
    case "Skills/git_icon.png":
      return gitImage;
    case "Skills/unity.svg":
      return unityImage;
    case "Skills/trendit_img.png":
      return trenditImage;
    default:
      return null;
  }
};

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>
        My <span>Experience</span>
      </h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {/* Renderização dos botões de imagem */}
          {skills.map((skill, skillId) => (
            <div key={skillId} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImage(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {/* Renderização do histórico */}
          {historyData.map((historyItem, historyId) => (
            <li key={historyId} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <img
                  src={getImage(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
