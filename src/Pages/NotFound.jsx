import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="hero-center hero-content">
        <div className="max-w-lg">
          <div className="text-8xl mb-8 font-bold">Oops!</div>
          <p className="text-5xl mb-8">404 - Page not Found!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
