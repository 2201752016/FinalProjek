import Navbar from '../components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="container">
          <h1>Welcome to Travel Journal</h1>
          <p>Your adventure starts here</p>
          <Link href="/activity">
            <span className="button">Explore Activities</span>
          </Link>
        </div>
      </div>
      <div className="container">
        <h2>Featured Activities</h2>
        <div className="activities">
          <div className="activity">
            <h3>Hiking</h3>
            <p>Explore the mountains and enjoy the scenic views.</p>
          </div>
          <div className="activity">
            <h3>Beach</h3>
            <p>Relax by the beach and soak up the sun.</p>
          </div>
          <div className="activity">
            <h3>City Tour</h3>
            <p>Discover the city's hidden gems and attractions.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          background-image: url('/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          padding: 5rem 0;
          text-align: center;
          color: white;
        }
        .hero h1 {
          font-size: 2.5rem;
        }
        .hero p {
          font-size: 1.25rem;
          margin: 1rem 0;
        }
        .activities {
          display: flex;
          justify-content: space-between;
        }
        .activity {
          flex: 1;
          margin: 1rem;
          padding: 1rem;
          background-color: white;
          border-radius: 0.375rem;
          text-align: center;
        }
        .activity h3 {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Home;

