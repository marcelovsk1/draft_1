import React from 'react';
import './Intro.css';
import github from '../../img/github_icon.png'
import linkedin from '../../img/linkedin _icon.png'
import avatar from '../../img/avatar12.png';

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello, I am</span>
          <span>Marcelo Amaral</span>
          <span className='role'>iOS Developer </span>
        </div>
        <div className="i-buttons-container">
          <button className="button i-button">Download CV</button>
          {/* Usando a função scrollToContact para rolar até a seção de contato */}
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
