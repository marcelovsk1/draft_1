import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, link}) => {
  return (
    <Col sm={6} md={4}>
      <div className="box">
        <img src={imgUrl} className="project-image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='section'>
            <a href={link} className="button i-button special-button">GitHub</a>
            {title === "Game of Codes" && (
              <a href="https://www.game-of-codes.pro/" className="button i-button">Live Demo</a>
            )}
          </div>
        </div>
      </div>
      {/* Renderiza apenas na versão para dispositivos móveis */}
      <div className="mobile-only">
        <p className="projects-title-mobile">{title}</p>
        <a href={link} className="special-button-mobile">GitHub</a>
      </div>
    </Col>
  )
}
