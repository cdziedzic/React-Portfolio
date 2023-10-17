import '../index.css'

export default function Project({ projects }) {
    return (

        <div className="container mx-auto mt-4">
            <div className="row">
            {projects.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: "25rem" }}>
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