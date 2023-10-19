import headshot from '../assets/headshot.jpg'

export default function Home() {
  return (
    <div>
      <img style={{borderRadius: '50%', height: '40vh'}} id="headshot" src={headshot} alt="headshot" />
      <p>
      Finance and economics professional with a background in managing high net worth client portfolios. Recently transitioning into Full Stack Web development via the University of Pennsylvania coding bootcamp. Possessing excellent problem-solving and communication skills, adept at process improvement, and proficient in both front and back end web development. Seeking a role that leverages web development skills to deliver innovative solutions and drive business growth.
      </p>
    </div>
  );
}
