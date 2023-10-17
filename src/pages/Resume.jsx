import file from '../assets/Chris-Dziedzic-Resume.pdf'

export default function Resume() {
  return (
    <div>
      <br />
      <h2>Download my <a style={{color: 'blue'}} href={file} download="Chris-Dziedzic-Resume">Resume</a></h2>
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
