import Project from "../components/Project";
import projects from "../projects";

export default function Portfolio() {
  return (
    <> 
    <h1>Blog Page</h1>
    <div className="container d-flex flex-wrap">
  
       <Project projects={projects} />
      
    </div>
    </>
  );
}
