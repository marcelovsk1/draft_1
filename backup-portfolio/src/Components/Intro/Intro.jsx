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
    }, 200); // Intervalo para uma transição mais suave

    return () => clearInterval(interval);
  }, [textIndex, charIndex, texts]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      setTypedText(''); // Limpa o texto digitado para exibir o próximo texto
      setCharIndex(0); // Reinicia o índice de caracteres para exibir o próximo texto
    }, 2000); // Altera o texto a cada 3 segundos

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
          <button className="button i-button">Download CV</button>
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
