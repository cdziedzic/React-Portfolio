export default function Project({projects}) {
    return (
        <ul>
            {projects.map(project => (
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <a href={project.github} className="card-text">{project.title}</a>
                </div>
            </div>
            ))}
        </ul>
    )
}


