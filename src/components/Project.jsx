import './project.css'
import { useState, useEffect } from 'react';

export default function Project({ projects }) {
    const [colClass, setColClass] = useState('col-md-4'); // Default class

    useEffect(() => {
      function handleResize() {
        // Check the screen width and update the class accordingly
        if (window.innerWidth <= 768) {
          setColClass('col-md-3');
        } 
        if (window.innerWidth <= 992) {
            setColClass('col-md-5');
        }
        else {
          setColClass('col-md-4');
        }
      }

      window.addEventListener('resize', handleResize);

      // Initial class setup
      handleResize();
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        

        <div className="container mt-4">
            <div className="d-flex flex-wrap">
            {projects.map((project, index) => (
                    <div className={colClass} key={index}>
                        <div className="card">
                            <img
                                src={project.image}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <h6 className="card-subtitle mb-2">{project.technology}</h6>
                                <p className="card-text">
                                    {project.description}
                                </p>
                                <a href={project.deployed} className="btn mr-2">
                                    <i className="fas fa-link"></i> Visit Site
                                </a>
                                <a href={project.github} className="btn ">
                                    <i className="fab fa-github"></i> Github
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                </div>

    );
              
}
