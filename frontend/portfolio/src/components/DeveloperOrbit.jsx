
export default function DeveloperOrbit() {
  return (
    <div className="developer-orbit">
      <div className="orbit-track orbit-track-one" aria-hidden="true">
        <span className="orbit-chip orbit-chip-code">python</span>
        <span className="orbit-chip orbit-chip-db">DB</span>
        <span className="orbit-chip orbit-chip-react">⚛</span>
      </div>
      <div className="orbit-track orbit-track-two" aria-hidden="true">
        {/* <span className="orbit-chip orbit-chip-terminal">Python</span>
        {/* <span className="orbit-chip orbit-chip-terminala">C</span> */}
        {/* <span className="orbit-chip orbit-chip-terminala">Java</span> */}
        {/* <span className="orbit-chip orbit-chip-api">API</span> */} 
        <span className="orbit-chip orbit-chip-python">Python</span>
        <span className="orbit-chip orbit-chip-java">Java</span>
        <span className="orbit-chip orbit-chip-api">API</span>
      </div>

      <div className="developer-character">
        <img src="/images/suraiya-developer.jpg" alt="Female software engineer working at a computer" />
      </div>
    </div>
  );
}
