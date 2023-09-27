import Project from "../components/Project";
import projects from "../projects";

export default function Portfolio() {
  return (
    <> 
    <h1>My projects</h1>
    <div>
  
       <Project projects={projects} />
      
    </div>
    </>
  );
}
