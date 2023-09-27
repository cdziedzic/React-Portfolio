import file from '../assets/ChrisDziedzic resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <h2>Download my <a href={file} download="Chris-Dziedzic-Resume">Resume</a></h2>
      <br />
      Front-end Proficienicies
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>

        <br />
      Back-end Proficiencies
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySql, Seqeulize</li>
        <li>MongoDb, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
<br />
<br />
<br />
    </div>
  );
}
