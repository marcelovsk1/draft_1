import React, { useEffect, useState } from 'react';
import './Intro.css';
import github from '../../img/github_icon.png';
import linkedin from '../../img/linkedin _icon.png';
import avatar from '../../img/avatar12.png';

const Intro = () => {
  const [typedText, setTypedText] = useState('');
  const texts = ["iOS Developer ", "Fullstack Dev"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setTypedText(prevText => prevText + texts[textIndex][charIndex]);
        setCharIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [textIndex, charIndex, texts]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      setTypedText('');
      setCharIndex(0);
    }, 2500); // Altera o texto a cada 3 segundos

    return () => clearTimeout(timeout);
  }, [textIndex, texts]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello, I am</span>
          <span>Marcelo Amaral</span>
          <div className="role-container">
            <span className='role'>{typedText}</span> {/* Renderiza o texto gradualmente */}
          </div>
        </div>
        <div className="i-buttons-container">
          <a href="https://flowcv.com/resume/p29t6q3gne" className="button-cv" target="_blank" rel="noopener noreferrer">Download CV</a>
          <button className="button-secondary i-button" onClick={scrollToContact}>Contact Info</button>
        </div>
        <div className="i-icons">
          <a href='https://github.com/marcelovsk1' className='i-icons'>
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/marceloamaralalves/" className='i-icons'>
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default Intro;
