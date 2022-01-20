import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/"><button type="button" className="navLinks">Home</button></Link>
        <Link to="/calculator"><button type="button" className="navLinks">Calculator</button></Link>
        <Link to="/quote"><button type="button" className="navLinks">Quote</button></Link>
      </nav>
    </div>
  );
}
