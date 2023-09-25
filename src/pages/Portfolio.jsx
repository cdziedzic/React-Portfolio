import Project from "../components/Project";
import projects from "../projects";

export default function Portfolio() {
  return (
    <div>
      <h1>Blog Page</h1>
  
       <Project projects={projects} />
      
    </div>
  );
}
