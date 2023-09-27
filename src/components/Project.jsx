export default function Project({projects}) {
    return (
        <>
            {projects.map(project => (
            <div className="card p-1 m-5" style={{width: "22rem"}}>
                <img className="card-img-top" src={project.image} alt="Card image cap" />
                <div className="card-body">
                    <a href={project.github} className="card-text">{project.title}</a>
                    <br />
                    <a href={project.deployed}>Deployed Application</a>
                </div>
            </div>
            ))}
        </>
    )
}


