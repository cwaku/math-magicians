import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </div>
  );
}
